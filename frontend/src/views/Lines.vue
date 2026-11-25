<template>
  <div class="lines-view">
    <!-- هدر صفحه و دکمه افزودن -->
    <div class="view-header-row">
      <div>
        <h2><i class="fas fa-spa"></i> کاتالوگ خدمات و سرویس‌های سالن</h2>
        <p class="view-subtitle">لیست کامل لاین‌های تخصصی، تعرفه‌ها و مدت زمان ارائه خدمات سالن رز بیوتی</p>
      </div>

      <div class="header-action-group">
        <!-- دکمه تغییر نما بین باکسی و جدولی -->
        <div class="view-mode-toggle">
          <button 
            class="mode-btn" 
            :class="{ active: viewMode === 'grid' }"
            @click="viewMode = 'grid'"
            title="نمای کارتی و باکسی"
          >
            <i class="fas fa-th-large"></i>
            <span class="d-none-mobile">نمای باکسی</span>
          </button>
          <button 
            class="mode-btn" 
            :class="{ active: viewMode === 'table' }"
            @click="viewMode = 'table'"
            title="نمای جدولی فشرده"
          >
            <i class="fas fa-list"></i>
            <span class="d-none-mobile">نمای جدولی</span>
          </button>
        </div>

        <router-link to="/lines/new" class="btn btn-primary" v-if="isAdmin">
          <i class="fas fa-plus"></i> افزودن سرویس جدید
        </router-link>
      </div>
    </div>

    <!-- فیلتر و جستجو -->
    <div class="card filter-card">
      <div class="card-body">
        <div class="filter-bar">
          <div class="filter-field">
            <label><i class="fas fa-search"></i> جستجوی عنوان یا لاین</label>
            <input 
              v-model="filters.q" 
              placeholder="مثلاً: کاشت ناخن، کراتین مو، فیشیال پوست..." 
              @keyup.enter="load" 
            />
          </div>

          <div class="filter-field category-select-field">
            <label><i class="fas fa-tags"></i> فیلتر بر اساس لاین</label>
            <select v-model="selectedCategory">
              <option value="all">همه لاین‌های سالن</option>
              <option v-for="cat in availableCategories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
          </div>
          
          <div class="filter-actions">
            <button class="btn btn-primary" @click="load">
              <i class="fas fa-filter"></i> اعمال فیلتر
            </button>
            <button class="btn btn-secondary" @click="resetFilters">
              <i class="fas fa-undo-alt"></i> پاک‌سازی
            </button>
          </div>
        </div>

        <!-- تب‌های سریع دسته‌بندی لاین‌ها -->
        <div class="category-tabs" v-if="availableCategories.length">
          <button 
            class="cat-tab" 
            :class="{ active: selectedCategory === 'all' }"
            @click="selectedCategory = 'all'"
          >
            <i class="fas fa-sparkles"></i> همه ({{ total }})
          </button>
          <button 
            v-for="cat in availableCategories" 
            :key="cat" 
            class="cat-tab"
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
          >
            <i :class="getCategoryIcon(cat)"></i> {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <!-- مرتب‌سازی -->
    <div class="sort-controls">
      <span><i class="fas fa-sort-amount-down"></i> مرتب‌سازی بر اساس:</span>
      <button 
        v-for="s in sortOptions" 
        :key="s.key" 
        class="btn btn-sm" 
        :class="{ 'btn-active': filters.sort === s.key }"
        @click="filters.sort = s.key; load()"
      >
        {{ s.label }}
      </button>
    </div>

    <!-- وضعیت بارگذاری -->
    <div v-if="loading" class="loading">
      <i class="fas fa-spinner fa-spin fa-2x" style="color: var(--rose-gold); margin-bottom: 0.75rem;"></i>
      <p>در حال بارگذاری لیست خدمات سالن...</p>
    </div>

    <!-- ۱. نمای کارتی و باکسی (پیش‌فرض) -->
    <div v-else-if="viewMode === 'grid'" class="services-box-grid">
      <div 
        v-for="line in displayLines" 
        :key="line.id" 
        class="service-item-box"
        :class="getCategoryThemeClass(line.name_line)"
      >
        <!-- بالای کارت: آیکون لاین و شماره شناسه -->
        <div class="box-top-row">
          <div class="box-category-pill">
            <i :class="getCategoryIcon(line.name_line)"></i>
            <span>{{ line.name_line || 'خدمات عمومی' }}</span>
          </div>
          <span class="box-id-badge">#{{ line.id }}</span>
        </div>

        <!-- محتوای اصلی کارت -->
        <div class="box-main-content">
          <h3 class="service-box-title">{{ line.name_service }}</h3>
          <p class="service-box-subtitle">{{ line.name_line }} سالن زیبایی رز بیوتی</p>
        </div>

        <!-- ویژگی‌ها و مشخصات خدمت -->
        <div class="box-meta-chips">
          <span class="meta-chip duration-chip">
            <i class="far fa-clock"></i>
            {{ line.duration_minutes ? `${line.duration_minutes} دقیقه` : 'زمان متغیر' }}
          </span>
          <span class="meta-chip quality-chip">
            <i class="fas fa-shield-alt"></i> متریال تضمینی VIP
          </span>
        </div>

        <!-- قیمت و تعرفه -->
        <div class="box-price-row">
          <span class="price-title">تعرفه نوبت:</span>
          <span class="price-value">
            {{ line.price ? line.price.toLocaleString() : '—' }} 
            <small>تومان</small>
          </span>
        </div>

        <!-- اکشن‌های کارت -->
        <div class="box-footer-actions">
          <router-link 
            :to="`/reservations/new?line_id=${line.id}`" 
            class="btn btn-primary box-book-btn"
          >
            <i class="fas fa-calendar-check"></i> رزرو آنلاین این خدمت
          </router-link>

          <!-- دکمه‌های مدیریتی ادمین -->
          <div class="admin-actions-group" v-if="isAdmin">
            <router-link
              :to="`/lines/${line.id}/edit`"
              class="btn btn-secondary btn-sm"
              title="ویرایش مشخصات"
            >
              <i class="fas fa-edit"></i>
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="doDelete(line)"
              title="حذف خدمت"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- وضعیت عدم وجود داده -->
      <div v-if="!displayLines.length" class="empty-services-box">
        <i class="fas fa-search fa-3x" style="color: var(--rose-gold); opacity: 0.6; margin-bottom: 1rem;"></i>
        <h4>هیچ سرویسی با این مشخصات یافت نشد</h4>
        <p>لطفاً عبارت جستجو یا فیلتر لاین را تغییر دهید.</p>
        <button class="btn btn-secondary mt-3" @click="resetFilters">
          <i class="fas fa-undo-alt"></i> بازنشانی فیلترها
        </button>
      </div>
    </div>

    <!-- ۲. نمای جدولی کلاسیک (اختیاری) -->
    <div v-else class="card">
      <div class="card-header">
        <span>فهرست جدولی خدمات سالن</span>
        <span class="badge badge-secondary">{{ displayLines.length }} خدمت</span>
      </div>
      <div class="card-body" style="padding:0;">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>کد</th>
                <th>نام لاین</th>
                <th>نام سرویس</th>
                <th>قیمت</th>
                <th>مدت زمان</th>
                <th>رزرو نوبت</th>
                <th v-if="isAdmin">مدیریت</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="line in displayLines" :key="line.id">
                <td>#{{ line.id }}</td>
                <td>
                  <span class="badge badge-secondary">
                    <i :class="getCategoryIcon(line.name_line)"></i>
                    {{ line.name_line }}
                  </span>
                </td>
                <td><strong>{{ line.name_service }}</strong></td>
                <td><strong style="color: var(--champagne-light);">{{ line.price ? line.price.toLocaleString() + ' تومان' : '—' }}</strong></td>
                <td>{{ line.duration_minutes ? line.duration_minutes + ' دقیقه' : '—' }}</td>
                <td>
                  <router-link 
                    :to="`/reservations/new?line_id=${line.id}`" 
                    class="btn btn-sm btn-primary"
                  >
                    <i class="fas fa-calendar-plus"></i> رزرو
                  </router-link>
                </td>
                <td v-if="isAdmin" style="white-space: nowrap;">
                  <router-link
                    :to="`/lines/${line.id}/edit`"
                    class="btn btn-warning btn-sm"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button
                    class="btn btn-danger btn-sm"
                    @click="doDelete(line)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr v-if="!displayLines.length">
                <td :colspan="isAdmin ? 7 : 6" class="text-center py-4">هنوز سرویسی ثبت نشده است.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- صفحه‌بندی -->
    <div v-if="totalPages > 1" class="pagination">
      <button 
        class="btn btn-sm"
        :class="page <= 1 ? 'btn-disabled' : ''"
        :disabled="page <= 1"
        @click="goPage(page - 1)"
      >
        &larr; قبلی
      </button>
      
      <span 
        v-for="n in totalPages" 
        :key="n" 
        class="btn btn-sm" 
        :class="{ 'btn-active': n === page }"
        @click="goPage(n)"
      >
        {{ n }}
      </span>
      
      <button 
        class="btn btn-sm" 
        :class="page >= totalPages ? 'btn-disabled' : ''"
        :disabled="page >= totalPages"
        @click="goPage(page + 1)"
      >
        بعدی &rarr;
      </button>
    </div>
  </div>
</template>

<script>
import api from '../api.js'
import { auth } from '../auth.js'
import toast from '../services/toast.js'
import showConfirm from '../services/confirm.js'

export default {
  name: 'Lines',
  computed: {
    isAdmin() {
      return auth.role === 'admin'
    },
    availableCategories() {
      const set = new Set()
      this.lines.forEach(l => {
        if (l.name_line && l.name_line.trim()) {
          set.add(l.name_line.trim())
        }
      })
      return Array.from(set)
    },
    displayLines() {
      if (this.selectedCategory === 'all') {
        return this.lines
      }
      return this.lines.filter(l => l.name_line === this.selectedCategory)
    }
  },
  data() {
    return {
      lines: [],
      total: 0,
      page: 1,
      totalPages: 1,
      loading: true,
      viewMode: 'grid', // 'grid' (باکسی) یا 'table' (جدولی)
      selectedCategory: 'all',
      filters: { 
        sort: 'default', 
        q: '' 
      },
      sortOptions: [
        { key: 'default', label: 'پیش‌فرض' },
        { key: 'name_line', label: 'نام لاین' },
        { key: 'name_service', label: 'نام سرویس' },
        { key: 'price', label: 'ارزان‌ترین' }
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
        const params = { 
          sort: this.filters.sort, 
          page: this.page,
          per_page: 50 // دریافت آیتم‌های بیشتر جهت نمایش باکسی کامل
        }
        if (this.filters.q) params.search = this.filters.q

        const res = await api.lines(params)
        
        this.lines = res.lines || []
        this.total = res.total || 0
        this.totalPages = res.total_pages || 1
      } catch (e) {
        console.error(e)
        toast.error('خطا در بارگذاری سرویس‌ها: ' + (e.message || ''))
      } finally {
        this.loading = false
      }
    },

    goPage(n) {
      if (n < 1 || n > this.totalPages) return
      this.page = n
      this.load()
    },

    resetFilters() {
      this.filters = { sort: 'default', q: '' }
      this.selectedCategory = 'all'
      this.page = 1
      this.load()
    },

    getCategoryIcon(lineName) {
      if (!lineName) return 'fas fa-sparkles'
      const name = lineName.toLowerCase()
      if (name.includes('ناخن')) return 'fas fa-hand-sparkles'
      if (name.includes('مو') || name.includes('کوتاهی') || name.includes('کراتین')) return 'fas fa-cut'
      if (name.includes('پوست') || name.includes('فیشیال')) return 'fas fa-smile-beam'
      if (name.includes('میکاپ') || name.includes('گریم') || name.includes('آرایش')) return 'fas fa-paint-brush'
      if (name.includes('ابرو') || name.includes('مژه') || name.includes('لیفت')) return 'fas fa-eye'
      return 'fas fa-spa'
    },

    getCategoryThemeClass(lineName) {
      if (!lineName) return ''
      const name = lineName.toLowerCase()
      if (name.includes('ناخن')) return 'theme-nails'
      if (name.includes('مو')) return 'theme-hair'
      if (name.includes('پوست')) return 'theme-skin'
      if (name.includes('میکاپ')) return 'theme-makeup'
      if (name.includes('ابرو')) return 'theme-brows'
      return ''
    },

    async doDelete(line) {
      const ok = await showConfirm(`آیا از حذف سرویس "${line.name_service}" مطمئن هستید؟`, {
        title: 'حذف سرویس / لاین',
        confirmText: 'بله، حذف شود'
      })
      if (!ok) return
      
      try {
        await api.deleteLine(line.id)
        toast.success(`سرویس "${line.name_service}" با موفقیت حذف شد`)
        this.load()
      } catch (e) {
        toast.error('خطا در حذف: ' + (e.message || ''))
      }
    }
  }
}
</script>

<style scoped>
.lines-view {
  margin-bottom: 3rem;
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
  margin-top: -0.5rem;
}

.header-action-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.view-mode-toggle {
  display: inline-flex;
  background: var(--card-cream);
  border: 1.5px solid #dfc4d0;
  border-radius: 14px;
  padding: 4px;
  gap: 4px;
  box-shadow: 0 4px 12px rgba(62, 15, 37, 0.08);
}

.mode-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  padding: 0.45rem 0.9rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  font-family: inherit;
}

.mode-btn:hover {
  color: var(--rose-deep);
}

.mode-btn.active {
  background: linear-gradient(135deg, #5b1c38, #411027);
  color: #fff;
  box-shadow: 0 4px 12px rgba(86, 25, 53, 0.25);
}

/* فیلتر کارت */
.filter-card {
  margin-top: 0 !important;
  margin-bottom: 1.5rem;
}

.category-tabs {
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid #ead4de;
}

.cat-tab {
  background: #ffffff;
  border: 1.5px solid #dfc4d0;
  color: var(--ink-primary);
  padding: 0.45rem 1rem;
  border-radius: var(--radius-pill);
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  font-family: inherit;
}

.cat-tab:hover {
  background: var(--rose-soft);
  color: var(--rose-deep);
  border-color: var(--rose-deep);
}

.cat-tab.active {
  background: linear-gradient(135deg, #5b1c38, #411027);
  color: #ffffff;
  border-color: #5b1c38;
  box-shadow: 0 4px 14px rgba(86, 25, 53, 0.25);
}

/* ========================================================
   SERVICES BOX GRID (نمای باکسی کاتالوگ خدمات)
   ======================================================== */
.services-box-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.service-item-box {
  background: var(--card-cream);
  border: 1.5px solid #e7cfd9;
  border-radius: 22px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
}

.service-item-box::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5px;
  background: linear-gradient(90deg, #5b1c38, #d84782);
}

.service-item-box:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-elevated);
  border-color: var(--rose-accent);
}

.box-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.1rem;
}

.box-category-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #561935;
  color: #ffffff;
  padding: 0.3rem 0.85rem;
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 700;
}

.box-id-badge {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 700;
}

.box-main-content {
  flex: 1;
  margin-bottom: 1.25rem;
}

.service-box-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--ink-primary);
  margin-bottom: 0.35rem;
  line-height: 1.4;
}

.service-box-subtitle {
  color: var(--ink-muted);
  font-size: 0.85rem;
  line-height: 1.5;
}

.box-meta-chips {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.28rem 0.65rem;
  border-radius: 9px;
  background: #ffffff;
  color: var(--ink-secondary);
  border: 1px solid #dfc4d0;
}

.duration-chip i {
  color: #b45309;
}

.quality-chip i {
  color: #d84782;
}

.box-price-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.85rem 1rem;
  background: #f0e0e7;
  border-radius: 14px;
  border: 1px solid #dfc4d0;
  margin-bottom: 1.25rem;
}

.price-title {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--ink-secondary);
}

.price-value {
  font-size: 1.28rem;
  font-weight: 900;
  color: #561935;
}

.price-value small {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  margin-right: 2px;
}

.box-footer-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.box-book-btn {
  flex: 1;
  padding: 0.65rem 0.9rem;
  font-size: 0.88rem;
  margin: 0 !important;
}

.admin-actions-group {
  display: flex;
  gap: 0.35rem;
}

.admin-actions-group .btn {
  margin: 0 !important;
  padding: 0.65rem 0.8rem;
}

/* جعبه خالی */
.empty-services-box {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 1.5rem;
  background: var(--bg-surface);
  border: 1px dashed var(--border-subtle);
  border-radius: var(--radius-lg);
}

.empty-services-box h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.empty-services-box p {
  color: var(--text-muted);
  font-size: 0.92rem;
}

@media (max-width: 768px) {
  .services-box-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .d-none-mobile {
    display: none;
  }
  .view-header-row {
    flex-direction: column;
    align-items: stretch;
  }
  .header-action-group {
    justify-content: space-between;
  }
}
</style>
