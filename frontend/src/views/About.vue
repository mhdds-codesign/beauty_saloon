<template>
  <div class="about-page">
    <PublicHeader />

    <div class="editorial-about-flow">
      <!-- بلوک ۱: هیرو معرفی سالن با عکس واقعی فضای سالن -->
      <section class="about-hero-block rose-master-block">
        <div class="about-hero-grid">
          <div class="about-hero-text">
            <span class="hero-kicker">A B O U T &nbsp; R O S E &nbsp; B E A U T Y</span>
            <h1 class="hero-serif-title editorial-serif">ABOUT OUR SALON</h1>
            <p class="hero-fa-sub">( داستان اصالت، آرامش و زیبایی در سالن تخصصی رز بیوتی مشهد )</p>

            <div class="hero-cream-callout cream-inset-card">
              <p>
                ما در رز بیوتی، هنر دست برترین اساتید، علم مراقبت از سلامت پوست و مو و متریال درجه‌یک اروپایی را در محیطی VIP و استریل گردهم آورده‌ایم تا درخشش طبیعی شما ماندگار شود.
              </p>
              <router-link to="/contact" class="corner-arrow-badge callout-arrow" title="تماس با ما">
                <i class="fas fa-arrow-left"></i>
              </router-link>
            </div>
          </div>

          <div class="about-hero-photo-card cream-inset-card">
            <div class="photo-inner-frame">
              <img src="/images/salon_interior.jpg" alt="فضای لوکس سالن زیبایی رز بیوتی" class="salon-real-img" />
            </div>
            <div class="photo-caption-bar">
              <div>
                <strong class="editorial-serif">VIP STUDIO</strong>
                <span>محیط مدرن و استریل بلوار سجاد</span>
              </div>
              <span class="badge badge-success">تاییدیه بهداشت ۱۰۰٪</span>
            </div>
          </div>
        </div>
      </section>

      <!-- بلوک ۲: داستان برند و کارت هم‌پوشاننده آمار -->
      <section class="about-story-section">
        <div class="story-master-block rose-master-block">
          <div class="story-layout">
            <div class="story-card cream-inset-card">
              <h2>آغاز یک مسیر متفاوت در صنعت زیبایی</h2>
              <p>
                سالن زیبایی <strong>رز بیوتی (Rose Beauty)</strong> با هدف پایان دادن به نگرانی‌های رایج بانوان در زمینه آسیب‌های شیمیایی به پوست و مو و بهداشت ابزارهای سالنی پایه‌گذاری شد. ما باور داریم که زیبایی حقیقی، در امتداد سلامت، پاکیزگی و آرامش درونی شکل می‌گیرد.
              </p>
              <p>
                از همان روز نخست، استاندارد کاری خود را بر پایه استفاده انحصاری از متریال ارگانیک، بدون فرمالدهید و بدون آمونیاک از معتبرترین آزمایشگاه‌های زیبایی ایتالیا، فرانسه و کره جنوبی بنا نهادیم. حضور در سالن رز تنها یک نوبت ساده نیست؛ بلکه فرصتی برای رهایی از تنش‌های روزمره در فضایی آرامش‌بخش است.
              </p>
            </div>

            <div class="story-overlap-stat cream-inset-card">
              <span class="stat-top-pill">گواهی‌نامه اتحادیه آرایشگران</span>
              <div class="stat-num editorial-serif">+۵۰۰</div>
              <div class="stat-lbl">مراجع وفادار و رضایت‌مند</div>
              <div class="stat-img-mini">
                <img src="/images/skincare_vip.jpg" alt="مراقبت VIP پوست در سالن رز" />
              </div>
              <blockquote class="stat-quote">
                «سلامت موها و پوست شما خط قرمز همیشگی رز بیوتی است.»
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <!-- بلوک ۳: ارکان چهارگانه کیفیت -->
      <section class="about-pillars-section">
        <div class="section-header-block">
          <span class="editorial-tag"><i class="fas fa-award"></i> استانداردهای طلایی</span>
          <h2 class="section-heading">ارکان و ارزش‌های بنیادین سالن رز بیوتی</h2>
          <p class="section-sub">اصولی که هیچ‌گاه بر سر کیفیت و اجرای دقیق آن‌ها مصالحه نمی‌کنیم</p>
        </div>

        <div class="pillars-editorial-grid">
          <div class="pillar-rect-card cream-inset-card">
            <div class="p-head">
              <span class="p-sq-icon"><i class="fas fa-pump-medical"></i></span>
              <span class="p-num editorial-serif">01</span>
            </div>
            <h3>استریل ۱۰۰٪ با اتوکلاو پزشکی</h3>
            <p>تمامی ابزارهای چندبارمصرف در اتوکلاو استریل می‌شوند و پک‌های ناخن و پیش‌بندها کاملاً یکبارمصرف بوده و جلوی مراجع باز می‌شوند.</p>
          </div>

          <div class="pillar-rect-card cream-inset-card">
            <div class="p-head">
              <span class="p-sq-icon"><i class="fas fa-leaf"></i></span>
              <span class="p-num editorial-serif">02</span>
            </div>
            <h3>متریال ارگانیک اروپایی</h3>
            <p>رنگ‌ها و کراتین‌های مصرفی فاقد آمونیاک، بدون گاز سمی و ضدحساسیت هستند و به بافت طبیعی مو یا ناخن آسیبی نمی‌رسانند.</p>
          </div>

          <div class="pillar-rect-card cream-inset-card">
            <div class="p-head">
              <span class="p-sq-icon"><i class="fas fa-graduation-cap"></i></span>
              <span class="p-num editorial-serif">03</span>
            </div>
            <h3>کادر دارای مدارک بین‌المللی</h3>
            <p>اساتید هر لاین دوره‌دیده در آکادمی‌های معتبر جهان هستند و خدماتی دقیق، طبیعی و متناسب با فرم چهره شما خلق می‌کنند.</p>
          </div>

          <div class="pillar-rect-card cream-inset-card">
            <div class="p-head">
              <span class="p-sq-icon"><i class="fas fa-clock"></i></span>
              <span class="p-num editorial-serif">04</span>
            </div>
            <h3>نوبت‌دهی دقیق و بدون معطلی</h3>
            <p>با سامانه هوشمند رزرو، برای هر مراجع وقت اختصاصی در نظر گرفته می‌شود و هیچ معطلی خسته‌کننده‌ای در سالن نخواهید داشت.</p>
          </div>
        </div>
      </section>

      <!-- بلوک ۴: فضاهای تخصصی و دکمه اقدام -->
      <section class="about-zones-section">
        <div class="rose-master-block zones-master">
          <div class="zones-header">
            <h2 class="text-white">اتاق‌های اختصاصی و امکانات VIP هر لاین</h2>
            <p class="text-rose-soft">شنبه تا چهارشنبه ۰۹:۰۰ الی ۱۹:۰۰ | پنجشنبه‌ها ۰۹:۰۰ الی ۱۶:۰۰</p>
          </div>

          <div class="zones-grid">
            <div class="zone-card cream-inset-card">
              <i class="fas fa-cut"></i>
              <h4>سالن مو و کراتین</h4>
              <p>مجهز به سیستم تهویه صنعتی و دستگاه‌های نانومیست و اوزون‌تراپی.</p>
            </div>
            <div class="zone-card cream-inset-card">
              <i class="fas fa-hand-sparkles"></i>
              <h4>بخش مانیکور و اسپا</h4>
              <p>میزهای استریل با فن گردگیر و حوضچه‌های جکوزی‌دار پدیکور VIP.</p>
            </div>
            <div class="zone-card cream-inset-card">
              <i class="fas fa-smile-beam"></i>
              <h4>کابین پوست و فیشیال</h4>
              <p>اتاق آرام با نور ملایم و مدرن‌ترین دستگاه‌های هیدروفیشیال.</p>
            </div>
            <div class="zone-card cream-inset-card">
              <i class="fas fa-crown"></i>
              <h4>سوئیت اختصاصی عروس</h4>
              <p>اتاق مجزا با آینه‌های هالیوودی و پذیرایی ویژه عروس خانم‌ها.</p>
            </div>
          </div>

          <div class="zones-cta-bar">
            <router-link to="/contact" class="btn btn-secondary">
              <i class="fas fa-phone-alt"></i> مشاهده آدرس و تماس با ما
            </router-link>
            <router-link to="/#services" class="btn btn-primary">
              <i class="fas fa-spa"></i> مشاهده خدمات و رزرو نوبت
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PublicHeader from '../components/PublicHeader.vue'

export default {
  name: 'About',
  components: {
    PublicHeader
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}
</script>

<style scoped>
.about-page {
  direction: rtl;
  padding-top: 86px;
  padding-bottom: 1rem;
}

.editorial-about-flow {
  width: 100%;
  padding: 0 clamp(1rem, 2.5vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}

.about-hero-block {
  padding: 2.5rem clamp(1.2rem, 3vw, 2.6rem);
}

.about-hero-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
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
  font-size: clamp(2.1rem, 4.5vw, 3.3rem);
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  line-height: 1.1;
}

.hero-fa-sub {
  color: #fce2ec;
  font-size: 0.96rem;
  margin: 0.6rem 0 1.4rem;
}

.hero-cream-callout {
  padding: 1.5rem 1.5rem 1.8rem;
  position: relative;
}
.hero-cream-callout p {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.8;
  color: #350e20;
}
.callout-arrow {
  position: absolute;
  bottom: 12px;
  left: -14px;
}

.about-hero-photo-card {
  padding: 1rem;
}
.photo-inner-frame {
  background: #561935;
  padding: 7px;
  border-radius: 16px;
  height: 240px;
}
.salon-real-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 11px;
}
.photo-caption-bar {
  margin-top: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.photo-caption-bar strong {
  display: block;
  font-size: 1rem;
  color: #350e20;
}
.photo-caption-bar span {
  font-size: 0.78rem;
  color: #7a5163;
}

/* بلوک داستان و هم‌پوشانی */
.story-master-block {
  padding: 2.4rem clamp(1.2rem, 3vw, 2.6rem);
}
.story-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
}
.story-card {
  padding: 2rem;
}
.story-card h2 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
}
.story-card p {
  font-size: 0.94rem;
  line-height: 1.85;
  color: #4f1d34;
  margin-bottom: 1rem;
}

.story-overlap-stat {
  padding: 1.8rem;
  text-align: center;
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
}
.stat-top-pill {
  background: #561935;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.9rem;
}
.stat-num {
  font-size: 3rem;
  font-weight: 900;
  color: #561935;
  line-height: 1;
}
.stat-lbl {
  font-size: 0.95rem;
  font-weight: 800;
  color: #350e20;
  margin-bottom: 1rem;
}
.stat-img-mini {
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #561935;
  margin-bottom: 1rem;
}
.stat-img-mini img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stat-quote {
  font-size: 0.85rem;
  color: #58283e;
  font-style: italic;
  margin: 0;
}

/* ارکان کیفیت */
.section-header-block {
  text-align: center;
  margin-bottom: 1.8rem;
}
.editorial-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #561935;
  color: #fff;
  padding: 0.35rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.section-heading {
  font-size: 1.75rem;
  font-weight: 900;
  justify-content: center;
}
.section-sub {
  color: #6d4557;
  font-size: 0.94rem;
}

.pillars-editorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.4rem;
}
.pillar-rect-card {
  padding: 1.6rem;
}
.p-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.p-sq-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #561935;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}
.p-num {
  font-size: 1.5rem;
  font-weight: 900;
  color: #dfc4d0;
}
.pillar-rect-card h3 {
  font-size: 1.05rem;
  font-weight: 800;
  margin-bottom: 0.45rem;
}
.pillar-rect-card p {
  font-size: 0.86rem;
  line-height: 1.7;
  color: #58283e;
  margin: 0;
}

/* فضاهای سالن */
.zones-master {
  padding: 2.4rem clamp(1.2rem, 3vw, 2.6rem);
}
.zones-header {
  text-align: center;
  margin-bottom: 1.8rem;
  position: relative;
  z-index: 2;
}
.zones-header h2 {
  justify-content: center;
  color: #fff;
}
.text-white { color: #fff !important; }
.text-rose-soft { color: #f8dce8 !important; }

.zones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  position: relative;
  z-index: 2;
}
.zone-card {
  padding: 1.4rem;
  text-align: center;
}
.zone-card i {
  font-size: 1.8rem;
  color: #d84782;
  margin-bottom: 0.7rem;
}
.zone-card h4 {
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
}
.zone-card p {
  font-size: 0.82rem;
  color: #58283e;
  margin: 0;
  line-height: 1.6;
}

.zones-cta-bar {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

@media (max-width: 900px) {
  .about-hero-grid,
  .story-layout {
    grid-template-columns: 1fr;
  }
  .story-overlap-stat {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
