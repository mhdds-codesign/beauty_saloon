<template>
  <footer class="site-footer">
    <!-- حاشیه گرادیانی بالای فوتر -->
    <div class="footer-top-accent"></div>

    <div class="footer-container">
      <div class="footer-grid">
        <!-- ستون ۱: معرفی سالن و برند -->
        <div class="footer-col brand-col">
          <div class="footer-brand">
            <span class="brand-icon">
              <i class="fas fa-spa"></i>
            </span>
            <div class="brand-text">
              <h3>رز بیوتی</h3>
              <small>Rose Beauty Salon</small>
            </div>
          </div>
          <p class="brand-desc">
            مرکز تخصصی و لوکس خدمات زیبایی، پوست، مو، ناخن و میکاپ عروس با استفاده از برترین برندهای بین‌المللی و کادری مجرب در محیطی بهداشتی و آرامش‌بخش.
          </p>
          <div class="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-btn" title="اینستاگرام">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener" class="social-btn" title="تلگرام">
              <i class="fab fa-telegram-plane"></i>
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener" class="social-btn" title="واتساپ">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="tel:09123456789" class="social-btn" title="تماس مستقیم">
              <i class="fas fa-phone-alt"></i>
            </a>
          </div>
        </div>

        <!-- ستون ۲: دسترسی سریع -->
        <div class="footer-col">
          <h4 class="col-title">دسترسی سریع</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/">
                <i class="fas fa-chevron-left"></i> صفحه اصلی (پیشخوان عمومی)
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard">
                <i class="fas fa-chevron-left"></i> داشبورد و پنل مدیریت
              </router-link>
            </li>
            <li>
              <router-link to="/lines">
                <i class="fas fa-chevron-left"></i> خدمات و تعرفه‌های سالن
              </router-link>
            </li>
            <li>
              <router-link to="/reservations/new">
                <i class="fas fa-chevron-left"></i> رزرو آنلاین نوبت
              </router-link>
            </li>
            <li>
              <router-link to="/register">
                <i class="fas fa-chevron-left"></i> ثبت‌نام مراجعین جدید
              </router-link>
            </li>
            <li>
              <router-link to="/login">
                <i class="fas fa-chevron-left"></i> ورود به حساب کاربری
              </router-link>
            </li>
          </ul>
        </div>

        <!-- ستون ۳: ساعات کاری سالن -->
        <div class="footer-col">
          <h4 class="col-title">ساعات کاری و پذیرش</h4>
          <ul class="schedule-list">
            <li>
              <span class="day"><i class="far fa-clock"></i> شنبه تا چهارشنبه:</span>
              <span class="hours badge badge-success">۰۹:۰۰ الی ۱۹:۰۰</span>
            </li>
            <li>
              <span class="day"><i class="far fa-clock"></i> پنجشنبه‌ها:</span>
              <span class="hours badge badge-warning">۰۹:۰۰ الی ۱۶:۰۰</span>
            </li>
            <li>
              <span class="day"><i class="far fa-calendar-alt"></i> جمعه‌ها و ایام تعطیل:</span>
              <span class="hours badge badge-danger">فقط رزروهای عروس</span>
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

        <!-- ستون ۴: اطلاعات تماس و آدرس -->
        <div class="footer-col">
          <h4 class="col-title">ارتباط با ما</h4>
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
              <span>پست الکترونیک: <a href="mailto:info@rosebeauty.ir">info@rosebeauty.ir</a></span>
            </li>
          </ul>
          <div class="features-pill">
            <span><i class="fas fa-shield-alt text-success"></i> محیط کاملاً استریل</span>
            <span><i class="fas fa-wifi text-info"></i> اینترنت رایگان مراجعین</span>
          </div>
        </div>
      </div>

      <!-- نوار پایانی کپی‌رایت -->
      <div class="footer-bottom">
        <p class="copyright">
          تمامی حقوق مادی و معنوی برای <strong>سالن زیبایی رز بیوتی</strong> محفوظ است © ۲۰۲۶
        </p>
        <p class="developer-tag">
          سیستم مدیریت نوبت‌دهی و پیشخوان هوشمند رز بیوتی
        </p>
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
.site-footer {
  margin-top: auto;
  background: linear-gradient(180deg, rgba(16, 12, 34, 0.95) 0%, #06040e 100%);
  border-top: 1px solid rgba(255, 45, 149, 0.2);
  color: #d1c4ce;
  position: relative;
  z-index: 10;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.footer-top-accent {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff2d95, #ff6b9d, #e33d90, transparent);
  box-shadow: 0 0 16px rgba(255, 45, 149, 0.6);
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 3rem 20px 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr 1.2fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.brand-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff2d95, #ff6b9d);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
  box-shadow: 0 4px 15px rgba(255, 45, 149, 0.4);
}

.brand-text h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  letter-spacing: 0.5px;
}

.brand-text small {
  color: #ff6b9d;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.brand-desc {
  font-size: 0.88rem;
  line-height: 1.8;
  color: #bfa9b8;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 45, 149, 0.2);
  color: #f0e6ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
}

.social-btn:hover {
  background: linear-gradient(135deg, #ff2d95, #ff6b9d);
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(255, 45, 149, 0.4);
  border-color: transparent;
}

.col-title {
  font-size: 1.08rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 1.2rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 2px;
  background: #ff2d95;
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-links a {
  color: #d1c4ce;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a i {
  font-size: 0.7rem;
  color: #ff2d95;
  transition: transform 0.25s;
}

.footer-links a:hover {
  color: #ff6b9d;
  transform: translateX(-4px);
}

.footer-links a:hover i {
  color: #fff;
}

.schedule-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schedule-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.86rem;
  gap: 0.5rem;
}

.schedule-list .day {
  color: #d8c9d4;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.schedule-list .day i {
  color: #ff6b9d;
}

.schedule-list .hours {
  font-size: 0.72rem;
  padding: 0.25rem 0.6rem;
}

.call-banner {
  background: rgba(255, 45, 149, 0.08);
  border: 1px dashed rgba(255, 45, 149, 0.35);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: auto;
}

.call-banner i {
  font-size: 1.6rem;
  color: #ff6b9d;
}

.banner-label {
  display: block;
  font-size: 0.78rem;
  color: #e5d6e1;
}

.banner-phone {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: #ff6b9d;
  text-decoration: none;
  direction: ltr;
  text-align: right;
  letter-spacing: 0.5px;
}

.banner-phone:hover {
  color: #fff;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  font-size: 0.88rem;
  line-height: 1.6;
}

.contact-icon {
  color: #ff6b9d;
  font-size: 1rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.contact-info a {
  color: #ff6b9d;
  text-decoration: none;
  font-weight: 600;
  direction: ltr;
  display: inline-block;
}

.contact-info a:hover {
  text-decoration: underline;
  color: #fff;
}

.features-pill {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
}

.features-pill span {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.35rem 0.65rem;
  border-radius: 20px;
  color: #d1c4ce;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.text-success { color: #10b981; }
.text-info { color: #38bdf8; }

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.83rem;
  color: #9f8c9a;
}

.copyright strong {
  color: #f0e6ee;
}

.developer-tag {
  color: #ff6b9d;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .footer-container {
    padding: 2.5rem 14px 1.5rem;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
