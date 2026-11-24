<template>
  <div class="landing-page">
    <!-- ==================================================== -->
    <!-- ۱. هدر یکپارچه و مشترک پیشخوان                       -->
    <!-- ==================================================== -->
    <PublicHeader />

    <!-- ==================================================== -->
    <!-- ۲. بخش هیرو و معرفی اصلی (Hero Section)               -->
    <!-- ==================================================== -->
    <section id="home" class="hero-section">
      <div class="hero-glow-orb hero-orb-1"></div>
      <div class="hero-glow-orb hero-orb-2"></div>

      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="fas fa-award"></i> لوکس‌ترین مرکز تخصصی زیبایی و سلامت پوست و مو
          </div>

          <h1 class="hero-title">
            درخشش واقعی زیبایی شما،<br>
            با هنر، ظرافت و تجربه <span class="highlight-text">رز بیوتی</span>
          </h1>

          <p class="hero-description">
            تجربه‌ای متفاوت از خدمات تخصصی کاشت ناخن، رنگ و کراتین مو، فیشیال و پاکسازی پوست، و گریم عروس در محیطی کاملاً استریل، آرامش‌بخش و مجهز به مدرن‌ترین دستگاه‌های روز با نوبت‌دهی آنلاین هوشمند.
          </p>

          <div class="hero-buttons">
            <a href="#portal" class="hero-btn hero-btn-primary" @click.prevent="scrollTo('#portal')">
              <i class="fas fa-key"></i> ورود به حساب‌های کاربری
            </a>
            <router-link to="/register" class="hero-btn hero-btn-secondary">
              <i class="fas fa-calendar-plus"></i> ثبت‌نام و رزرو نوبت
            </router-link>
            <a href="#services" class="hero-btn hero-btn-ghost" @click.prevent="scrollTo('#services')">
              <i class="fas fa-sparkles"></i> مشاهده خدمات و قیمت‌ها
            </a>
          </div>

          <!-- آمارهای برجسته هیرو -->
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-val">+۵۰۰</span>
              <span class="stat-lbl">مراجع وفادار</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-val">۸</span>
              <span class="stat-lbl">لاین تخصصی فعال</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-val">۱۰۰٪</span>
              <span class="stat-lbl">استریل و بهداشتی</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-val">۷</span>
              <span class="stat-lbl">روز پشتیبانی و پاسخگویی</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================================================== -->
    <!-- ۳. بخش سرویس‌ها و لاین‌ها (#services)                  -->
    <!-- ==================================================== -->
    <section id="services" class="section services-section">
      <div class="section-container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fas fa-magic"></i> لاین‌های سالن</span>
          <h2 class="section-title">سرویس‌ها و خدمات تخصصی سالن رز بیوتی</h2>
          <p class="section-subtitle">
            کلیه خدمات با برترین متریال اورجینال اروپایی و توسط اساتید مجرب هر لاین ارائه می‌گردد
          </p>
        </div>

        <div class="services-grid">
          <!-- کارت لاین ۱: ناخن -->
          <div class="service-card">
            <div class="service-icon-box nail-color">
              <i class="fas fa-hand-sparkles"></i>
            </div>
            <div class="service-body">
              <div class="service-meta">
                <span class="service-tag">لاین ناخن</span>
                <span class="service-duration"><i class="far fa-clock"></i> ۶۰ تا ۹۰ دقیقه</span>
              </div>
              <h3 class="service-name">کاشت، لمینت و طراحی ناخن</h3>
              <p class="service-desc">
                کاشت ژل، پلی‌ژل، لمینت روسی، مانیکور و پدیکور VIP، طراحی ژورنالی و اسپا با مواد بدون آسیب به صدف ناخن.
              </p>
              <div class="service-price-row">
                <span class="price-label">شروع قیمت از:</span>
                <span class="price-val">۲۵۰,۰۰۰ تومان</span>
              </div>
              <router-link :to="getServiceBookingLink('کاشت، لمینت و طراحی ناخن')" class="service-book-btn">
                <span>رزرو این خدمت</span>
                <i class="fas fa-arrow-left"></i>
              </router-link>
            </div>
          </div>

          <!-- کارت لاین ۲: مو -->
          <div class="service-card">
            <div class="service-icon-box hair-color">
              <i class="fas fa-cut"></i>
            </div>
            <div class="service-body">
              <div class="service-meta">
                <span class="service-tag">لاین مو</span>
                <span class="service-duration"><i class="far fa-clock"></i> ۷۵ تا ۹۰ دقیقه</span>
              </div>
              <h3 class="service-name">کراتین، احیا، رنگ و لایت</h3>
              <p class="service-desc">
                صافی و احیای ۱۰۰٪، نانوبوتاکس، پروتئین‌تراپی، آمبره، بالیاژ، رنگساژهای ژورنالی و کوتاهی حرفه‌ای با کوپ‌های روز دنیا.
              </p>
              <div class="service-price-row">
                <span class="price-label">شروع قیمت از:</span>
                <span class="price-val">۱,۵۰۰,۰۰۰ تومان</span>
              </div>
              <router-link :to="getServiceBookingLink('کراتین، احیا، رنگ و لایت')" class="service-book-btn">
                <span>رزرو این خدمت</span>
                <i class="fas fa-arrow-left"></i>
              </router-link>
            </div>
          </div>

          <!-- کارت لاین ۳: پوست -->
          <div class="service-card">
            <div class="service-icon-box skin-color">
              <i class="fas fa-smile-beam"></i>
            </div>
            <div class="service-body">
              <div class="service-meta">
                <span class="service-tag">لاین پوست</span>
                <span class="service-duration"><i class="far fa-clock"></i> ۳۰ تا ۴۵ دقیقه</span>
              </div>
              <h3 class="service-name">فیشیال و جوانسازی پوست</h3>
              <p class="service-desc">
                پاکسازی عمقی، هیدروفیشیال، درماپیلینگ، اسیدتراپی، مزووایت، آبرسانی تخصصی و لایه‌برداری با متریال اورجینال کره‌ای و فرانسوی.
              </p>
              <div class="service-price-row">
                <span class="price-label">شروع قیمت از:</span>
                <span class="price-val">۱۸۰,۰۰۰ تومان</span>
              </div>
              <router-link :to="getServiceBookingLink('فیشیال و جوانسازی پوست')" class="service-book-btn">
                <span>رزرو این خدمت</span>
                <i class="fas fa-arrow-left"></i>
              </router-link>
            </div>
          </div>

          <!-- کارت لاین ۴: میکاپ -->
          <div class="service-card">
            <div class="service-icon-box makeup-color">
              <i class="fas fa-paint-brush"></i>
            </div>
            <div class="service-body">
              <div class="service-meta">
                <span class="service-tag">لاین میکاپ</span>
                <span class="service-duration"><i class="far fa-clock"></i> ۶۰ دقیقه</span>
              </div>
              <h3 class="service-name">میکاپ عروس و گریم حرفه‌ای</h3>
              <p class="service-desc">
                میکاپ‌های اروپایی، لایت و اسموکی، کانتورینگ سینمایی چهره، شینیون‌های مدرن خطی و حرارتی با ماندگاری ۲۴ ساعته تضمینی.
              </p>
              <div class="service-price-row">
                <span class="price-label">شروع قیمت از:</span>
                <span class="price-val">۵,۰۰۰,۰۰۰ تومان</span>
              </div>
              <router-link :to="getServiceBookingLink('میکاپ عروس و گریم حرفه‌ای')" class="service-book-btn">
                <span>رزرو این خدمت</span>
                <i class="fas fa-arrow-left"></i>
              </router-link>
            </div>
          </div>

          <!-- کارت لاین ۵: ابرو و مژه -->
          <div class="service-card">
            <div class="service-icon-box brow-color">
              <i class="fas fa-eye"></i>
            </div>
            <div class="service-body">
              <div class="service-meta">
                <span class="service-tag">لاین ابرو و مژه</span>
                <span class="service-duration"><i class="far fa-clock"></i> ۳۰ تا ۶۰ دقیقه</span>
              </div>
              <h3 class="service-name">اصلاح ابرو، لیفت و لمینت</h3>
              <p class="service-desc">
                اصلاح و قرینه‌سازی تخصصی ابرو، لیفت و بوتاکس مژه و ابرو با مواد ارگانیک ایتالیایی بدون ریزش و تغییر فرم طبیعی.
              </p>
              <div class="service-price-row">
                <span class="price-label">شروع قیمت از:</span>
                <span class="price-val">۱۸۰,۰۰۰ تومان</span>
              </div>
              <router-link :to="getServiceBookingLink('اصلاح ابرو، لیفت و لمینت')" class="service-book-btn">
                <span>رزرو این خدمت</span>
                <i class="fas fa-arrow-left"></i>
              </router-link>
            </div>
          </div>

          <!-- کارت لاین ۶: مشاوره و پکیج VIP -->
          <div class="service-card vip-card">
            <div class="service-icon-box vip-color">
              <i class="fas fa-gem"></i>
            </div>
            <div class="service-body">
              <div class="service-meta">
                <span class="service-tag vip-tag">پکیج VIP</span>
                <span class="service-duration"><i class="far fa-clock"></i> روز اختصاصی</span>
              </div>
              <h3 class="service-name">پکیج کامل زیبایی و اسپا</h3>
              <p class="service-desc">
                یک روز رویایی شامل فیشیال، رنگ مو، مانیکور، پدیکور و گریم با پذیرایی ویژه، اتاق اختصاصی و تخفیف ویژه پکیج.
              </p>
              <div class="service-price-row">
                <span class="price-label">تعرفه تخفیف‌دار:</span>
                <span class="price-val vip-price">مشاوره اختصاصی</span>
              </div>
              <a href="tel:09123456789" class="service-book-btn vip-btn">
                <span>تماس جهت هماهنگی</span>
                <i class="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================================================== -->
    <!-- ۴. بخش پورتال ورود به حساب‌های متفاوت (#portal)       -->
    <!-- ==================================================== -->
    <section id="portal" class="section portal-section">
      <div class="section-container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fas fa-door-open"></i> سامانه نوبت‌دهی و مدیریت</span>
          <h2 class="section-title">ورود به پنل‌های کاربری رز بیوتی</h2>
          <p class="section-subtitle">
            سامانه یکپارچه برای مدیریت سالن توسط ادمین‌ها و پیگیری نوبت‌ها توسط مراجعین گرامی
          </p>
        </div>

        <div class="portal-grid">
          <!-- کارت پورتال ۱: ادمین و مدیر سالن -->
          <div class="portal-card admin-portal">
            <div class="portal-icon">
              <i class="fas fa-user-shield"></i>
            </div>
            <div class="portal-badge badge badge-danger">دسترسی پرسنل و مدیران</div>
            <h3 class="portal-title">پنل مدیریت سالن (ادمین)</h3>
            <p class="portal-desc">
              ورود برای مدیر ارشد و پرسنل سالن جهت مدیریت نوبت‌ها، مشاهده گزارش درآمد، تنظیم ساعات کاری لاین‌ها و بررسی سوابق مشتریان.
            </p>
            <ul class="portal-features">
              <li><i class="fas fa-check-circle"></i> تایید، لغو و تغییر وضعیت نوبت‌ها</li>
              <li><i class="fas fa-check-circle"></i> آمار لحظه‌ای درآمد و شلوغ‌ترین لاین‌ها</li>
              <li><i class="fas fa-check-circle"></i> ثبت شیفت‌ها و ساعات کاری جدید</li>
            </ul>
            <router-link to="/login" class="portal-btn btn-admin">
              <i class="fas fa-sign-in-alt"></i> ورود به پنل مدیریت سالن
            </router-link>
            <small class="portal-note">اکانت تستی: نام‌کاربری <code>admin</code> / رمز <code>admin123</code></small>
          </div>

          <!-- کارت پورتال ۲: مشتریان و مراجعین -->
          <div class="portal-card client-portal">
            <div class="portal-icon">
              <i class="fas fa-user-check"></i>
            </div>
            <div class="portal-badge badge badge-success">دسترسی مراجعین محترم</div>
            <h3 class="portal-title">ورود مشتریان دارای حساب</h3>
            <p class="portal-desc">
              اگر قبلاً در سالن رزرو داشته‌اید یا ثبت‌نام کرده‌اید، می‌توانید با نام‌کاربری و رمز عبور خود وارد شوید و نوبت‌هایتان را مدیریت کنید.
            </p>
            <ul class="portal-features">
              <li><i class="fas fa-check-circle"></i> مشاهده وضعیت نوبت‌ها (تایید شده / در انتظار)</li>
              <li><i class="fas fa-check-circle"></i> پیگیری فاکتور و زمان رزرو شده</li>
              <li><i class="fas fa-check-circle"></i> ویرایش اطلاعات تماس و یادداشت‌ها</li>
            </ul>
            <router-link to="/login" class="portal-btn btn-client">
              <i class="fas fa-unlock-alt"></i> ورود به حساب کاربری مشتری
            </router-link>
            <small class="portal-note">دسترسی سریع با سشن امن</small>
          </div>

          <!-- کارت پورتال ۳: ثبت‌نام مراجعین جدید -->
          <div class="portal-card register-portal">
            <div class="portal-icon">
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="portal-badge badge badge-warning">مراجعین جدید</div>
            <h3 class="portal-title">عضویت آنلاین و ثبت نوبت</h3>
            <p class="portal-desc">
              برای اولین بار است که به سالن رز بیوتی تشریف می‌آورید؟ در کمتر از ۲ دقیقه ثبت‌نام کنید و نوبت دلخواه خود را رزرو فرمایید.
            </p>
            <ul class="portal-features">
              <li><i class="fas fa-check-circle"></i> رزرو آنلاین بدون معطلی و تماس تلفنی</li>
              <li><i class="fas fa-check-circle"></i> انتخاب لاین، خدمت و اسلات زمانی آزاد</li>
              <li><i class="fas fa-check-circle"></i> بهره‌مندی از تخفیف‌های ویژه مشتریان جدید</li>
            </ul>
            <router-link to="/register" class="portal-btn btn-register">
              <i class="fas fa-edit"></i> فرم ثبت‌نام و رزرو نوبت
            </router-link>
            <small class="portal-note">ثبت‌نام رایگان و بدون نیاز به پیش‌پرداخت</small>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================================================== -->
    <!-- ۵. بخش چرا رز بیوتی؟ (#why-us)                       -->
    <!-- ==================================================== -->
    <section id="why-us" class="section why-us-section">
      <div class="section-container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fas fa-gem"></i> چرا سالن رز بیوتی؟</span>
          <h2 class="section-title">دلایل تمایز و درخشش سالن تخصصی رز بیوتی</h2>
          <p class="section-subtitle">
            ارائه خدمات در محیطی کاملاً آرام، بهداشتی و با رعایت بالاترین استانداردهای مراقبتی روز دنیا
          </p>
        </div>

        <div class="why-us-grid">
          <div class="why-card">
            <div class="why-icon-box">
              <i class="fas fa-pump-medical"></i>
            </div>
            <h3>استریل ۱۰۰٪ کلینیکی</h3>
            <p>استفاده از اتوکلاو پزشکی بیمارستانی و پک‌های یکبار مصرف پلمپ‌شده برای تک‌تک مراجعین گرامی.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">
              <i class="fas fa-shield-virus"></i>
            </div>
            <h3>متریال ارگانیک و بدون آسیب</h3>
            <p>کلیه مواد مو، پوست و ناخن فاقد آمونیاک و فرمالدهید بوده و دارای تاییدیه اصالت از برترین برندهای اروپا هستند.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>اساتید دارای مدارک بین‌المللی</h3>
            <p>کادر سالن دوره‌دیده در برترین آکادمی‌های تخصصی جهان با تسلط کامل بر جدیدترین متدهای ژورنالی.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">
              <i class="fas fa-stopwatch"></i>
            </div>
            <h3>نوبت‌دهی منظم بدون معطلی</h3>
            <p>احترام کامل به زمان باارزش شما؛ سامانه هوشمند رزرو زمان‌بندی دقیق و بدون اتلاف وقت را تضمین می‌کند.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">
              <i class="fas fa-couch"></i>
            </div>
            <h3>اتاق‌های مجزا و پذیرایی VIP</h3>
            <p>محیطی آرامش‌بخش، مجهز به تهویه مطبوع، موسیقی دل‌نشین و پذیرایی اختصاصی برای تجربه‌ای لوکس.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">
              <i class="fas fa-medal"></i>
            </div>
            <h3>ضمانت رضایت و مشاوره پس از خدمت</h3>
            <p>پشتیبانی کامل پس از ارائه خدمات، پیگیری رضایت شما و ارائه روتین‌های مراقبت از پوست و مو در منزل.</p>
          </div>
        </div>

        <div class="why-footer-cta text-center">
          <router-link to="/about" class="btn btn-secondary">
            <i class="fas fa-book-open"></i> مشاهده تاریخچه کامل، مجوزها و اطلاعات بیشتر سالن رز
          </router-link>
        </div>
      </div>
    </section>

    <!-- ==================================================== -->
    <!-- ۶. بخش رضایت و نظرات مراجعین (#reviews)              -->
    <!-- ==================================================== -->
    <section id="reviews" class="section reviews-section">
      <div class="section-container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fas fa-star"></i> تجربیات واقعی</span>
          <h2 class="section-title">رضایت و نظرات بانوان خوش‌سلیقه</h2>
          <p class="section-subtitle">
            نظرات ثبت‌شده مراجعین عزیزی که زیبایی و سلامت خود را با اطمینان به رز بیوتی سپرده‌اند
          </p>
        </div>

        <div class="reviews-grid">
          <!-- نظر ۱ -->
          <div class="review-card">
            <div class="review-header">
              <div class="client-avatar">س‌م</div>
              <div class="client-info">
                <h4>سارا محمدی</h4>
                <span class="service-used-tag">کراتین و احیای ابریشمی مو</span>
              </div>
              <span class="verified-badge"><i class="fas fa-check-circle"></i> تایید شده</span>
            </div>
            <div class="review-stars">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
            <p class="review-text">
              «موهای من بر اثر دکلره کاملاً سوخته و دمیج شده بود. اساتید لاین مو با پروتئین‌تراپی و نانوبوتاکس موهام رو کاملاً زنده کردن؛ الان بعد از ۳ ماه هنوز مثل ابریشم نرم و صافه و کوچک‌ترین ریزشی نداشتم. برخورد پرسنل هم فوق‌العاده محترمانه بود.»
            </p>
          </div>

          <!-- نظر ۲ -->
          <div class="review-card">
            <div class="review-header">
              <div class="client-avatar">م‌ر</div>
              <div class="client-info">
                <h4>مهسا راد</h4>
                <span class="service-used-tag">کاشت و لمینت روسی ناخن</span>
              </div>
              <span class="verified-badge"><i class="fas fa-check-circle"></i> تایید شده</span>
            </div>
            <div class="review-stars">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
            <p class="review-text">
              «من به مواد کاشت حساسیت داشتم و همیشه صدف ناخنم قارچ می‌زد، اما سالن رز از متریال ارگانیک و ضدقارچ استفاده کردن. پک سوهان رو جلوی خودم از بسته استریل باز کردن که واقعاً خیالم رو راحت کرد. دیزاینشون هم فوق‌العاده ظریف و شیکه.»
            </p>
          </div>

          <!-- نظر ۳ -->
          <div class="review-card">
            <div class="review-header">
              <div class="client-avatar">ن‌ح</div>
              <div class="client-info">
                <h4>نیلوفر حسینی</h4>
                <span class="service-used-tag">پکیج VIP میکاپ و شینیون عروس</span>
              </div>
              <span class="verified-badge"><i class="fas fa-check-circle"></i> تایید شده</span>
            </div>
            <div class="review-stars">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
            <p class="review-text">
              «برای روز عروسیم از چند ماه قبل استرس داشتم. میکاپم در عین حال که چهره خودم رو تغییر نداد، بسیار چشم‌نواز و لایت بود. تا ۴ صبح با وجود عرق و جنب‌وجوش، میکاپ و کانتورینگ تکون نخورد. از صمیم قلب از تیم هنرمند رز بیوتی ممنونم.»
            </p>
          </div>

          <!-- نظر ۴ -->
          <div class="review-card">
            <div class="review-header">
              <div class="client-avatar">ف‌ز</div>
              <div class="client-info">
                <h4>فاطمه زارعی</h4>
                <span class="service-used-tag">فیشیال و جوانسازی پوست</span>
              </div>
              <span class="verified-badge"><i class="fas fa-check-circle"></i> تایید شده</span>
            </div>
            <div class="review-stars">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
            <p class="review-text">
              «محیط اتاق فیشیال با ماساژ و دستگاه‌های هیدروفیشیال حس یک اسپای واقعی رو داد. جوش‌های سرسیاه بینیم کاملاً تخلیه شد و پوستم برق خاصی پیدا کرد. روتین مراقبت در منزلی که بهم پیشنهاد دادن هم معجزه کرد.»
            </p>
          </div>
        </div>

        <!-- نوار خلاصه رضایت -->
        <div class="review-summary-bar">
          <div class="summary-score">
            <span class="score-num">۴.۹</span>
            <span class="score-stars"><i class="fas fa-star" v-for="n in 5" :key="n"></i></span>
            <span class="score-label">میانگین رضایت مراجعین از ۵۰۰+ نظر ثبت‌شده</span>
          </div>
          <router-link to="/register" class="btn btn-primary btn-sm">
            <i class="fas fa-calendar-plus"></i> تجربه درخشش در رز بیوتی
          </router-link>
        </div>
      </div>
    </section>

    <!-- ==================================================== -->
    <!-- ۷. بخش سوالات متداول مشتریان (#faq)                  -->
    <!-- ==================================================== -->
    <section id="faq" class="section faq-section">
      <div class="section-container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fas fa-question-circle"></i> پرسش‌های پرتکرار</span>
          <h2 class="section-title">سوالات متداول مراجعین گرامی</h2>
          <p class="section-subtitle">
            پاسخ به سوالاتی که بیشترین بار توسط مراجعین پیش از حضور در سالن مطرح می‌گردد
          </p>
        </div>

        <div class="faq-accordion-wrap">
          <div 
            v-for="(item, index) in faqs" 
            :key="index"
            class="faq-item"
            :class="{ 'active': activeFaq === index }"
          >
            <button class="faq-question-btn" @click="toggleFaq(index)" :aria-expanded="activeFaq === index">
              <span class="faq-q-title">
                <i class="far fa-question-circle"></i> {{ item.q }}
              </span>
              <span class="faq-toggle-icon">
                <i :class="activeFaq === index ? 'fas fa-minus' : 'fas fa-plus'"></i>
              </span>
            </button>
            <transition name="accordion">
              <div class="faq-answer-body" v-if="activeFaq === index">
                <p>{{ item.a }}</p>
              </div>
            </transition>
          </div>
        </div>

        <!-- کارت هدایت به صفحه درباره ما و تماس -->
        <div class="faq-help-box">
          <div class="help-content">
            <div class="help-icon"><i class="fas fa-comments"></i></div>
            <div>
              <h3>هنوز سوالی دارید یا مایل به مشاوره حضوری هستید؟</h3>
              <p>جهت مشاهده آدرس سالن در مشهد، تلفن‌های تماس مستقیم و فرم ارسال پیام، به صفحه تماس مراجعه نمایید.</p>
            </div>
          </div>
          <router-link to="/about" class="btn btn-primary">
            <i class="fas fa-map-marked-alt"></i> صفحه درباره ما و اطلاعات تماس
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PublicHeader from '../components/PublicHeader.vue'
import { auth } from '../auth.js'
import toast from '../services/toast.js'

export default {
  name: 'Landing',
  components: {
    PublicHeader
  },
  data() {
    return {
      auth,
      mobileMenuOpen: false,
      isScrolled: false,
      activeSection: 'home',
      activeFaq: 0,
      faqs: [
        {
          q: 'چگونه می‌توانم در سالن زیبایی رز بیوتی نوبت آنلاین رزرو کنم؟',
          a: 'در کمتر از ۲ دقیقه با کلیک بر روی دکمه «نوبت‌دهی آنلاین» یا انتخاب سرویس مورد نظر، لاین و ساعت آزاد دلخواه خود را ثبت کنید. فرآیند رزرو کاملاً آنلاین بوده و نیازی به تماس تلفنی یا پیش‌پرداخت ندارد.'
        },
        {
          q: 'آیا مواد مصرفی برای مو و ناخن باعث حساسیت یا آسیب می‌شوند؟',
          a: 'خیر، کلیه متریال سالن ارگانیک، فاقد آمونیاک، بدون فرمالدهید و دارای تاییدیه‌های سلامت اتحادیه اروپا هستند. سلامت پوست، مو و ناخن مراجعین اولویت نخست سالن رز است.'
        },
        {
          q: 'شرایط لغو یا تغییر زمان نوبت به چه صورت است؟',
          a: 'شما می‌توانید تا ۲۴ ساعت قبل از زمان تعیین‌شده، از طریق حساب کاربری خود یا تماس با پشتیبانی سالن، نوبت خود را بدون کسر وجه لغو نموده یا به زمان دیگری موکول فرمایید.'
        },
        {
          q: 'چه مدت قبل از مراسم باید برای پکیج میکاپ عروس و VIP هماهنگ کنیم؟',
          a: 'پیشنهاد می‌کنیم حداقل ۱ الی ۲ ماه قبل از تاریخ مراسم برای جلسه مشاوره حضوری رایگان، بررسی نوع پوست و مو و رزرو تاریخ سالن اقدام فرمایید.'
        },
        {
          q: 'وسایل و ابزارهای سالن چگونه استریل و بهداشتی می‌شوند؟',
          a: 'تمامی ابزارهای چندبارمصرف درون دستگاه اتوکلاو پزشکی با حرارت و فشار استریل شده و پک‌های ناخن، سوهان و پیش‌بند برای هر مراجع در ساشه یکبارمصرف پلمپ‌شده باز می‌شود.'
        },
        {
          q: 'ساعات کاری سالن در طول هفته به چه صورت است؟',
          a: 'شنبه تا چهارشنبه از ساعت ۰۹:۰۰ الی ۱۹:۰۰ و پنجشنبه‌ها از ۰۹:۰۰ الی ۱۶:۰۰ در خدمت شما هستیم. روزهای جمعه صرفاً مختص خدمات و قراردادهای ویژه عروس می‌باشد.'
        }
      ]
    }
  },
  computed: {
    isLoggedIn() {
      return Boolean(this.auth && this.auth.username)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 40

      // تشخیص سکشن فعال
      const sections = ['home', 'services', 'portal', 'why-us', 'reviews', 'faq']
      const scrollPos = window.scrollY + 120

      for (let sec of sections) {
        const el = document.getElementById(sec)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            this.activeSection = sec
            break
          }
        }
      }
    },

    toggleFaq(index) {
      this.activeFaq = this.activeFaq === index ? null : index
    },

    scrollTo(targetId) {
      this.mobileMenuOpen = false
      const el = document.querySelector(targetId)
      if (el) {
        const yOffset = -70
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    },

    getServiceBookingLink(serviceName) {
      if (this.isLoggedIn) {
        return '/reservations/new'
      }
      return `/register?service=${encodeURIComponent(serviceName)}`
    },

    submitContact() {
      if (!this.contactForm.name || !this.contactForm.phone) {
        toast.warning('لطفاً نام و شماره تماس خود را وارد نمایید.')
        return
      }

      this.contactSent = true
      toast.success(`با تشکر از شما ${this.contactForm.name} عزیز! پیام شما با موفقیت ثبت شد و به زودی با شماره ${this.contactForm.phone} تماس حاصل خواهد شد.`, 5000)
      this.contactForm = { name: '', phone: '', service: '', message: '' }
      setTimeout(() => {
        this.contactSent = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
/* ==================================================== */
/* استایل‌های اختصاصی و کاملاً ایزوله صفحه پیشخوان عمومی  */
/* ==================================================== */

.landing-page {
  direction: rtl;
  color: #f0e6ee;
  position: relative;
  overflow-x: hidden;
  font-family: 'Vazirmatn', sans-serif;
}

/* 1. Header */
.landing-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 1rem 0;
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: rgba(10, 8, 24, 0.6);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 45, 149, 0.12);
}

.landing-header.scrolled {
  padding: 0.65rem 0;
  background: rgba(8, 6, 20, 0.94);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 45, 149, 0.2);
}

.header-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.brand-logo-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff2d95, #ff6b9d);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  box-shadow: 0 4px 18px rgba(255, 45, 149, 0.45);
}

.brand-title-wrap {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.35rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.brand-subtitle {
  font-size: 0.72rem;
  color: #ff6b9d;
  font-weight: 600;
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: #e5d6e1;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.93rem;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-link i {
  font-size: 0.85rem;
  color: #ff6b9d;
  transition: transform 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: #ff6b9d;
  background: rgba(255, 45, 149, 0.08);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.15rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}

.action-outline {
  border: 1px solid rgba(255, 45, 149, 0.4);
  color: #f0e6ee;
  background: rgba(255, 45, 149, 0.05);
}

.action-outline:hover {
  background: rgba(255, 45, 149, 0.15);
  border-color: #ff2d95;
  color: #fff;
}

.action-primary {
  background: linear-gradient(135deg, #ff2d95, #ff6b9d);
  color: #fff;
  box-shadow: 0 4px 18px rgba(255, 45, 149, 0.35);
}

.action-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 45, 149, 0.5);
}

.hamburger-btn {
  display: none;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 45, 149, 0.3);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
}

/* 2. Hero Section */
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 7.5rem 0 4rem;
  overflow: hidden;
}

.hero-glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}

.hero-orb-1 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 45, 149, 0.25) 0%, transparent 70%);
  top: 5%;
  right: -5%;
}

.hero-orb-2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 70%);
  bottom: 5%;
  left: -5%;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.1rem;
  border-radius: 30px;
  background: rgba(255, 45, 149, 0.1);
  border: 1px solid rgba(255, 45, 149, 0.3);
  color: #ff6b9d;
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  box-shadow: 0 4px 20px rgba(255, 45, 149, 0.15);
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.35;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.highlight-text {
  background: linear-gradient(135deg, #ff2d95 20%, #ff85c0 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  text-shadow: 0 0 30px rgba(255, 45, 149, 0.3);
}

.hero-description {
  font-size: 1.12rem;
  line-height: 1.85;
  color: #d8c6d4;
  margin-bottom: 2.5rem;
  text-align: center;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.8rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero-btn-primary {
  background: linear-gradient(135deg, #ff2d95, #ff6b9d);
  color: #fff;
  box-shadow: 0 6px 25px rgba(255, 45, 149, 0.4);
}

.hero-btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 35px rgba(255, 45, 149, 0.55);
}

.hero-btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 45, 149, 0.3);
  color: #f0e6ee;
}

.hero-btn-secondary:hover {
  background: rgba(255, 45, 149, 0.15);
  border-color: #ff2d95;
  transform: translateY(-2px);
}

.hero-btn-ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #d1c4ce;
}

.hero-btn-ghost:hover {
  border-color: #ff6b9d;
  color: #fff;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  background: rgba(20, 16, 42, 0.65);
  border: 1px solid rgba(255, 45, 149, 0.18);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-val {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ff6b9d;
  line-height: 1.1;
}

.stat-lbl {
  font-size: 0.8rem;
  color: #bfacba;
  margin-top: 0.3rem;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(255, 45, 149, 0.2);
}

/* Sections Global */
.section {
  padding: 5rem 0;
  position: relative;
}

.section-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  margin-bottom: 3.5rem;
}

.section-tag {
  display: inline-block;
  padding: 0.35rem 1rem;
  border-radius: 20px;
  background: rgba(255, 45, 149, 0.1);
  border: 1px solid rgba(255, 45, 149, 0.25);
  color: #ff6b9d;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: 2.1rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.8rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #bfa9b8;
  max-width: 650px;
  margin: 0 auto;
}

/* 3. Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.service-card {
  background: rgba(20, 16, 42, 0.7);
  border: 1px solid rgba(255, 45, 149, 0.15);
  border-radius: 20px;
  padding: 2rem 1.8rem;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 45, 149, 0.45);
  box-shadow: 0 16px 45px rgba(255, 45, 149, 0.2);
}

.service-icon-box {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.nail-color { background: linear-gradient(135deg, #ec4899, #f43f5e); box-shadow: 0 6px 20px rgba(236, 72, 153, 0.35); }
.hair-color { background: linear-gradient(135deg, #a855f7, #6366f1); box-shadow: 0 6px 20px rgba(168, 85, 247, 0.35); }
.skin-color { background: linear-gradient(135deg, #10b981, #06b6d4); box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35); }
.makeup-color { background: linear-gradient(135deg, #f59e0b, #ef4444); box-shadow: 0 6px 20px rgba(245, 158, 11, 0.35); }
.brow-color { background: linear-gradient(135deg, #8b5cf6, #ec4899); box-shadow: 0 6px 20px rgba(139, 92, 246, 0.35); }
.vip-color { background: linear-gradient(135deg, #f59e0b, #d97706); box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4); }

.service-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.service-tag {
  color: #ff6b9d;
  font-size: 0.8rem;
  font-weight: 600;
}

.service-duration {
  color: #9f8c9a;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.service-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
}

.service-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: #bfacba;
  margin-bottom: 1.5rem;
  flex: 1;
}

.service-price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  margin-bottom: 1.2rem;
}

.price-label {
  font-size: 0.82rem;
  color: #9f8c9a;
}

.price-val {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ff6b9d;
}

.service-book-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  background: rgba(255, 45, 149, 0.1);
  border: 1px solid rgba(255, 45, 149, 0.3);
  color: #f0e6ee;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.25s;
}

.service-book-btn:hover {
  background: linear-gradient(135deg, #ff2d95, #ff6b9d);
  color: #fff;
  border-color: transparent;
  transform: translateX(-4px);
}

.vip-card {
  border-color: rgba(245, 158, 11, 0.35);
  background: linear-gradient(180deg, rgba(30, 20, 25, 0.85) 0%, rgba(20, 16, 42, 0.7) 100%);
}

.vip-tag {
  color: #f59e0b;
}

.vip-price {
  color: #f59e0b;
}

.vip-btn:hover {
  background: linear-gradient(135deg, #d97706, #f59e0b);
}

/* 4. Portal Section (ورود به حساب‌های متفاوت) */
.portal-section {
  background: linear-gradient(180deg, rgba(8, 6, 20, 0.4) 0%, rgba(18, 12, 36, 0.8) 50%, rgba(8, 6, 20, 0.4) 100%);
  border-top: 1px solid rgba(255, 45, 149, 0.1);
  border-bottom: 1px solid rgba(255, 45, 149, 0.1);
}

.portal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.portal-card {
  background: rgba(22, 17, 46, 0.85);
  border-radius: 24px;
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
}

.portal-card:hover {
  transform: translateY(-8px);
}

.admin-portal {
  border: 1px solid rgba(239, 68, 68, 0.35);
}
.admin-portal:hover {
  border-color: #ef4444;
  box-shadow: 0 18px 50px rgba(239, 68, 68, 0.22);
}

.client-portal {
  border: 1px solid rgba(16, 185, 129, 0.35);
}
.client-portal:hover {
  border-color: #10b981;
  box-shadow: 0 18px 50px rgba(16, 185, 129, 0.22);
}

.register-portal {
  border: 1px solid rgba(245, 158, 11, 0.35);
}
.register-portal:hover {
  border-color: #f59e0b;
  box-shadow: 0 18px 50px rgba(245, 158, 11, 0.22);
}

.portal-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
}

.admin-portal .portal-icon {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.client-portal .portal-icon {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.register-portal .portal-icon {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.portal-badge {
  align-self: flex-start;
  margin-bottom: 1rem;
}

.portal-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.8rem;
}

.portal-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: #bfacba;
  margin-bottom: 1.5rem;
}

.portal-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.portal-features li {
  font-size: 0.85rem;
  color: #e5d6e1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.admin-portal .portal-features li i { color: #ef4444; }
.client-portal .portal-features li i { color: #10b981; }
.register-portal .portal-features li i { color: #f59e0b; }

.portal-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.4rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  color: #fff;
}

.btn-admin {
  background: linear-gradient(135deg, #b91c1c, #ef4444);
  box-shadow: 0 4px 20px rgba(239, 68, 68, 0.35);
}
.btn-admin:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(239, 68, 68, 0.5);
}

.btn-client {
  background: linear-gradient(135deg, #059669, #10b981);
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35);
}
.btn-client:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.5);
}

.btn-register {
  background: linear-gradient(135deg, #b45309, #d97706);
  box-shadow: 0 4px 20px rgba(217, 119, 6, 0.35);
}
.btn-register:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(217, 119, 6, 0.5);
}

.portal-note {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.78rem;
  color: #9f8c9a;
}

.portal-note code {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  color: #ff6b9d;
}

.nav-link-highlight {
  background: rgba(255, 45, 149, 0.12) !important;
  color: #ff6b9d !important;
  border: 1px solid rgba(255, 45, 149, 0.3);
}
.nav-link-highlight:hover {
  background: #ff2d95 !important;
  color: #fff !important;
}

/* 5. Why Us Section */
.why-us-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
  margin-bottom: 2.5rem;
}

.why-card {
  background: rgba(20, 16, 42, 0.65);
  border: 1px solid rgba(255, 45, 149, 0.18);
  border-radius: 20px;
  padding: 2rem 1.8rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.why-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff2d95, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.why-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 45, 149, 0.45);
  box-shadow: 0 12px 35px rgba(255, 45, 149, 0.18);
}

.why-card:hover::before {
  opacity: 1;
}

.why-icon-box {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 45, 149, 0.25), rgba(255, 107, 157, 0.15));
  border: 1px solid rgba(255, 45, 149, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #ff6b9d;
  margin-bottom: 1.4rem;
}

.why-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.6rem;
}

.why-card p {
  color: #bfa9b8;
  font-size: 0.88rem;
  line-height: 1.7;
  margin: 0;
}

.why-footer-cta {
  margin-top: 1rem;
}

/* 6. Reviews Section */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
  margin-bottom: 2.5rem;
}

.review-card {
  background: rgba(20, 16, 42, 0.7);
  border: 1px solid rgba(255, 45, 149, 0.18);
  border-radius: 20px;
  padding: 1.8rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
}

.review-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 45, 149, 0.4);
  box-shadow: 0 14px 40px rgba(255, 45, 149, 0.15);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.client-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff2d95, #c5a059);
  color: #fff;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  flex-shrink: 0;
}

.client-info h4 {
  font-size: 0.98rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.15rem;
}

.service-used-tag {
  font-size: 0.72rem;
  color: #ff6b9d;
  display: block;
}

.verified-badge {
  margin-right: auto;
  font-size: 0.7rem;
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  border: 1px solid rgba(16, 185, 129, 0.3);
  white-space: nowrap;
}

.review-stars {
  display: flex;
  gap: 0.2rem;
  color: #f59e0b;
  font-size: 0.85rem;
  margin-bottom: 0.8rem;
}

.review-text {
  font-size: 0.88rem;
  line-height: 1.75;
  color: #dfd0dc;
  margin: 0;
}

.review-summary-bar {
  background: linear-gradient(135deg, rgba(30, 20, 50, 0.8), rgba(15, 10, 30, 0.9));
  border: 1px solid rgba(255, 45, 149, 0.3);
  border-radius: 18px;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.summary-score {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.score-num {
  font-size: 2rem;
  font-weight: 900;
  color: #ff6b9d;
}

.score-stars {
  color: #f59e0b;
  font-size: 1.1rem;
}

.score-label {
  font-size: 0.9rem;
  color: #d1c4ce;
}

/* 7. FAQ Section */
.faq-accordion-wrap {
  max-width: 860px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(20, 16, 42, 0.7);
  border: 1px solid rgba(255, 45, 149, 0.18);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s;
}

.faq-item.active {
  border-color: rgba(255, 45, 149, 0.5);
  box-shadow: 0 8px 30px rgba(255, 45, 149, 0.15);
}

.faq-question-btn {
  width: 100%;
  background: none;
  border: none;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  cursor: pointer;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.25s;
}

.faq-question-btn:hover {
  color: #ff6b9d;
}

.faq-q-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.faq-q-title i {
  color: #ff6b9d;
  font-size: 1.1rem;
}

.faq-toggle-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 45, 149, 0.12);
  color: #ff6b9d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  flex-shrink: 0;
  transition: transform 0.25s;
}

.faq-item.active .faq-toggle-icon {
  background: #ff2d95;
  color: #fff;
}

.faq-answer-body {
  padding: 0 1.6rem 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: -0.2rem;
  padding-top: 1rem;
}

.faq-answer-body p {
  margin: 0;
  color: #dfd0dc;
  font-size: 0.92rem;
  line-height: 1.8;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.faq-help-box {
  background: linear-gradient(135deg, rgba(25, 18, 48, 0.85), rgba(15, 10, 32, 0.9));
  border: 1px solid rgba(255, 45, 149, 0.25);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.help-content {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex: 1 1 300px;
}

.help-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: rgba(255, 45, 149, 0.15);
  color: #ff6b9d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.help-content h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.3rem;
}

.help-content p {
  color: #bfa9b8;
  font-size: 0.85rem;
  margin: 0;
}

/* ==================================================== */
/* ریسپانسیو اختصاصی لندینگ پیج                           */
/* ==================================================== */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .portal-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hamburger-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-menu {
    position: fixed;
    top: 65px;
    left: 0;
    right: 0;
    background: rgba(8, 6, 20, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 1.5rem 20px;
    gap: 0.75rem;
    border-bottom: 1px solid rgba(255, 45, 149, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.35s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
  }

  .mobile-nav-actions {
    width: 100%;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .w-full {
    width: 100% !important;
  }

  .header-actions .action-btn {
    display: none;
  }

  .hero-title {
    font-size: 1.9rem;
    line-height: 1.4;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-btn {
    width: 100%;
    justify-content: center;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
  }

  .stat-divider {
    display: none;
  }

  .stat-item {
    flex: 1 1 40%;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .about-pillars {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 3.5rem 0;
  }

  .section-title {
    font-size: 1.6rem;
  }
}
</style>
