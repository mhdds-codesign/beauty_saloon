<template>
  <div class="schedules-view">
    <!-- هدر صفحه و ابزارها -->
    <div class="view-header-row">
      <div>
        <h2><i class="fas fa-calendar-alt"></i> جدول زمان‌بندی و نوبت‌های هر لاین</h2>
        <p class="view-subtitle">برنامه زمانی هفتگی به تفکیک روز و ساعت برای هر یک از لاین‌های تخصصی سالن (آزاد: سبز | رزرو شده: قرمز)</p>
      </div>

      <div class="header-action-group">
        <!-- سوئیچ بین نمای جداول اختصاصی هر لاین و لیست کلی -->
        <div class="view-mode-toggle">
          <button 
            class="mode-btn" 
            :class="{ active: viewMode === 'lineTables' }"
            @click="viewMode = 'lineTables'"
            title="جدول جداگانه روز و ساعت برای هر سرویس"
          >
            <i class="fas fa-calendar-week"></i>
            <span class="d-none-mobile">جدول روز و ساعت هر لاین</span>
          </button>
          <button 
            class="mode-btn" 
            :class="{ active: viewMode === 'flatTable' }"
            @click="viewMode = 'flatTable'"
            title="فهرست ساده و متنی نوبت‌ها"
          >
            <i class="fas fa-list"></i>
            <span class="d-none-mobile">لیست فشرده</span>
          </button>
        </div>

        <router-link to="/schedules/new" class="btn btn-primary" v-if="isAdmin">
          <i class="fas fa-plus"></i> تعریف زمان کاری جدید
        </router-link>
      </div>
    </div>

    <!-- خلاصه آماری کل نوبت‌های سالن -->
    <div class="kpi-summary-row">
      <div class="kpi-pill kpi-total">
        <i class="fas fa-clock"></i>
        <span>کل اسلات‌های سالن:</span>
        <strong>{{ schedules.length }}</strong>
      </div>
      <div class="kpi-pill kpi-free">
        <span class="kpi-dot dot-green"></span>
        <span>کل تایم‌های آزاد (سبز):</span>
        <strong>{{ totalFreeCount }}</strong>
      </div>
      <div class="kpi-pill kpi-busy">
        <span class="kpi-dot dot-red"></span>
        <span>کل تایم‌های رزروشده (قرمز):</span>
        <strong>{{ totalBusyCount }}</strong>
      </div>
    </div>

    <!-- تب‌های انتخاب سرویس / لاین -->
    <div class="card filter-card">
      <div class="card-body">
        <div class="filter-header-label">
          <i class="fas fa-cut" style="color: var(--rose-gold);"></i>
          <span>انتخاب لاین تخصصی جهت مشاهده جدول زمان‌بندی:</span>
        </div>
        <div class="line-tabs-row">
          <button 
            class="line-tab-btn" 
            :class="{ active: activeLineTab === 'all' }"
            @click="activeLineTab = 'all'"
          >
            <i class="fas fa-th-large"></i> همه لاین‌ها (نمایش جداگانه همه)
          </button>
          <button 
            v-for="line in distinctLines" 
            :key="line" 
            class="line-tab-btn"
            :class="{ active: activeLineTab === line }"
            @click="activeLineTab = line"
          >
            <i :class="getLineIcon(line)"></i> لاین {{ line }}
            <span class="tab-badge">{{ getLineSlots(line).length }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- وضعیت بارگذاری -->
    <div v-if="loading" class="loading">
      <i class="fas fa-spinner fa-spin fa-2x" style="color: var(--rose-gold); margin-bottom: 0.75rem;"></i>
      <p>در حال بارگذاری جدول زمان‌بندی لاین‌ها...</p>
    </div>

    <!-- ========================================================
         ۱. جدول جداگانه روز و ساعت برای هر سرویس (خواست اصلی کاربر)
         ======================================================== -->
    <div v-else-if="viewMode === 'lineTables'" class="line-tables-container">
      <div 
        v-for="line in displayedLines" 
        :key="line" 
        class="card line-schedule-card"
      >
        <!-- هدر کارت لاین -->
        <div class="card-header line-card-header">
          <div class="line-header-left">
            <span class="line-header-icon"><i :class="getLineIcon(line)"></i></span>
            <div>
              <h3 class="line-header-title">جدول زمان‌بندی نوبت‌های لاین {{ line }}</h3>
              <small class="line-header-sub">تقویم هفتگی روزها و ساعات کاری تعریف‌شده برای خدمات {{ line }}</small>
            </div>
          </div>

          <div class="line-header-stats">
            <span class="badge badge-success">
              <span class="status-circle dot-green"></span>
              {{ getLineFreeCount(line) }} آزاد (سبز)
            </span>
            <span class="badge badge-danger">
              <span class="status-circle dot-red"></span>
              {{ getLineBusyCount(line) }} رزرو شده (قرمز)
            </span>
            <router-link 
              v-if="isAdmin" 
              :to="`/schedules/new`" 
              class="btn btn-sm btn-secondary"
              title="افزودن اسلات برای این لاین"
            >
              <i class="fas fa-plus"></i> شیفت جدید
            </router-link>
          </div>
        </div>

        <!-- جدول ماتریسی روز و ساعت برای این لاین -->
        <div class="card-body" style="padding: 0;">
          <div class="table-responsive">
            <table class="table schedule-matrix-table">
              <thead>
                <tr>
                  <th class="time-col-header"><i class="far fa-clock"></i> ساعت / زمان</th>
                  <th v-for="day in weekDays" :key="day.key" class="day-col-header">
                    {{ day.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="timeSlot in standardTimeSlots" :key="timeSlot.start">
                  <!-- ستون ساعت -->
                  <td class="time-col-cell">
                    <strong>{{ timeSlot.start }} تا {{ timeSlot.end }}</strong>
                  </td>

                  <!-- ستون‌های روزهای هفته (شنبه تا چهارشنبه/پنجشنبه) -->
                  <td 
                    v-for="day in weekDays" 
                    :key="day.key" 
                    class="slot-matrix-cell"
                  >
                    <!-- اگر اسلاتی برای این لاین در این روز و این ساعت وجود دارد -->
                    <template v-if="getSlot(line, day.name, timeSlot)">
                      <div 
                        class="matrix-slot-badge"
                        :class="getSlot(line, day.name, timeSlot).status === 'free' ? 'cell-free' : 'cell-busy'"
                      >
                        <!-- ردیف وضعیت بالا -->
                        <div class="matrix-slot-top">
                          <span class="matrix-status-title">
                            <span 
                              class="status-circle" 
                              :class="getSlot(line, day.name, timeSlot).status === 'free' ? 'dot-green' : 'dot-red'"
                            ></span>
                            {{ getSlot(line, day.name, timeSlot).status === 'free' ? 'آزاد' : 'رزرو شده' }}
                          </span>
                          <span class="matrix-slot-id">#{{ getSlot(line, day.name, timeSlot).id }}</span>
                        </div>

                        <!-- دکمه رزرو برای مشتری در صورت آزاد بودن -->
                        <router-link 
                          v-if="getSlot(line, day.name, timeSlot).status === 'free'"
                          :to="`/reservations/new?schedule_id=${getSlot(line, day.name, timeSlot).id}`"
                          class="matrix-reserve-btn"
                          title="رزرو این تایم"
                        >
                          <i class="fas fa-check-circle"></i> رزرو نوبت
                        </router-link>

                        <!-- برچسب قفل رزرو -->
                        <span v-else class="matrix-locked-label">
                          <i class="fas fa-lock"></i> تکمیل
                        </span>

                        <!-- اکشن‌های ادمین -->
                        <div class="matrix-admin-tools" v-if="isAdmin">
                          <router-link 
                            :to="`/schedules/${getSlot(line, day.name, timeSlot).id}/edit`"
                            class="admin-tool-btn"
                            title="ویرایش"
                          >
                            <i class="fas fa-edit"></i>
                          </router-link>
                          <button 
                            class="admin-tool-btn btn-del"
                            @click="doDelete(getSlot(line, day.name, timeSlot))"
                            title="حذف"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </template>

                    <!-- در صورت عدم تعریف شیفت برای این روز و ساعت -->
                    <span v-else class="empty-matrix-slot" title="بدون شیفت در این زمان">—</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- وضعیت عدم وجود لاین -->
      <div v-if="!displayedLines.length" class="empty-state-card text-center p-5">
        <i class="fas fa-calendar-times fa-3x" style="color: var(--rose-gold); margin-bottom: 1rem;"></i>
        <h4>هیچ برنامه‌ای یافت نشد</h4>
        <p>لطفاً فیلتر لاین را تغییر دهید یا برنامه کاری جدید ثبت نمایید.</p>
      </div>
    </div>

    <!-- ========================================================
         ۲. نمای جدولی ساده و فشرده (اختیاری)
         ======================================================== -->
    <div v-else class="card">
      <div class="card-header">
        <span>فهرست کل اسلات‌های کاری سالن</span>
        <span class="badge badge-secondary">{{ schedules.length }} نوبت</span>
      </div>
      <div class="card-body" style="padding:0;">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>کد</th>
                <th>لاین</th>
                <th>روز هفته</th>
                <th>ساعت شروع</th>
                <th>ساعت پایان</th>
                <th>وضعیت</th>
                <th>رزرو</th>
                <th v-if="isAdmin">مدیریت</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="s in schedules" :key="s.id">
                <td>#{{ s.id }}</td>
                <td><strong>{{ s.line_name }}</strong></td>
                <td>{{ s.weekday }}</td>
                <td>{{ s.start_time }}</td>
                <td>{{ s.end_time }}</td>
                <td>
                  <span class="badge" :class="s.status === 'free' ? 'badge-success' : 'badge-danger'">
                    {{ s.status === 'free' ? 'آزاد (سبز)' : 'رزرو شده (قرمز)' }}
                  </span>
                </td>
                <td>
                  <router-link 
                    v-if="s.status === 'free'"
                    :to="`/reservations/new?schedule_id=${s.id}`"
                    class="btn btn-sm btn-primary"
                  >
                    رزرو
                  </router-link>
                  <span v-else class="text-danger" style="font-size: 0.8rem;">تکمیل</span>
                </td>
                <td v-if="isAdmin">
                  <router-link :to="`/schedules/${s.id}/edit`" class="btn btn-sm btn-warning">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button class="btn btn-sm btn-danger" @click="doDelete(s)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api.js'
import { auth } from '../auth.js'
import toast from '../services/toast.js'
import showConfirm from '../services/confirm.js'

export default {
  name: 'Schedules',
  computed: {
    isAdmin() {
      return auth.role === 'admin'
    },
    // استخراج لیست یکتای لاین‌ها از دیتابیس
    distinctLines() {
      const set = new Set()
      this.schedules.forEach(s => {
        if (s.line_name && s.line_name.trim()) {
          set.add(s.line_name.trim())
        }
      })
      // اگر هنوز هیچ رکوردی نبود، لاین‌های پیش‌فرض
      if (!set.size) return ['مو', 'ناخن', 'پوست', 'میکاپ']
      return Array.from(set)
    },
    // لاین‌هایی که باید جدول آن‌ها رسم شود
    displayedLines() {
      if (this.activeLineTab === 'all') {
        return this.distinctLines
      }
      return [this.activeLineTab]
    },
    totalFreeCount() {
      return this.schedules.filter(s => s.status === 'free').length
    },
    totalBusyCount() {
      return this.schedules.filter(s => s.status !== 'free').length
    }
  },
  data() {
    return {
      schedules: [],
      loading: true,
      viewMode: 'lineTables', // 'lineTables' (جدول جداگانه برای هر سرویس) یا 'flatTable'
      activeLineTab: 'all',
      // روزهای رسمی هفته در ایران به ترتیب
      weekDays: [
        { key: 'sat', name: 'شنبه' },
        { key: 'sun', name: 'یکشنبه' },
        { key: 'mon', name: 'دوشنبه' },
        { key: 'tue', name: 'سه‌شنبه' },
        { key: 'wed', name: 'چهارشنبه' },
        { key: 'thu', name: 'پنج‌شنبه' }
      ],
      // اسلات‌های ساعت کاری استاندارد سالن
      standardTimeSlots: [
        { start: '09:00', end: '11:00' },
        { start: '11:00', end: '13:00' },
        { start: '13:00', end: '15:00' },
        { start: '15:00', end: '17:00' },
        { start: '17:00', end: '19:00' }
      ]
    }
  },
  async created() {
    await this.load()
  },
  methods: {
    async load() {
      this.loading = true
      try {
        // دریافت کلیه نوبت‌ها تا جدول هفتگی کامل ترسیم شود
        const res = await api.schedules({ per_page: 200 })
        this.schedules = res.schedules || []

        // اگر اسلات ساعت غیر استانداردی تعریف شده بود به لیست اضافه کن
        this.schedules.forEach(s => {
          if (s.start_time && !this.standardTimeSlots.some(ts => ts.start === s.start_time)) {
            this.standardTimeSlots.push({
              start: s.start_time,
              end: s.end_time || ''
            })
            this.standardTimeSlots.sort((a, b) => a.start.localeCompare(b.start))
          }
        })
      } catch (e) {
        console.error(e)
        toast.error('خطا در بارگذاری برنامه کاری: ' + (e.message || ''))
      } finally {
        this.loading = false
      }
    },

    // نرمال‌سازی حروف فارسی جهت رفع باگ نیم‌فاصله‌ها ("سه‌شنبه" vs "سه شنبه")
    normalizeString(val) {
      if (!val) return ''
      return String(val)
        .replace(/[\u200c\s]/g, '') // حذف نیم‌فاصله و اسپیس‌های معمولی
        .trim()
        .toLowerCase()
    },

    // بازیابی اسلات مربوط به یک لاین در یک روز مشخص و یک ساعت مشخص
    getSlot(lineName, dayName, timeSlot) {
      const normLine = this.normalizeString(lineName)
      const normDay = this.normalizeString(dayName)
      const start = timeSlot.start.trim()

      return this.schedules.find(s => {
        const sLine = this.normalizeString(s.line_name)
        const sDay = this.normalizeString(s.weekday)
        const sStart = (s.start_time || '').trim()

        return sLine === normLine && sDay === normDay && sStart === start
      })
    },

    getLineSlots(lineName) {
      const norm = this.normalizeString(lineName)
      return this.schedules.filter(s => this.normalizeString(s.line_name) === norm)
    },

    getLineFreeCount(lineName) {
      return this.getLineSlots(lineName).filter(s => s.status === 'free').length
    },

    getLineBusyCount(lineName) {
      return this.getLineSlots(lineName).filter(s => s.status !== 'free').length
    },

    getLineIcon(lineName) {
      if (!lineName) return 'fas fa-sparkles'
      const name = lineName.toLowerCase()
      if (name.includes('ناخن')) return 'fas fa-hand-sparkles'
      if (name.includes('مو') || name.includes('کوتاهی') || name.includes('کراتین')) return 'fas fa-cut'
      if (name.includes('پوست') || name.includes('فیشیال')) return 'fas fa-smile-beam'
      if (name.includes('میکاپ') || name.includes('گریم') || name.includes('آرایش')) return 'fas fa-paint-brush'
      if (name.includes('ابرو') || name.includes('مژه') || name.includes('لیفت')) return 'fas fa-eye'
      return 'fas fa-spa'
    },

    async doDelete(schedule) {
      if (!schedule) return
      const ok = await showConfirm(`آیا از حذف اسلات زمان کاری (${schedule.line_name} - ${schedule.weekday} ساعت ${schedule.start_time}) مطمئن هستید؟`, {
        title: 'حذف اسلات زمانی',
        confirmText: 'بله، حذف شود'
      })
      if (!ok) return

      try {
        await api.deleteSchedule(schedule.id)
        toast.success('اسلات کاری با موفقیت حذف شد')
        await this.load()
      } catch (e) {
        toast.error('خطا در حذف: ' + (e.message || ''))
      }
    }
  }
}
</script>

<style scoped>
.schedules-view {
  margin-bottom: 3.5rem;
}

.view-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.view-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: -0.4rem;
}

.header-action-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.view-mode-toggle {
  display: inline-flex;
  background: rgba(22, 16, 28, 0.85);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 3px;
  gap: 3px;
}

.mode-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  font-family: inherit;
}

.mode-btn:hover {
  color: var(--text-primary);
}

.mode-btn.active {
  background: linear-gradient(135deg, var(--rose-gold), var(--rose-gold-dark));
  color: #fff;
  box-shadow: 0 2px 10px rgba(217, 107, 138, 0.3);
}

/* KPI Summary Bar */
.kpi-summary-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.kpi-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 1.25rem;
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.kpi-pill strong {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-right: 0.3rem;
}

.kpi-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot-green {
  background: var(--status-free);
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
}

.dot-red {
  background: var(--status-busy);
  box-shadow: 0 0 8px rgba(244, 63, 94, 0.6);
}

.kpi-free {
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.08);
}
.kpi-free strong {
  color: var(--status-free);
}

.kpi-busy {
  border-color: rgba(244, 63, 94, 0.3);
  background: rgba(244, 63, 94, 0.08);
}
.kpi-busy strong {
  color: #fb7185;
}

/* تب‌های فیلتر لاین‌ها */
.filter-card {
  margin-top: 0 !important;
  margin-bottom: 2rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
}

.filter-header-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 0.85rem;
}

.line-tabs-row {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.line-tab-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 0.55rem 1.15rem;
  border-radius: var(--radius-pill);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all 0.22s ease;
  font-family: inherit;
}

.line-tab-btn .tab-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.15rem 0.45rem;
  border-radius: 12px;
  font-size: 0.72rem;
  color: #fff;
}

.line-tab-btn:hover {
  background: rgba(217, 107, 138, 0.1);
  color: var(--rose-gold-light);
  border-color: rgba(217, 107, 138, 0.3);
}

.line-tab-btn.active {
  background: rgba(217, 107, 138, 0.2);
  color: #fff;
  border-color: var(--rose-gold);
  box-shadow: 0 4px 14px rgba(217, 107, 138, 0.28);
}

.line-tab-btn.active .tab-badge {
  background: var(--rose-gold);
}

/* ========================================================
   کارت و جدول اختصاصی هر لاین (Line Schedule Matrix Table)
   ======================================================== */
.line-tables-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.line-schedule-card {
  margin: 0 !important;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-card);
}

.line-card-header {
  padding: 1.1rem 1.75rem;
  background: var(--bg-card-header);
  border-bottom: 1px solid var(--border-subtle);
}

.line-header-left {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.line-header-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--rose-gold), var(--rose-gold-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(217, 107, 138, 0.3);
}

.line-header-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
}

.line-header-sub {
  color: var(--text-muted);
  font-size: 0.84rem;
}

.line-header-stats {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
}

/* جدول ماتریسی روز و ساعت */
.schedule-matrix-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 960px;
}

.schedule-matrix-table th,
.schedule-matrix-table td {
  border-bottom: 1px solid var(--border-subtle);
  border-left: 1px solid var(--border-subtle);
  padding: 0.9rem 0.75rem;
  text-align: center;
  vertical-align: middle;
}

.schedule-matrix-table th:last-child,
.schedule-matrix-table td:last-child {
  border-left: none;
}

.time-col-header {
  width: 160px;
  background: rgba(28, 20, 36, 0.95) !important;
  color: var(--champagne-light) !important;
  font-size: 0.92rem;
  font-weight: 700;
}

.day-col-header {
  background: rgba(32, 23, 40, 0.8) !important;
  color: var(--rose-gold-light) !important;
  font-size: 0.95rem;
  font-weight: 700;
}

.time-col-cell {
  background: rgba(20, 15, 26, 0.8);
  font-size: 0.9rem;
  color: var(--text-primary);
  white-space: nowrap;
}

.slot-matrix-cell {
  background: rgba(18, 13, 23, 0.4);
  padding: 0.65rem !important;
  min-width: 140px;
}

/* کارت اسلات درون سلول جدول */
.matrix-slot-badge {
  border-radius: 10px;
  padding: 0.6rem 0.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  text-align: center;
  transition: all 0.2s ease;
}

.matrix-slot-badge:hover {
  transform: translateY(-1px);
}

/* اسلات آزاد: سبز زمردی لوکس */
.cell-free {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.4);
}
.cell-free:hover {
  background: rgba(16, 185, 129, 0.18);
  border-color: rgba(16, 185, 129, 0.6);
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2);
}

/* اسلات رزرو شده: قرمز / زرشکی لوکس */
.cell-busy {
  background: rgba(244, 63, 94, 0.12);
  border: 1px solid rgba(244, 63, 94, 0.4);
}
.cell-busy:hover {
  background: rgba(244, 63, 94, 0.18);
  border-color: rgba(244, 63, 94, 0.6);
  box-shadow: 0 4px 14px rgba(244, 63, 94, 0.2);
}

.matrix-slot-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  font-weight: 700;
}

.matrix-status-title {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.cell-free .matrix-status-title {
  color: var(--status-free);
}

.cell-busy .matrix-status-title {
  color: #fb7185;
}

.matrix-slot-id {
  font-size: 0.7rem;
  color: var(--text-faint);
}

.matrix-reserve-btn {
  background: linear-gradient(135deg, #059669, #10b981);
  color: #fff;
  border-radius: 6px;
  font-size: 0.76rem;
  font-weight: 700;
  padding: 0.35rem 0.5rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.matrix-reserve-btn:hover {
  background: linear-gradient(135deg, #10b981, #34d399);
  transform: translateY(-1px);
}

.matrix-locked-label {
  font-size: 0.74rem;
  color: #fb7185;
  padding: 0.35rem 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-weight: 600;
}

.matrix-admin-tools {
  display: flex;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.15rem;
  padding-top: 0.35rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.admin-tool-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

.admin-tool-btn:hover {
  background: var(--rose-gold);
  color: #fff;
}

.admin-tool-btn.btn-del:hover {
  background: #e11d48;
}

.empty-matrix-slot {
  color: var(--text-faint);
  font-size: 1.1rem;
  opacity: 0.4;
  user-select: none;
}

@media (max-width: 768px) {
  .d-none-mobile {
    display: none;
  }
  .view-header-row {
    flex-direction: column;
    align-items: stretch;
  }
  .line-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.85rem;
  }
  .line-header-stats {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
