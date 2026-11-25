<template>
  <footer class="editorial-footer-wrapper">
    <div class="editorial-footer-block">
      <div class="footer-grid">
        <!-- ستون ۱: معرفی برند و شبکه‌های اجتماعی -->
        <div class="footer-brand-col">
          <div class="footer-brand-header">
            <span class="brand-emblem-sq">
              <i class="fas fa-spa"></i>
            </span>
            <div>
              <h3 class="footer-brand-title">رز بیوتی</h3>
              <small class="footer-brand-en editorial-serif">ROSE BEAUTY SALON</small>
            </div>
          </div>

          <div class="footer-cream-box">
            <p class="brand-desc">
              مرکز تخصصی و لوکس خدمات زیبایی، پوست، مو، ناخن و میکاپ عروس با استفاده از برترین برندهای بین‌المللی و کادری مجرب در محیطی استریل و آرامش‌بخش.
            </p>
            <div class="footer-cta-row">
              <router-link to="/reservations/new" class="footer-pill-cta">
                رزرو نوبت!
              </router-link>
              <div class="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener" class="social-sq-btn" title="اینستاگرام">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://t.me" target="_blank" rel="noopener" class="social-sq-btn" title="تلگرام">
                  <i class="fab fa-telegram-plane"></i>
                </a>
                <a href="tel:09123456789" class="social-sq-btn" title="تماس مستقیم">
                  <i class="fas fa-phone-alt"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-stamp-pill">
            <i class="fas fa-certificate"></i>
            <span>ROSE BEAUTY • CERTIFIED LUXURY SALON</span>
          </div>
        </div>

        <!-- ستون ۲: دسترسی سریع -->
        <div class="footer-cream-card">
          <h4 class="card-col-title">دسترسی سریع</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/"><i class="fas fa-chevron-left"></i> صفحه اصلی (پیشخوان)</router-link>
            </li>
            <li>
              <router-link to="/dashboard"><i class="fas fa-chevron-left"></i> داشبورد مدیریت</router-link>
            </li>
            <li>
              <router-link to="/lines"><i class="fas fa-chevron-left"></i> سرویس‌ها و تعرفه‌ها</router-link>
            </li>
            <li>
              <router-link to="/about"><i class="fas fa-chevron-left"></i> درباره ما</router-link>
            </li>
            <li>
              <router-link to="/contact"><i class="fas fa-chevron-left"></i> تماس با ما</router-link>
            </li>
            <li>
              <router-link to="/login"><i class="fas fa-chevron-left"></i> ورود به حساب کاربری</router-link>
            </li>
          </ul>
        </div>

        <!-- ستون ۳: ساعات کاری سالن -->
        <div class="footer-cream-card">
          <h4 class="card-col-title">ساعات کاری و پذیرش</h4>
          <ul class="schedule-list">
            <li>
              <span class="day"><i class="far fa-clock"></i> شنبه تا چهارشنبه:</span>
              <span class="badge badge-success">۰۹:۰۰ الی ۱۹:۰۰</span>
            </li>
            <li>
              <span class="day"><i class="far fa-clock"></i> پنجشنبه‌ها:</span>
              <span class="badge badge-warning">۰۹:۰۰ الی ۱۶:۰۰</span>
            </li>
            <li>
              <span class="day"><i class="far fa-calendar-alt"></i> جمعه‌ها و تعطیلات:</span>
              <span class="badge badge-danger">فقط رزرو عروس</span>
            </li>
          </ul>
          <div class="call-banner">
            <i class="fas fa-headset"></i>
            <div>
              <span class="banner-label">مشاوره رایگان زیبایی:</span>
              <a href="tel:09123456789" class="banner-phone">۰۹۱۲۳۴۵۶۷۸۹</a>
            </div>
          </div>
        </div>

        <!-- ستون ۴: ارتباط با ما -->
        <div class="footer-cream-card">
          <h4 class="card-col-title">نشانی و تماس</h4>
          <ul class="contact-info">
            <li>
              <i class="fas fa-map-marker-alt contact-icon"></i>
              <span>مشهد، بلوار سجاد، بین بهار و گلستان، ساختمان رز، طبقه ۳، واحد ۶</span>
            </li>
            <li>
              <i class="fas fa-phone contact-icon"></i>
              <span>تلفن سالن: <a href="tel:05137654321">۰۵۱-۳۷۶۵۴۳۲۱</a></span>
            </li>
            <li>
              <i class="fas fa-envelope contact-icon"></i>
              <span>ایمیل: <a href="mailto:info@rosebeauty.ir">info@rosebeauty.ir</a></span>
            </li>
          </ul>
          <div class="features-pill">
            <span><i class="fas fa-shield-alt text-success"></i> استریل ۱۰۰٪</span>
            <span><i class="fas fa-parking"></i> پارکینگ اختصاصی</span>
          </div>
        </div>
      </div>

      <!-- کپی‌رایت داخلی -->
      <div class="footer-bottom-meta">
        <span>تمامی حقوق برای <strong>سالن زیبایی رز بیوتی</strong> محفوظ است © ۲۰۲۶</span>
      </div>

      <!-- زبانه برش‌خورده پایین وسط فوتر (الهام از باکس Inisial_han پوستر مرجع) -->
      <div class="footer-center-notch-wrap">
        <div class="notch-fillet-left"></div>
        <div class="footer-center-notch-pill">
          <span class="notch-circle-seal">
            <i class="fas fa-spa"></i>
          </span>
          <div class="notch-text-col">
            <strong class="editorial-serif">Rose_Beauty</strong>
            <small>سالن تخصصی و پیشخوان هوشمند زیبایی</small>
          </div>
        </div>
        <div class="notch-fillet-right"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.editorial-footer-wrapper {
  padding: 2rem clamp(1rem, 2.5vw, 2.5rem) 4.2rem;
  position: relative;
  z-index: 10;
}

.editorial-footer-block {
  position: relative;
  background: linear-gradient(145deg, #5d1c3a 0%, #4b142e 55%, #3d0e24 100%);
  border-radius: 28px;
  padding: 2.5rem 2.2rem 2.6rem;
  color: #fff8fb;
  box-shadow: 0 20px 46px rgba(61, 14, 36, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr 1.15fr 1.15fr;
  gap: 1.5rem;
  align-items: stretch;
}

.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-brand-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.brand-emblem-sq {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #faf3f6;
  color: #561935;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
}

.footer-brand-title {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0;
}

.footer-brand-en {
  color: #f8b4cf;
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.footer-cream-box,
.footer-cream-card {
  background: #faf3f6;
  color: #330d1e;
  border-radius: 20px;
  padding: 1.35rem;
  border: 1.5px solid #e6cfd9;
  box-shadow: 0 10px 26px rgba(32, 6, 18, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand-desc {
  font-size: 0.86rem;
  line-height: 1.75;
  color: #4f1d34;
  margin-bottom: 1rem;
}

.footer-cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.footer-pill-cta {
  background: #561935;
  color: #ffffff;
  padding: 0.5rem 1.35rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.22s ease;
  box-shadow: 0 4px 14px rgba(86, 25, 53, 0.3);
}
.footer-pill-cta:hover {
  background: #d84782;
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 0.45rem;
}

.social-sq-btn {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: #f0e0e7;
  color: #561935;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.92rem;
  transition: all 0.22s ease;
}
.social-sq-btn:hover {
  background: #561935;
  color: #ffffff;
  transform: translateY(-2px);
}

.footer-stamp-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #ffdbe9;
  letter-spacing: 0.8px;
  width: fit-content;
}

.card-col-title {
  font-size: 1.02rem;
  font-weight: 800;
  color: #561935;
  margin-bottom: 0.9rem;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid #ead4de;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.footer-links a {
  color: #4f1d34;
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all 0.2s;
}
.footer-links a i {
  font-size: 0.7rem;
  color: #d84782;
}
.footer-links a:hover {
  color: #d84782;
  transform: translateX(-3px);
}

.schedule-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.schedule-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  color: #4f1d34;
  gap: 0.5rem;
}
.schedule-list .day i {
  color: #d84782;
  margin-left: 3px;
}

.call-banner {
  margin-top: 0.9rem;
  background: #f0e0e7;
  border-radius: 12px;
  padding: 0.7rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.call-banner i {
  font-size: 1.2rem;
  color: #561935;
}
.banner-label {
  display: block;
  font-size: 0.72rem;
  color: #754c5e;
}
.banner-phone {
  font-size: 0.95rem;
  font-weight: 800;
  color: #561935;
  text-decoration: none;
  direction: ltr;
  display: inline-block;
}

.contact-info {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex: 1;
}
.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.83rem;
  color: #4f1d34;
  line-height: 1.55;
}
.contact-icon {
  color: #d84782;
  margin-top: 3px;
  flex-shrink: 0;
}
.contact-info a {
  color: #561935;
  font-weight: 700;
  text-decoration: none;
}

.features-pill {
  margin-top: 0.85rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.features-pill span {
  font-size: 0.74rem;
  font-weight: 700;
  background: #f0e0e7;
  color: #330d1e;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.footer-bottom-meta {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  text-align: center;
  font-size: 0.8rem;
  color: #f4d8e4;
}

/* زبانه برش‌خورده پایین وسط فوتر (تطبیق با Inisial_han پوستر مرجع) */
.footer-center-notch-wrap {
  position: absolute;
  bottom: -48px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-start;
  z-index: 6;
}

.footer-center-notch-pill {
  height: 48px;
  background: #3d0e24;
  padding: 0 22px;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  box-shadow: 0 12px 26px rgba(61, 14, 36, 0.28);
  white-space: nowrap;
}

.notch-circle-seal {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #d84782;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
}

.notch-text-col {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}
.notch-text-col strong {
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}
.notch-text-col small {
  font-size: 0.65rem;
  color: #f8b4cf;
}

.notch-fillet-left {
  width: 22px;
  height: 22px;
  background: radial-gradient(circle at top left, transparent 21.5px, #3d0e24 22px);
}
.notch-fillet-right {
  width: 22px;
  height: 22px;
  background: radial-gradient(circle at top right, transparent 21.5px, #3d0e24 22px);
}

@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .editorial-footer-block {
    padding: 1.5rem 1.1rem 2rem;
    border-radius: 22px;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.1rem;
  }
  .footer-center-notch-pill {
    padding: 0 16px;
  }
}
</style>
