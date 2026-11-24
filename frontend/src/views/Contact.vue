<template>
  <div class="contact-page">
    <!-- هدر یکپارچه و مشترک -->
    <PublicHeader />

    <!-- بخش هیرو صفحه تماس -->
    <section class="contact-hero">
      <div class="hero-inner">
        <div class="hero-badge">
          <i class="fas fa-map-marked-alt"></i> راه‌های ارتباطی مستقیم و دسترسی به سالن
        </div>
        <h1 class="hero-title">
          تماس با سالن زیبایی <span class="highlight-text">رز بیوتی</span>
        </h1>
        <p class="hero-lead">
          همواره مشتاق دیدار و پاسخگویی به شما مراجعین عزیز هستیم. جهت مشاوره رایگان، استعلام پکیج‌های عروس یا هماهنگی نوبت‌ها با ما در ارتباط باشید.
        </p>
      </div>
    </section>

    <!-- کانتینر اصلی محتوا -->
    <main class="contact-main-container">
      <div class="contact-two-col">
        <!-- ستون ۱: کارت‌های اطلاعات تماس و لوکیشن -->
        <div class="contact-info-panel">
          <div class="info-master-card">
            <h2 class="card-main-title"><i class="fas fa-address-book"></i> اطلاعات دسترسی و تماس</h2>
            <p class="card-main-desc">کلیه راه‌های ارتباطی با مدیریت و بخش پذیرش سالن رز بیوتی:</p>

            <div class="contact-items-list">
              <div class="c-item">
                <div class="c-icon"><i class="fas fa-map-pin"></i></div>
                <div class="c-details">
                  <strong>آدرس سالن زیبایی رز بیوتی:</strong>
                  <p>مشهد، بلوار سجاد، بین بهار و گلستان، ساختمان رز، طبقه ۳، واحد ۶</p>
                  <small class="route-hint">دسترسی سرراست از بزرگراه کلانتری و خیابان بهارستان</small>
                </div>
              </div>

              <div class="c-item">
                <div class="c-icon"><i class="fas fa-phone-volume"></i></div>
                <div class="c-details">
                  <strong>تلفن‌های تماس مستقیم:</strong>
                  <p class="phone-links">
                    <a href="tel:05137654321">۰۵۱-۳۷۶۵۴۳۲۱</a> <span>(خط مستقیم سالن)</span><br>
                    <a href="tel:09123456789">۰۹۱۲۳۴۵۶۷۸۹</a> <span>(مشاوره و رزرو فوری)</span>
                  </p>
                </div>
              </div>

              <div class="c-item">
                <div class="c-icon"><i class="fab fa-instagram"></i></div>
                <div class="c-details">
                  <strong>اینستاگرام (ژورنال و استوری‌های روزانه):</strong>
                  <p>
                    <a href="https://instagram.com" target="_blank" rel="noopener" class="insta-link">
                      instagram.com/rose_beauty_salon
                    </a>
                  </p>
                  <small>مشاهده نمونه‌کارهای جدید و رضایت مراجعین</small>
                </div>
              </div>

              <div class="c-item">
                <div class="c-icon"><i class="fas fa-envelope"></i></div>
                <div class="c-details">
                  <strong>پست الکترونیک رسمی:</strong>
                  <p><a href="mailto:contact@rosebeauty.ir">contact@rosebeauty.ir</a></p>
                </div>
              </div>
            </div>

            <!-- وضعیت پارکینگ -->
            <div class="parking-callout">
              <i class="fas fa-parking"></i>
              <div>
                <strong>فضای پارک مناسب خودرو:</strong>
                <p>امکان استفاده از پارکینگ اختصاصی ساختمان رز و حاشیه بلوار سجاد با امنیت کامل.</p>
              </div>
            </div>

            <!-- راهنمای حمل‌ونقل عمومی -->
            <div class="transit-guide-box">
              <div class="transit-header">
                <i class="fas fa-subway"></i>
                <span>راهنمای دسترسی با حمل‌ونقل عمومی در مشهد:</span>
              </div>
              <p>نزدیک‌ترین ایستگاه قطار شهری: ایستگاه‌های خیام و آزادی (خط ۱ متروی مشهد) با دسترسی مستقیم خطوط تاکسی به بلوار سجاد.</p>
            </div>
          </div>
        </div>

        <!-- ستون ۲: فرم ارسال پیام و درخواست مشاوره -->
        <div class="contact-form-panel">
          <div class="form-master-card">
            <h2 class="card-main-title"><i class="fas fa-paper-plane"></i> ارسال پیام یا درخواست مشاوره</h2>
            <p class="card-main-desc">اطلاعات خود را در فرم زیر وارد فرمایید؛ کارشناسان سالن در سریع‌ترین زمان با شما تماس خواهند گرفت.</p>

            <form @submit.prevent="submitContact">
              <div class="form-group">
                <label>نام و نام خانوادگی <span class="req">*</span></label>
                <input v-model="form.name" type="text" required placeholder="مثال: سارا محمدی" />
              </div>

              <div class="form-group">
                <label>شماره تماس همراه <span class="req">*</span></label>
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
                  <option value="سایر">سایر موارد و استعلام قیمت</option>
                </select>
              </div>

              <div class="form-group">
                <label>متن پیام یا سوال شما <span class="req">*</span></label>
                <textarea v-model="form.message" rows="4" required placeholder="پیام خود را بنویسید..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="submitted">
                <i :class="submitted ? 'fas fa-check' : 'fas fa-paper-plane'"></i>
                {{ submitted ? 'پیام شما دریافت شد' : 'ارسال درخواست مشاوره' }}
              </button>
            </form>

            <div class="form-privacy-note">
              <i class="fas fa-lock"></i>
              <span>اطلاعات تماس شما نزد سالن رز بیوتی کاملاً محرمانه نگهداری می‌شود.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
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
  min-height: 100vh;
  color: #f0e6ee;
  background: #0a0818;
  font-family: 'Vazirmatn', sans-serif;
  padding-top: 75px;
}

/* هیرو تماس */
.contact-hero {
  padding: 5rem clamp(1rem, 3vw, 2.5rem) 4rem;
  text-align: center;
  background: radial-gradient(ellipse 75% 65% at 50% 25%, rgba(255, 45, 149, 0.18), transparent 75%);
  border-bottom: 1px solid rgba(255, 45, 149, 0.15);
}

.hero-inner {
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 45, 149, 0.12);
  border: 1px solid rgba(255, 45, 149, 0.35);
  color: #ff85c0;
  padding: 0.45rem 1.2rem;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 1.4rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1.2rem;
  line-height: 1.35;
}

.highlight-text {
  color: #ff2d95;
  text-shadow: 0 0 25px rgba(255, 45, 149, 0.5);
}

.hero-lead {
  font-size: 1.08rem;
  line-height: 1.85;
  color: #e0d0dd;
}

/* محتوای اصلی تماس */
.contact-main-container {
  width: 100%;
  padding: 3.5rem clamp(1rem, 3vw, 2.5rem);
}

.contact-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: flex-start;
}

.info-master-card,
.form-master-card {
  background: rgba(20, 14, 30, 0.85);
  border: 1px solid rgba(255, 45, 149, 0.2);
  border-radius: 24px;
  padding: 2.8rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
}

.card-main-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.card-main-title i {
  color: #ff6b9d;
}

.card-main-desc {
  font-size: 0.92rem;
  color: #baa9b7;
  margin-bottom: 2rem;
}

.contact-items-list {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 2rem;
}

.c-item {
  display: flex;
  gap: 1.1rem;
  align-items: flex-start;
}

.c-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(255, 45, 149, 0.15);
  border: 1px solid rgba(255, 45, 149, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b9d;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.c-details strong {
  display: block;
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 0.3rem;
}

.c-details p {
  color: #e0d0dd;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
}

.phone-links a {
  color: #ff85c0;
  text-decoration: none;
  font-weight: 700;
  direction: ltr;
  display: inline-block;
  font-size: 1.05rem;
}

.phone-links span {
  font-size: 0.8rem;
  color: #baa9b7;
}

.insta-link {
  color: #ff85c0;
  text-decoration: none;
  font-weight: 700;
}

.route-hint {
  color: #ff85c0;
  font-size: 0.78rem;
  display: block;
  margin-top: 0.2rem;
}

.parking-callout {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 14px;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.4rem;
}

.parking-callout i {
  font-size: 1.6rem;
  color: #10b981;
}

.parking-callout strong {
  display: block;
  font-size: 0.9rem;
  color: #fff;
}

.parking-callout p {
  font-size: 0.82rem;
  color: #baa9b7;
  margin: 0;
}

.transit-guide-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.2rem;
  font-size: 0.88rem;
}

.transit-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff6b9d;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.transit-guide-box p {
  color: #baa9b7;
  margin: 0;
  line-height: 1.6;
}

/* فرم */
.form-group {
  margin-bottom: 1.2rem;
}

.req {
  color: #ff3b3b;
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.form-privacy-note {
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #9f8c9a;
}

@media (max-width: 900px) {
  .contact-two-col {
    grid-template-columns: 1fr;
  }
}
</style>
