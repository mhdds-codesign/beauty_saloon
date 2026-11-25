<template>
  <div class="contact-page">
    <PublicHeader />

    <div class="editorial-contact-flow">
      <!-- بلوک ۱: هیرو تماس با ما با کارت کرم و تصویر سالن -->
      <section class="contact-hero-block rose-master-block">
        <div class="contact-hero-grid">
          <div class="hero-left-col">
            <span class="hero-kicker">C O N T A C T &nbsp; U S</span>
            <h1 class="hero-serif-title editorial-serif">GET IN TOUCH</h1>
            <p class="hero-fa-sub">( پل‌های ارتباطی مستقیم، نشانی و مشاوره تخصصی سالن رز بیوتی )</p>

            <div class="hero-quick-pills">
              <a href="tel:05137654321" class="quick-pill-badge">
                <i class="fas fa-phone-alt"></i> ۰۵۱-۳۷۶۵۴۳۲۱
              </a>
              <a href="tel:09123456789" class="quick-pill-badge">
                <i class="fas fa-mobile-alt"></i> ۰۹۱۲۳۴۵۶۷۸۹
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" class="quick-pill-badge">
                <i class="fab fa-instagram"></i> @rose_beauty_salon
              </a>
            </div>
          </div>

          <div class="hero-right-photo cream-inset-card">
            <div class="photo-inner-box">
              <img src="/images/makeup_tools.jpg" alt="پذیرش و مشاوره زیبایی رز بیوتی" />
            </div>
            <div class="photo-footer-row">
              <span>مشهد، بلوار سجاد، ساختمان رز، طبقه ۳</span>
              <a href="tel:09123456789" class="corner-arrow-badge" title="تماس فوری">
                <i class="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- بلوک ۲: اطلاعات دسترسی و فرم پیام سریع داخل کادر مستطیلی رز -->
      <section class="contact-body-section">
        <div class="rose-master-block contact-master-box">
          <div class="contact-two-col">
            <!-- ستون اطلاعات تماس و لوکیشن -->
            <div class="contact-info-card cream-inset-card">
              <h2 class="card-heading"><i class="fas fa-address-book"></i> اطلاعات دسترسی و نشانی</h2>
              <p class="card-sub">همواره مشتاق دیدار و پاسخگویی به سوالات شما مراجعین عزیز هستیم:</p>

              <div class="info-list">
                <div class="info-row">
                  <span class="row-sq-icon"><i class="fas fa-map-pin"></i></span>
                  <div>
                    <strong>آدرس سالن زیبایی رز بیوتی:</strong>
                    <p>مشهد، بلوار سجاد، بین بهار و گلستان، ساختمان رز، طبقه ۳، واحد ۶</p>
                    <small class="hint-text">دسترسی مستقیم از بزرگراه کلانتری و خیابان بهارستان</small>
                  </div>
                </div>

                <div class="info-row">
                  <span class="row-sq-icon"><i class="fas fa-phone-volume"></i></span>
                  <div>
                    <strong>تلفن‌های تماس مستقیم:</strong>
                    <p class="phones">
                      <a href="tel:05137654321">۰۵۱-۳۷۶۵۴۳۲۱</a> <small>(خط ثابت)</small><br>
                      <a href="tel:09123456789">۰۹۱۲۳۴۵۶۷۸۹</a> <small>(همراه و رزرو فوری)</small>
                    </p>
                  </div>
                </div>

                <div class="info-row">
                  <span class="row-sq-icon"><i class="fab fa-instagram"></i></span>
                  <div>
                    <strong>اینستاگرام رسمی (ژورنال کارها):</strong>
                    <p><a href="https://instagram.com" target="_blank" rel="noopener">instagram.com/rose_beauty_salon</a></p>
                  </div>
                </div>

                <div class="info-row">
                  <span class="row-sq-icon"><i class="fas fa-envelope"></i></span>
                  <div>
                    <strong>پست الکترونیک:</strong>
                    <p><a href="mailto:contact@rosebeauty.ir">contact@rosebeauty.ir</a></p>
                  </div>
                </div>
              </div>

              <div class="parking-strip">
                <i class="fas fa-parking"></i>
                <span>دارای پارکینگ اختصاصی ساختمان رز و فضای پارک امن در بلوار سجاد</span>
              </div>

              <div class="transit-strip">
                <i class="fas fa-subway"></i>
                <span>نزدیک‌ترین ایستگاه مترو: ایستگاه‌های خیام و آزادی (خط ۱) با تاکسی مستقیم به بلوار سجاد</span>
              </div>
            </div>

            <!-- ستون فرم پیام و مشاوره -->
            <div class="contact-form-card cream-inset-card">
              <div class="form-corner-badge corner-arrow-badge">
                <i class="fas fa-paper-plane"></i>
              </div>
              <h2 class="card-heading"><i class="fas fa-comments"></i> ارسال پیام یا درخواست مشاوره</h2>
              <p class="card-sub">فرم زیر را تکمیل فرمایید؛ کارشناسان ما در کوتاه‌ترین زمان با شما تماس می‌گیرند.</p>

              <form @submit.prevent="submitContact">
                <div class="form-group">
                  <label>نام و نام خانوادگی <span class="text-danger">*</span></label>
                  <input v-model="form.name" type="text" required placeholder="مثال: سارا محمدی" />
                </div>

                <div class="form-group">
                  <label>شماره تماس همراه <span class="text-danger">*</span></label>
                  <input v-model="form.phone" type="tel" required placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                </div>

                <div class="form-group">
                  <label>لاین و سرویس مورد نظر</label>
                  <select v-model="form.service">
                    <option value="">انتخاب لاین (اختیاری)</option>
                    <option value="ناخن">کاشت، لمینت و طراحی ناخن</option>
                    <option value="مو">رنگ، لایت و کراتین مو</option>
                    <option value="پوست">فیشیال و جوانسازی پوست</option>
                    <option value="میکاپ">میکاپ عروس و گریم حرفه‌ای</option>
                    <option value="ابرو">لیفت و اصلاح ابرو و مژه</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>متن پیام یا سوال شما <span class="text-danger">*</span></label>
                  <textarea v-model="form.message" rows="4" required placeholder="پیام خود را بنویسید..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary submit-full-btn" :disabled="submitted">
                  <i :class="submitted ? 'fas fa-check' : 'fas fa-paper-plane'"></i>
                  {{ submitted ? 'پیام شما با موفقیت ثبت شد' : 'ارسال درخواست مشاوره' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PublicHeader from '../components/PublicHeader.vue'
import toast from '../services/toast.js'

export default {
  name: 'Contact',
  components: {
    PublicHeader
  },
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        phone: '',
        service: '',
        message: ''
      }
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'instant' })
  },
  methods: {
    submitContact() {
      if (!this.form.name || !this.form.phone) {
        toast.warning('لطفاً نام و شماره تماس خود را وارد نمایید.')
        return
      }

      this.submitted = true
      toast.success(
        `با تشکر از شما ${this.form.name} عزیز! پیام شما دریافت شد و مشاورین سالن رز به زودی با شماره ${this.form.phone} تماس حاصل خواهند کرد.`,
        6000
      )
      this.form = { name: '', phone: '', service: '', message: '' }
      setTimeout(() => {
        this.submitted = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
.contact-page {
  direction: rtl;
  padding-top: 86px;
  padding-bottom: 1rem;
}

.editorial-contact-flow {
  width: 100%;
  padding: 0 clamp(1rem, 2.5vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
}

.contact-hero-block {
  padding: 2.5rem clamp(1.2rem, 3vw, 2.6rem);
}

.contact-hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-kicker {
  display: block;
  font-size: 0.82rem;
  letter-spacing: 4px;
  color: #f8b4cf;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.hero-serif-title {
  font-size: clamp(2.1rem, 4.5vw, 3.4rem);
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  line-height: 1.1;
}

.hero-fa-sub {
  color: #fce2ec;
  font-size: 0.96rem;
  margin: 0.6rem 0 1.5rem;
}

.hero-quick-pills {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.quick-pill-badge {
  background: #faf3f6;
  color: #350e20;
  padding: 0.5rem 1.1rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  transition: all 0.2s;
}
.quick-pill-badge i {
  color: #d84782;
}
.quick-pill-badge:hover {
  background: #d84782;
  color: #fff;
  transform: translateY(-2px);
}
.quick-pill-badge:hover i {
  color: #fff;
}

.hero-right-photo {
  padding: 0.95rem;
}
.photo-inner-box {
  background: #561935;
  padding: 7px;
  border-radius: 16px;
  height: 190px;
}
.photo-inner-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 11px;
}
.photo-footer-row {
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.84rem;
  font-weight: 700;
  color: #350e20;
}

/* بدنه تماس */
.contact-master-box {
  padding: 2.4rem clamp(1.2rem, 3vw, 2.6rem);
}

.contact-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.contact-info-card,
.contact-form-card {
  padding: 2rem;
  position: relative;
}

.form-corner-badge {
  position: absolute;
  top: -14px;
  left: 24px;
}

.card-heading {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
}
.card-sub {
  font-size: 0.88rem;
  color: #7a5163;
  margin-bottom: 1.6rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-bottom: 1.5rem;
}

.info-row {
  display: flex;
  gap: 0.95rem;
  align-items: flex-start;
}

.row-sq-icon {
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: #561935;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.info-row strong {
  display: block;
  font-size: 0.92rem;
  color: #350e20;
  margin-bottom: 0.2rem;
}
.info-row p {
  font-size: 0.88rem;
  color: #58283e;
  margin: 0;
  line-height: 1.6;
}
.info-row a {
  color: #561935;
  font-weight: 800;
  text-decoration: none;
}
.info-row a:hover {
  color: #d84782;
}
.hint-text {
  display: block;
  font-size: 0.76rem;
  color: #d84782;
  margin-top: 0.2rem;
}

.parking-strip,
.transit-strip {
  background: #f0e0e7;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.82rem;
  color: #350e20;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.parking-strip i { color: #059669; font-size: 1.15rem; }
.transit-strip i { color: #561935; font-size: 1.15rem; }

.submit-full-btn {
  width: 100%;
  margin: 0.4rem 0 0 !important;
  padding: 0.85rem;
}

@media (max-width: 900px) {
  .contact-hero-grid,
  .contact-two-col {
    grid-template-columns: 1fr;
  }
}
</style>
