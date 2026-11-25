<template>
  <div class="landing-page">
    <!-- ==================================================== -->
    <!-- ۱. هدر یکپارچه و کپسولی بالای صفحه                   -->
    <!-- ==================================================== -->
    <PublicHeader />

    <div class="editorial-page-flow">
      <!-- ==================================================== -->
      <!-- ۲. بلوک ۱: هیرو شوکیس با پودیوم‌های ۳بعدی و زبانه برش‌خورده -->
      <!-- ==================================================== -->
      <section id="home" class="poster-hero-section">
        <div class="hero-master-wrapper">
          <div class="hero-card-master rose-master-block">
            <!-- ردیف بالایی: تایپوگرافی ادیتوریال و نشان -->
            <div class="hero-top-row">
              <div class="hero-titles">
                <span class="hero-kicker">S A L O N &nbsp; D E &nbsp; B E A U T É</span>
                <h1 class="hero-brand-serif editorial-serif">ROSE BEAUTY</h1>
                <p class="hero-parenthesis">( زیبایی فاخر، سلامت پوست و مو و آرامش بی‌مرز در سالن رز )</p>
              </div>
              <div class="hero-top-meta">
                <span class="hero-vip-pill"><i class="fas fa-award"></i> مرکز تخصصی VIP سالن رز</span>
                <div class="hero-lines-bars" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>

            <!-- بدنه اصلی هیرو: کارت متنی شناور + استیج پودیوم‌های سالن زیبایی -->
            <div class="hero-showcase-grid">
              <!-- باکس سفید/کرم شناور با دکمه فلش گوشه‌ای (Speech Card) -->
              <div class="hero-speech-card cream-inset-card">
                <p class="speech-desc">
                  تجربه‌ای متمایز از خدمات تخصصی کاشت ناخن، کراتین و احیای مو، فیشیال کلینیکی پوست و گریم عروس با متریال ارگانیک اروپایی، در محیطی کاملاً استریل و مجهز به نوبت‌دهی آنلاین بدون معطلی.
                </p>

                <div class="speech-cta-group">
                  <router-link :to="isLoggedIn ? '/reservations/new' : '/register'" class="speech-pill-btn btn-dark-rose">
                    <i class="fas fa-calendar-plus"></i> ثبت‌نام و رزرو نوبت
                  </router-link>
                  <a href="#portal" class="speech-pill-btn btn-light-rose" @click.prevent="scrollTo('#portal')">
                    <i class="fas fa-key"></i> ورود به پنل‌ها
                  </a>
                </div>

                <!-- آمارهای خلاصه درون کارت -->
                <div class="hero-mini-stats">
                  <div><strong>+۵۰۰</strong><span>مراجع وفادار</span></div>
                  <div><strong>۸</strong><span>لاین فعال</span></div>
                  <div><strong>۱۰۰٪</strong><span>استریل</span></div>
                </div>

                <!-- دکمه مربعی گوشه‌ای منطبق با تصویر مرجع -->
                <a href="#services" class="speech-corner-arrow corner-arrow-badge" @click.prevent="scrollTo('#services')" title="مشاهده سرویس‌ها">
                  <i class="fas fa-arrow-left"></i>
                </a>
              </div>

              <!-- استیج ۳ پودیوم استوانه‌ای سفید با عکس‌های واقعی لاین‌های زیبایی -->
              <div class="hero-podium-stage">
                <!-- پودیوم وسط (بلندتر): لاین مو و شینیون -->
                <div class="podium-column col-center">
                  <div class="podium-photo-frame">
                    <img src="/images/hair_styling.jpg" alt="لاین تخصصی مو و شینیون سالن رز" class="podium-salon-img" />
                    <span class="podium-caption">لاین مو</span>
                  </div>
                  <div class="pedestal-cylinder cyl-tall">
                    <div class="cyl-disc-top"></div>
                    <div class="cyl-shaft"></div>
                  </div>
                </div>

                <!-- پودیوم راست (ارتفاع متوسط): لاین ناخن -->
                <div class="podium-column col-side-1">
                  <div class="podium-photo-frame">
                    <img src="/images/line_nail.jpg" alt="لاین کاشت و طراحی ناخن سالن رز" class="podium-salon-img" />
                    <span class="podium-caption">لاین ناخن</span>
                  </div>
                  <div class="pedestal-cylinder cyl-mid">
                    <div class="cyl-disc-top"></div>
                    <div class="cyl-shaft"></div>
                  </div>
                </div>

                <!-- پودیوم چپ (کوتاه‌تر و پهن): لاین پوست و فیشیال -->
                <div class="podium-column col-side-2">
                  <div class="podium-photo-frame">
                    <img src="/images/line_skin.jpg" alt="لاین فیشیال و جوانسازی پوست سالن رز" class="podium-salon-img" />
                    <span class="podium-caption">لاین پوست</span>
                  </div>
                  <div class="pedestal-cylinder cyl-low">
                    <div class="cyl-disc-top"></div>
                    <div class="cyl-shaft"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- بریدگی پله‌ای پایین کارت هیرو برای قرارگیری دکمه NEXT PAGE -->
            <div class="hero-bottom-recess-gap"></div>
          </div>

          <!-- دکمه مستطیلی جداشده NEXT PAGE در بریدگی پایین هیرو -->
          <div class="hero-next-page-wrap">
            <a href="#lines-showcase" class="next-page-pill" @click.prevent="scrollTo('#lines-showcase')">
              <span>NEXT PAGE</span>
              <span class="next-farsi">مشاهده لاین‌ها</span>
              <i class="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- ==================================================== -->
      <!-- ۳. نوار کپسول‌های شناور میانی (Subnav Pills)         -->
      <!-- ==================================================== -->
      <nav class="subnav-pills-strip">
        <a href="#lines-showcase" class="strip-pill strip-pill-active" @click.prevent="scrollTo('#lines-showcase')">
          ALL IN ROSE SALON
        </a>
        <a href="#services" class="strip-pill strip-pill-cream" @click.prevent="scrollTo('#services')">
          سرویس‌ها و تعرفه‌ها
        </a>
        <a href="#why-us" class="strip-pill strip-pill-cream" @click.prevent="scrollTo('#why-us')">
          چرا رز بیوتی؟
        </a>
        <a href="#reviews" class="strip-pill strip-pill-cream" @click.prevent="scrollTo('#reviews')">
          رضایت مشتریان
        </a>
        <a href="#faq" class="strip-pill strip-pill-cream" @click.prevent="scrollTo('#faq')">
          سوالات متداول
        </a>
        <a href="#home" class="strip-pill-icon" @click.prevent="scrollTo('#home')" title="بالای صفحه">
          <i class="fas fa-home"></i>
        </a>
      </nav>

      <!-- ==================================================== -->
      <!-- ۴. بلوک ۲: شوکیس لاین‌ها با نوارهای افقی و کارت‌های فریم‌دار -->
      <!-- ==================================================== -->
      <section id="lines-showcase" class="poster-catalog-section">
        <div class="catalog-cutout-container">
          <!-- نوارهای مستطیلی افقی پس‌زمینه (دقیقاً مشابه شیپ دو تکه افقی در عکس مرجع) -->
          <div class="catalog-band band-top"></div>
          <div class="catalog-band band-bottom"></div>

          <div class="catalog-inner-grid">
            <!-- ستون اول: کارت عمودی ویژه عروس (مشابه I JO ROW YOU LIMITED EDITION) -->
            <div class="featured-vip-card cream-inset-card">
              <div class="feat-meta-top">
                <span class="feat-edition-tag">LIMITED EDITION</span>
                <span class="feat-percent">VIP <i class="fas fa-crown"></i></span>
              </div>
              <h3 class="feat-heading editorial-serif">BRIDAL & SPA</h3>

              <div class="feat-image-box">
                <img src="/images/line_makeup.jpg" alt="پکیج ویژه میکاپ عروس سالن رز" class="feat-salon-photo" />
              </div>

              <div class="feat-bottom-info">
                <h4 class="feat-title-main editorial-serif">ROSE BRIDAL</h4>
                <span class="feat-subtitle-fa">پکیج اختصاصی عروس و اسپا</span>
              </div>

              <router-link :to="getServiceBookingLink('پکیج کامل زیبایی و اسپا')" class="feat-arrow-btn corner-arrow-badge" title="رزرو پکیج عروس">
                <i class="fas fa-external-link-alt"></i>
              </router-link>
            </div>

            <!-- ستون دوم: گرید ۲×۲ لاین‌های ۴ گانه با عکس واقعی سالن زیبایی -->
            <div class="four-lines-grid">
              <!-- کارت ۱: لاین ناخن -->
              <div class="line-showcase-card cream-inset-card">
                <div class="line-photo-well">
                  <img src="/images/nail_art.jpg" alt="کاشت و طراحی ناخن" class="line-real-photo" />
                </div>
                <div class="line-card-caption">
                  <strong class="editorial-serif">NAIL ART</strong>
                  <span>کاشت، لمینت و طراحی ناخن</span>
                </div>
                <router-link :to="getServiceBookingLink('کاشت، لمینت و طراحی ناخن')" class="line-corner-btn corner-arrow-badge" title="رزرو ناخن">
                  <i class="fas fa-external-link-alt"></i>
                </router-link>
              </div>

              <!-- کارت ۲: لاین پوست -->
              <div class="line-showcase-card cream-inset-card">
                <div class="line-photo-well">
                  <img src="/images/line_skin.jpg" alt="فیشیال و پاکسازی پوست" class="line-real-photo" />
                </div>
                <div class="line-card-caption">
                  <strong class="editorial-serif">SKINCARE</strong>
                  <span>فیشیال و جوانسازی پوست</span>
                </div>
                <router-link :to="getServiceBookingLink('فیشیال و جوانسازی پوست')" class="line-corner-btn corner-arrow-badge" title="رزرو پوست">
                  <i class="fas fa-external-link-alt"></i>
                </router-link>
              </div>

              <!-- کارت ۳: لاین مو -->
              <div class="line-showcase-card cream-inset-card">
                <div class="line-photo-well">
                  <img src="/images/line_hair.jpg" alt="کراتین، رنگ و احیای مو" class="line-real-photo" />
                </div>
                <div class="line-card-caption">
                  <strong class="editorial-serif">HAIR CARE</strong>
                  <span>کراتین، احیا، رنگ و لایت</span>
                </div>
                <router-link :to="getServiceBookingLink('کراتین، احیا، رنگ و لایت')" class="line-corner-btn corner-arrow-badge" title="رزرو مو">
                  <i class="fas fa-external-link-alt"></i>
                </router-link>
              </div>

              <!-- کارت ۴: لاین میکاپ -->
              <div class="line-showcase-card cream-inset-card">
                <div class="line-photo-well">
                  <img src="/images/makeup_tools.jpg" alt="میکاپ و گریم حرفه‌ای" class="line-real-photo" />
                </div>
                <div class="line-card-caption">
                  <strong class="editorial-serif">MAKEUP</strong>
                  <span>میکاپ عروس و گریم حرفه‌ای</span>
                </div>
                <router-link :to="getServiceBookingLink('میکاپ عروس و گریم حرفه‌ای')" class="line-corner-btn corner-arrow-badge" title="رزرو میکاپ">
                  <i class="fas fa-external-link-alt"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================== -->
      <!-- ۵. بلوک ۳: استانداردها، کارت هم‌پوشاننده و دکمه ORDER  -->
      <!-- ==================================================== -->
      <section class="poster-specs-section">
        <div class="specs-master-block rose-master-block">
          <!-- شیپ مستطیلی کوچک جداشده گوشه بالا مشابه تصویر مرجع -->
          <div class="specs-top-accent-tab"></div>

          <div class="specs-layout-grid">
            <!-- کارت توضیحات و دکمه ORDER -->
            <div class="specs-left-column">
              <div class="specs-text-card cream-inset-card">
                <p>
                  کلیه خدمات تخصصی سالن رز بیوتی با مواد ۱۰۰٪ اورجینال اروپایی، بدون آمونیاک و فرمالدهید و با رعایت استریل بیمارستانی انجام می‌پذیرد. برای رزرو فوری نوبت بدون معطلی کلیک کنید.
                </p>
                <div class="specs-btn-row">
                  <router-link :to="isLoggedIn ? '/reservations/new' : '/register'" class="order-pill-cta">
                    ORDER ! رزرو نوبت
                  </router-link>
                  <router-link to="/about" class="specs-more-link">درباره استانداردهای ما ←</router-link>
                </div>
              </div>
              <div class="specs-stamp-pill">
                <i class="fas fa-certificate"></i>
                <span>ROSE LUXURY SALON • CERTIFIED HYGIENE</span>
              </div>
            </div>

            <!-- کارت هم‌پوشاننده عمودی (SPESIFIC SALON) که از بالا و پایین بیرون می‌زند -->
            <div class="specs-overlap-card cream-inset-card">
              <div class="overlap-side-arrow corner-arrow-badge">
                <i class="fas fa-arrow-right"></i>
              </div>
              <h3 class="overlap-title editorial-serif">SPESIFIC SALON</h3>
              <span class="overlap-sub">مشخصات کیفی سالن رز</span>

              <div class="overlap-metrics">
                <div class="om-row">
                  <div>
                    <strong class="editorial-serif">۱۰۰٪</strong>
                    <span>استریل کلینیکی و اتوکلاو</span>
                  </div>
                  <span class="om-icon"><i class="fas fa-pump-medical"></i></span>
                </div>
                <div class="om-row">
                  <div>
                    <strong class="editorial-serif">۲۴ ساعته</strong>
                    <span>ماندگاری تضمینی گریم و احیا</span>
                  </div>
                  <span class="om-icon"><i class="fas fa-hourglass-half"></i></span>
                </div>
                <div class="om-row">
                  <div>
                    <strong class="editorial-serif">۴.۹ / ۵</strong>
                    <span>بالاترین امتیاز رضایت مراجعین</span>
                  </div>
                  <span class="om-icon"><i class="fas fa-tint"></i></span>
                </div>
              </div>
            </div>
          </div>

          <!-- بریدگی وسط پایین بلوک ۳ -->
          <div class="specs-bottom-notch-label">
            <span class="notch-dot"><i class="fas fa-spa"></i></span>
            <div>
              <strong class="editorial-serif">Rose_Beauty</strong>
              <small>انتخاب بانوان خوش‌سلیقه</small>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================== -->
      <!-- ۶. بخش سرویس‌ها و تعرفه‌های کامل (#services)          -->
      <!-- ==================================================== -->
      <section id="services" class="editorial-section">
        <div class="section-header-block">
          <span class="editorial-tag"><i class="fas fa-magic"></i> لاین‌های تخصصی سالن</span>
          <h2 class="section-heading">سرویس‌ها و خدمات تخصصی سالن رز بیوتی</h2>
          <p class="section-sub">کلیه خدمات با متریال اورجینال اروپایی و توسط اساتید مجرب هر لاین ارائه می‌گردد</p>
        </div>

        <div class="services-editorial-grid">
          <div
            v-for="srv in servicesList"
            :key="srv.name"
            class="service-rect-card cream-inset-card"
            :class="{ 'vip-rect-card': srv.vip }"
          >
            <div class="srv-thumb-row">
              <div class="srv-thumb-frame">
                <img :src="srv.img" :alt="srv.name" class="srv-thumb-img" />
              </div>
              <div class="srv-meta-col">
                <span class="srv-line-badge" :class="{ 'vip-badge-bg': srv.vip }">{{ srv.line }}</span>
                <span class="srv-duration"><i class="far fa-clock"></i> {{ srv.duration }}</span>
              </div>
            </div>

            <h3 class="srv-title">{{ srv.name }}</h3>
            <p class="srv-desc">{{ srv.desc }}</p>

            <div class="srv-footer">
              <div class="srv-price-wrap">
                <small>{{ srv.priceLabel }}</small>
                <strong>{{ srv.price }}</strong>
              </div>
              <router-link v-if="!srv.phone" :to="getServiceBookingLink(srv.name)" class="corner-arrow-badge srv-book-sq" title="رزرو نوبت">
                <i class="fas fa-calendar-check"></i>
              </router-link>
              <a v-else href="tel:09123456789" class="corner-arrow-badge srv-book-sq" title="تماس VIP">
                <i class="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================== -->
      <!-- ۷. بخش پورتال ورود به حساب‌های کاربری (#portal)       -->
      <!-- ==================================================== -->
      <section id="portal" class="editorial-section">
        <div class="rose-master-block portal-master-container">
          <div class="section-header-block on-rose">
            <span class="editorial-tag tag-light"><i class="fas fa-door-open"></i> سامانه نوبت‌دهی و مدیریت</span>
            <h2 class="section-heading text-white">ورود به پنل‌های کاربری رز بیوتی</h2>
            <p class="section-sub text-rose-soft">سامانه یکپارچه برای مدیریت سالن توسط ادمین‌ها و پیگیری نوبت‌ها توسط مراجعین</p>
          </div>

          <div class="portal-editorial-grid">
            <!-- کارت ادمین -->
            <div class="portal-rect-card cream-inset-card">
              <div class="portal-top-row">
                <span class="portal-sq-icon"><i class="fas fa-user-shield"></i></span>
                <span class="badge badge-danger">دسترسی پرسنل و مدیران</span>
              </div>
              <h3>پنل مدیریت سالن (ادمین)</h3>
              <p>مدیریت نوبت‌ها، مشاهده گزارش درآمد، تنظیم ساعات کاری لاین‌ها و بررسی سوابق مشتریان.</p>
              <ul class="portal-checklist">
                <li><i class="fas fa-check-circle"></i> تایید، لغو و تغییر وضعیت نوبت‌ها</li>
                <li><i class="fas fa-check-circle"></i> آمار لحظه‌ای درآمد و شلوغ‌ترین لاین‌ها</li>
                <li><i class="fas fa-check-circle"></i> ثبت شیفت‌ها و ساعات کاری جدید</li>
              </ul>
              <div class="portal-card-actions">
                <router-link to="/login" class="btn btn-primary w-full-btn">
                  <i class="fas fa-sign-in-alt"></i> ورود به پنل مدیریت
                </router-link>
                <small class="portal-demo-hint">اکانت تستی: <code>admin</code> / رمز <code>admin123</code></small>
              </div>
            </div>

            <!-- کارت مشتریان -->
            <div class="portal-rect-card cream-inset-card">
              <div class="portal-top-row">
                <span class="portal-sq-icon"><i class="fas fa-user-check"></i></span>
                <span class="badge badge-success">دسترسی مراجعین محترم</span>
              </div>
              <h3>ورود مشتریان دارای حساب</h3>
              <p>مشاهده وضعیت نوبت‌های ثبت‌شده، پیگیری زمان رزرو و مدیریت اطلاعات تماس حساب کاربری.</p>
              <ul class="portal-checklist">
                <li><i class="fas fa-check-circle"></i> مشاهده وضعیت (تایید سبز / لغو قرمز / انتظار خردلی)</li>
                <li><i class="fas fa-check-circle"></i> پیگیری فاکتور و زمان رزرو شده</li>
                <li><i class="fas fa-check-circle"></i> ویرایش اطلاعات تماس و یادداشت‌ها</li>
              </ul>
              <div class="portal-card-actions">
                <router-link to="/login" class="btn btn-success w-full-btn">
                  <i class="fas fa-unlock-alt"></i> ورود به حساب مشتری
                </router-link>
                <small class="portal-demo-hint">دسترسی سریع با سشن امن</small>
              </div>
            </div>

            <!-- کارت ثبت‌نام -->
            <div class="portal-rect-card cream-inset-card">
              <div class="portal-top-row">
                <span class="portal-sq-icon"><i class="fas fa-user-plus"></i></span>
                <span class="badge badge-warning">مراجعین جدید</span>
              </div>
              <h3>عضویت آنلاین و ثبت نوبت</h3>
              <p>برای اولین بار به سالن رز تشریف می‌آورید؟ در کمتر از ۲ دقیقه ثبت‌نام کنید و نوبت بگیرید.</p>
              <ul class="portal-checklist">
                <li><i class="fas fa-check-circle"></i> رزرو آنلاین بدون معطلی و تماس تلفنی</li>
                <li><i class="fas fa-check-circle"></i> انتخاب لاین، خدمت و اسلات زمانی آزاد</li>
                <li><i class="fas fa-check-circle"></i> بهره‌مندی از تخفیف‌های ویژه مشتریان جدید</li>
              </ul>
              <div class="portal-card-actions">
                <router-link to="/register" class="btn btn-warning w-full-btn">
                  <i class="fas fa-edit"></i> فرم ثبت‌نام و رزرو نوبت
                </router-link>
                <small class="portal-demo-hint">ثبت‌نام رایگان بدون پیش‌پرداخت</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================== -->
      <!-- ۸. بخش چرا رز بیوتی؟ (#why-us)                       -->
      <!-- ==================================================== -->
      <section id="why-us" class="editorial-section">
        <div class="section-header-block">
          <span class="editorial-tag"><i class="fas fa-gem"></i> چرا سالن رز بیوتی؟</span>
          <h2 class="section-heading">دلایل تمایز و درخشش سالن تخصصی رز بیوتی</h2>
          <p class="section-sub">ارائه خدمات در محیطی کاملاً آرام، بهداشتی و با بالاترین استانداردهای مراقبتی</p>
        </div>

        <div class="why-editorial-grid">
          <div class="why-rect-card cream-inset-card" v-for="(item, idx) in whyUsList" :key="idx">
            <div class="why-top-bar">
              <span class="why-sq-icon"><i :class="item.icon"></i></span>
              <span class="why-index-num editorial-serif">0{{ idx + 1 }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>

        <div class="text-center mt-4">
          <router-link to="/about" class="btn btn-primary">
            <i class="fas fa-book-open"></i> مطالعه داستان کامل سالن، مجوزها و امکانات VIP در صفحه درباره ما
          </router-link>
        </div>
      </section>

      <!-- ==================================================== -->
      <!-- ۹. بخش رضایت و نظرات مراجعین (#reviews)              -->
      <!-- ==================================================== -->
      <section id="reviews" class="editorial-section">
        <div class="rose-master-block reviews-master-block">
          <div class="section-header-block on-rose">
            <span class="editorial-tag tag-light"><i class="fas fa-star"></i> تجربیات واقعی</span>
            <h2 class="section-heading text-white">رضایت و نظرات بانوان خوش‌سلیقه</h2>
            <p class="section-sub text-rose-soft">نظرات ثبت‌شده مراجعین عزیزی که زیبایی و سلامت خود را به رز بیوتی سپرده‌اند</p>
          </div>

          <div class="reviews-editorial-grid">
            <div class="review-rect-card cream-inset-card" v-for="rev in reviewsList" :key="rev.name">
              <div class="rev-head">
                <div class="rev-avatar">{{ rev.initials }}</div>
                <div>
                  <h4>{{ rev.name }}</h4>
                  <small>{{ rev.service }}</small>
                </div>
                <span class="badge badge-success rev-verified"><i class="fas fa-check-circle"></i> تایید شده</span>
              </div>
              <div class="rev-stars">
                <i class="fas fa-star" v-for="n in 5" :key="n"></i>
              </div>
              <p class="rev-quote">{{ rev.quote }}</p>
            </div>
          </div>

          <div class="reviews-score-bar cream-inset-card">
            <div class="score-info">
              <strong class="score-big editorial-serif">۴.۹ / ۵</strong>
              <span class="score-stars-row"><i class="fas fa-star" v-for="n in 5" :key="n"></i></span>
              <span>میانگین رضایت مراجعین بر اساس بیش از ۵۰۰ نظر ثبت‌شده</span>
            </div>
            <router-link to="/register" class="btn btn-primary">
              <i class="fas fa-calendar-plus"></i> تجربه درخشش در رز بیوتی
            </router-link>
          </div>
        </div>
      </section>

      <!-- ==================================================== -->
      <!-- ۱۰. بخش سوالات متداول مشتریان (#faq)                 -->
      <!-- ==================================================== -->
      <section id="faq" class="editorial-section">
        <div class="section-header-block">
          <span class="editorial-tag"><i class="fas fa-question-circle"></i> پرسش‌های پرتکرار</span>
          <h2 class="section-heading">سوالات متداول مراجعین گرامی</h2>
          <p class="section-sub">پاسخ به پرتکرارترین سوالات شما درباره رزرو نوبت، متریال و خدمات سالن</p>
        </div>

        <div class="faq-editorial-list">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="faq-rect-item cream-inset-card"
            :class="{ 'is-open': activeFaq === index }"
          >
            <button class="faq-trigger-btn" @click="toggleFaq(index)" :aria-expanded="activeFaq === index">
              <span class="faq-q-text">
                <i class="far fa-question-circle"></i> {{ item.q }}
              </span>
              <span class="corner-arrow-badge faq-sq-toggle">
                <i :class="activeFaq === index ? 'fas fa-minus' : 'fas fa-plus'"></i>
              </span>
            </button>
            <div class="faq-answer-panel" v-if="activeFaq === index">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>

        <!-- کارت هدایت به صفحه تماس -->
        <div class="faq-contact-cta rose-master-block">
          <div class="cta-left">
            <span class="cta-sq-icon"><i class="fas fa-comments"></i></span>
            <div>
              <h3>سوالی دارید یا مایل به مشاوره تلفنی هستید؟</h3>
              <p>نشانی دقیق سالن در مشهد، شماره‌های تماس مستقیم و فرم ارسال پیام در صفحه تماس با ما در دسترس است.</p>
            </div>
          </div>
          <router-link to="/contact" class="btn btn-secondary">
            <i class="fas fa-phone-alt"></i> رفتن به صفحه تماس با ما
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PublicHeader from '../components/PublicHeader.vue'
import { auth } from '../auth.js'

export default {
  name: 'Landing',
  components: {
    PublicHeader
  },
  data() {
    return {
      auth,
      activeFaq: 0,
      servicesList: [
        {
          line: 'لاین ناخن',
          duration: '۶۰ تا ۹۰ دقیقه',
          name: 'کاشت، لمینت و طراحی ناخن',
          desc: 'کاشت ژل، پلی‌ژل، لمینت روسی، مانیکور و پدیکور VIP، طراحی ژورنالی و اسپا با مواد بدون آسیب به صدف ناخن.',
          priceLabel: 'شروع قیمت از:',
          price: '۲۵۰,۰۰۰ تومان',
          img: '/images/nail_art.jpg',
          vip: false,
          phone: false
        },
        {
          line: 'لاین مو',
          duration: '۷۵ تا ۹۰ دقیقه',
          name: 'کراتین، احیا، رنگ و لایت',
          desc: 'صافی و احیای ۱۰۰٪ ابریشمی، نانوبوتاکس، پروتئین‌تراپی، آمبره، بالیاژ و رنگساژهای ژورنالی بدون فرمالدهید.',
          priceLabel: 'شروع قیمت از:',
          price: '۱,۵۰۰,۰۰۰ تومان',
          img: '/images/line_hair.jpg',
          vip: false,
          phone: false
        },
        {
          line: 'لاین پوست',
          duration: '۳۰ تا ۴۵ دقیقه',
          name: 'فیشیال و جوانسازی پوست',
          desc: 'پاکسازی عمقی، هیدروفیشیال، درماپیلینگ، اسیدتراپی، مزووایت و آبرسانی تخصصی با متریال کره‌ای و فرانسوی.',
          priceLabel: 'شروع قیمت از:',
          price: '۱۸۰,۰۰۰ تومان',
          img: '/images/line_skin.jpg',
          vip: false,
          phone: false
        },
        {
          line: 'لاین میکاپ',
          duration: '۶۰ دقیقه',
          name: 'میکاپ عروس و گریم حرفه‌ای',
          desc: 'میکاپ‌های اروپایی، لایت و اسموکی، کانتورینگ سینمایی چهره و شینیون‌های خطی با ماندگاری ۲۴ ساعته تضمینی.',
          priceLabel: 'شروع قیمت از:',
          price: '۵,۰۰۰,۰۰۰ تومان',
          img: '/images/line_makeup.jpg',
          vip: false,
          phone: false
        },
        {
          line: 'ابرو و مژه',
          duration: '۳۰ تا ۶۰ دقیقه',
          name: 'اصلاح ابرو، لیفت و لمینت',
          desc: 'اصلاح و قرینه‌سازی تخصصی ابرو، لیفت و بوتاکس مژه و ابرو با مواد ارگانیک ایتالیایی بدون ریزش.',
          priceLabel: 'شروع قیمت از:',
          price: '۱۸۰,۰۰۰ تومان',
          img: '/images/makeup_tools.jpg',
          vip: false,
          phone: false
        },
        {
          line: 'پکیج VIP',
          duration: 'روز اختصاصی',
          name: 'پکیج کامل زیبایی و اسپا',
          desc: 'یک روز رویایی شامل فیشیال، رنگ مو، مانیکور، پدیکور و گریم همراه با پذیرایی ویژه و اتاق اختصاصی.',
          priceLabel: 'تعرفه تخفیف‌دار:',
          price: 'مشاوره اختصاصی',
          img: '/images/skincare_vip.jpg',
          vip: true,
          phone: true
        }
      ],
      whyUsList: [
        {
          icon: 'fas fa-pump-medical',
          title: 'استریل ۱۰۰٪ کلینیکی',
          desc: 'استفاده از اتوکلاو پزشکی بیمارستانی و پک‌های یکبار مصرف پلمپ‌شده برای تک‌تک مراجعین گرامی.'
        },
        {
          icon: 'fas fa-shield-virus',
          title: 'متریال ارگانیک و بدون آسیب',
          desc: 'کلیه مواد مو، پوست و ناخن فاقد آمونیاک و فرمالدهید بوده و دارای تاییدیه اصالت از برترین برندهای اروپا هستند.'
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'اساتید دارای مدارک بین‌المللی',
          desc: 'کادر سالن دوره‌دیده در برترین آکادمی‌های تخصصی جهان با تسلط کامل بر جدیدترین متدهای ژورنالی.'
        },
        {
          icon: 'fas fa-stopwatch',
          title: 'نوبت‌دهی منظم بدون معطلی',
          desc: 'احترام کامل به زمان باارزش شما؛ سامانه هوشمند رزرو زمان‌بندی دقیق و بدون اتلاف وقت را تضمین می‌کند.'
        },
        {
          icon: 'fas fa-couch',
          title: 'اتاق‌های مجزا و پذیرایی VIP',
          desc: 'محیطی آرامش‌بخش، مجهز به تهویه مطبوع، موسیقی دل‌نشین و پذیرایی اختصاصی برای تجربه‌ای لوکس.'
        },
        {
          icon: 'fas fa-medal',
          title: 'ضمانت رضایت و مشاوره پس از خدمت',
          desc: 'پشتیبانی کامل پس از ارائه خدمات، پیگیری رضایت شما و ارائه روتین‌های مراقبت از پوست و مو در منزل.'
        }
      ],
      reviewsList: [
        {
          initials: 'س‌م',
          name: 'سارا محمدی',
          service: 'کراتین و احیای ابریشمی مو',
          quote: '«موهای من بر اثر دکلره کاملاً دمیج شده بود. اساتید لاین مو با پروتئین‌تراپی موهام رو کاملاً زنده کردن؛ الان بعد از ۳ ماه هنوز مثل ابریشم نرم و صافه.»'
        },
        {
          initials: 'م‌ر',
          name: 'مهسا راد',
          service: 'کاشت و لمینت روسی ناخن',
          quote: '«من به مواد کاشت حساسیت داشتم اما سالن رز از متریال ارگانیک و ضدقارچ استفاده کردن. پک سوهان رو جلوی خودم از بسته استریل باز کردن که خیالم رو راحت کرد.»'
        },
        {
          initials: 'ن‌ح',
          name: 'نیلوفر حسینی',
          service: 'پکیج VIP میکاپ و شینیون عروس',
          quote: '«میکاپم در عین حال که چهره خودم رو تغییر نداد، بسیار چشم‌نواز و لایت بود. تا ۴ صبح بدون کوچک‌ترین تغییری ماندگاری داشت. واقعاً بی‌نظیر بود.»'
        },
        {
          initials: 'ف‌ز',
          name: 'فاطمه زارعی',
          service: 'فیشیال و جوانسازی پوست',
          quote: '«محیط اتاق فیشیال با ماساژ و دستگاه‌های هیدروفیشیال حس یک اسپای واقعی رو داد. پوستم شفافیت فوق‌العاده‌ای پیدا کرد و روتین پیشنهادی عالی بود.»'
        }
      ],
      faqs: [
        {
          q: 'چگونه می‌توانم در سالن زیبایی رز بیوتی نوبت آنلاین رزرو کنم؟',
          a: 'در کمتر از ۲ دقیقه با کلیک بر روی دکمه «ثبت‌نام و رزرو نوبت» یا انتخاب سرویس مورد نظر، لاین و ساعت آزاد دلخواه خود را ثبت کنید. نیازی به تماس تلفنی یا پیش‌پرداخت نیست.'
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
  methods: {
    scrollTo(targetId) {
      const el = document.querySelector(targetId)
      if (el) {
        const yOffset = -85
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
    toggleFaq(index) {
      this.activeFaq = this.activeFaq === index ? null : index
    }
  }
}
</script>

<style scoped>
.landing-page {
  direction: rtl;
  padding-top: 86px;
  padding-bottom: 1rem;
}

.editorial-page-flow {
  width: 100%;
  padding: 0 clamp(1rem, 2.5vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* ========================================================= */
/* ۱. بلوک ۱: هیرو شوکیس با زبانه برش‌خورده و ۳ پودیوم سالن */
/* ========================================================= */
.hero-master-wrapper {
  position: relative;
  padding-bottom: 24px;
}

.hero-card-master {
  padding: 2.4rem clamp(1.2rem, 3vw, 2.8rem) 2.6rem;
  border-radius: 30px;
}

.hero-top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.hero-kicker {
  display: block;
  font-size: 0.85rem;
  letter-spacing: 5px;
  color: #f8b4cf;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.hero-brand-serif {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 2px;
  line-height: 1.05;
  margin: 0;
  text-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.hero-parenthesis {
  color: #fce2ec;
  font-size: 0.98rem;
  margin-top: 0.5rem;
}

.hero-top-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hero-vip-pill {
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff8fb;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.hero-lines-bars {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.hero-lines-bars span {
  width: 26px;
  height: 2.5px;
  background: #fff8fb;
  border-radius: 2px;
}

.hero-showcase-grid {
  display: grid;
  grid-template-columns: 1.15fr 1.25fr;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* کارت متنی کرم-صورتی (Speech Card) */
.hero-speech-card {
  padding: 1.8rem 1.6rem 2.2rem;
  position: relative;
}

.speech-desc {
  font-size: 0.96rem;
  line-height: 1.85;
  color: #330d1e;
  margin-bottom: 1.3rem;
}

.speech-cta-group {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 1.3rem;
}

.speech-pill-btn {
  padding: 0.55rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.86rem;
  font-weight: 800;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all 0.22s ease;
}
.btn-dark-rose {
  background: #561935;
  color: #ffffff;
  box-shadow: 0 6px 16px rgba(86, 25, 53, 0.28);
}
.btn-dark-rose:hover {
  background: #d84782;
  transform: translateY(-2px);
}
.btn-light-rose {
  background: #ffffff;
  color: #561935;
  border: 1.5px solid #d9bcc9;
}
.btn-light-rose:hover {
  background: #f9dce8;
}

.hero-mini-stats {
  display: flex;
  gap: 1.5rem;
  padding-top: 0.9rem;
  border-top: 1px dashed #dfc4d0;
}
.hero-mini-stats div {
  display: flex;
  flex-direction: column;
}
.hero-mini-stats strong {
  font-size: 1.2rem;
  font-weight: 900;
  color: #561935;
  line-height: 1.2;
}
.hero-mini-stats span {
  font-size: 0.75rem;
  color: #7a5163;
}

.speech-corner-arrow {
  position: absolute;
  bottom: 14px;
  left: -14px;
}

/* استیج ۳ پودیوم استوانه‌ای سفید با عکس‌های واقعی سالن زیبایی */
.hero-podium-stage {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  min-height: 290px;
  padding-top: 1rem;
}

.podium-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.col-side-1 { order: 1; margin-bottom: 12px; z-index: 2; }
.col-center { order: 2; margin-bottom: 32px; z-index: 1; }
.col-side-2 { order: 3; margin-bottom: 0; z-index: 3; }

.podium-photo-frame {
  position: relative;
  z-index: 3;
  margin-bottom: -10px;
  transition: transform 0.3s ease;
}
.podium-column:hover .podium-photo-frame {
  transform: translateY(-8px);
}

.podium-salon-img {
  width: 118px;
  height: 148px;
  object-fit: cover;
  border-radius: 16px;
  border: 3px solid #ffffff;
  box-shadow: 0 14px 28px rgba(32, 6, 18, 0.35);
  display: block;
}
.col-center .podium-salon-img {
  width: 132px;
  height: 165px;
}

.podium-caption {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(86, 25, 53, 0.9);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
}

.pedestal-cylinder {
  width: 145px;
  box-shadow: 0 18px 34px rgba(24, 4, 14, 0.35);
  border-radius: 0 0 18px 18px;
}
.col-center .pedestal-cylinder { width: 158px; }
.col-side-1 .pedestal-cylinder { width: 138px; }

.cyl-disc-top {
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffffff 0%, #f5ebef 100%);
  border: 1px solid #ffffff;
}
.cyl-shaft {
  margin-top: -12px;
  background: linear-gradient(180deg, #efe2e7 0%, #dcc7d1 100%);
  border-radius: 0 0 18px 18px;
}
.cyl-tall .cyl-shaft { height: 76px; }
.cyl-mid .cyl-shaft { height: 54px; }
.cyl-low .cyl-shaft { height: 36px; }

/* دکمه جداشده NEXT PAGE در بریدگی پایین هیرو */
.hero-next-page-wrap {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: -22px;
  padding-left: 1.5rem;
  z-index: 5;
}

.next-page-pill {
  background: linear-gradient(135deg, #561935, #3d0e24);
  color: #ffffff;
  padding: 0.65rem 1.8rem;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.92rem;
  letter-spacing: 1px;
  box-shadow: 0 10px 26px rgba(61, 14, 36, 0.3);
  border: 2px solid var(--linen-bg);
  transition: all 0.25s ease;
}
.next-page-pill:hover {
  background: linear-gradient(135deg, #d84782, #b8326a);
  transform: translateY(-2px);
}
.next-farsi {
  font-size: 0.8rem;
  color: #f9dce8;
  font-weight: 600;
  letter-spacing: 0;
}

/* ========================================================= */
/* ۲. نوار کپسول‌های شناور میانی                             */
/* ========================================================= */
.subnav-pills-strip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.strip-pill {
  padding: 0.55rem 1.35rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.22s ease;
}

.strip-pill-active {
  background: #561935;
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(86, 25, 53, 0.26);
}
.strip-pill-active:hover {
  background: #d84782;
}

.strip-pill-cream {
  background: #faf3f6;
  color: #350e20;
  border: 1.5px solid #dec5d0;
  box-shadow: 0 4px 12px rgba(62, 15, 37, 0.08);
}
.strip-pill-cream:hover {
  background: #ffffff;
  border-color: #561935;
  transform: translateY(-2px);
}

.strip-pill-icon {
  margin-right: auto;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #561935;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 6px 16px rgba(86, 25, 53, 0.24);
  transition: all 0.22s;
}
.strip-pill-icon:hover {
  background: #d84782;
}

/* ========================================================= */
/* ۳. بلوک ۲: کاتالوگ لاین‌ها با نوارهای افقی برش‌خورده      */
/* ========================================================= */
.catalog-cutout-container {
  position: relative;
  padding: 1.8rem clamp(1rem, 2.5vw, 2.2rem);
}

/* دو نوار افقی رز با شکاف میانی شبیه تصویر مرجع */
.catalog-band {
  position: absolute;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #5d1c3a 0%, #441229 100%);
  border-radius: 28px;
  box-shadow: 0 16px 38px rgba(61, 14, 36, 0.24);
  z-index: 0;
}
.band-top {
  top: 0;
  height: calc(50% - 10px);
}
.band-bottom {
  bottom: 0;
  height: calc(50% - 10px);
}

.catalog-inner-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1.65fr;
  gap: 1.6rem;
  align-items: stretch;
}

.featured-vip-card {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.feat-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  font-weight: 800;
  color: #7a5163;
  letter-spacing: 1px;
}

.feat-heading {
  font-size: 1.45rem;
  font-weight: 900;
  color: #350e20;
  margin: 0.35rem 0 0.85rem;
}

.feat-image-box {
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #561935;
  background: #561935;
  padding: 6px;
  min-height: 220px;
}

.feat-salon-photo {
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  border-radius: 11px;
  display: block;
}

.feat-bottom-info {
  margin-top: 1rem;
  padding-left: 42px;
}
.feat-title-main {
  font-size: 1.2rem;
  font-weight: 900;
  color: #350e20;
  margin: 0;
}
.feat-subtitle-fa {
  font-size: 0.82rem;
  color: #7a5163;
  font-weight: 600;
}

.feat-arrow-btn {
  position: absolute;
  bottom: 14px;
  left: 14px;
}

/* گرید ۲×۲ لاین‌های زیبایی */
.four-lines-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.3rem;
}

.line-showcase-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.25s ease;
}
.line-showcase-card:hover {
  transform: translateY(-4px);
}

.line-photo-well {
  background: #561935;
  padding: 7px;
  border-radius: 16px;
  height: 155px;
}

.line-real-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 11px;
  display: block;
}

.line-card-caption {
  margin-top: 0.8rem;
  padding-left: 38px;
}
.line-card-caption strong {
  display: block;
  font-size: 1rem;
  font-weight: 900;
  color: #350e20;
  letter-spacing: 0.5px;
}
.line-card-caption span {
  font-size: 0.8rem;
  color: #7a5163;
  font-weight: 600;
}

.line-corner-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

/* ========================================================= */
/* ۴. بلوک ۳: استانداردها، کارت هم‌پوشاننده و دکمه ORDER     */
/* ========================================================= */
.poster-specs-section {
  padding-top: 1.2rem;
  padding-bottom: 1.8rem;
}

.specs-master-block {
  padding: 2.2rem clamp(1.2rem, 3vw, 2.6rem) 3.2rem;
  position: relative;
}

.specs-top-accent-tab {
  position: absolute;
  top: -12px;
  left: 36px;
  width: 110px;
  height: 20px;
  background: #d84782;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(216, 71, 130, 0.35);
}

.specs-layout-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.specs-left-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.specs-text-card {
  padding: 1.6rem;
}
.specs-text-card p {
  font-size: 0.94rem;
  line-height: 1.8;
  color: #350e20;
  margin-bottom: 1.1rem;
}

.specs-btn-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.order-pill-cta {
  background: #561935;
  color: #ffffff;
  padding: 0.55rem 1.8rem;
  border-radius: 9999px;
  font-weight: 800;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(86, 25, 53, 0.3);
  transition: all 0.22s;
}
.order-pill-cta:hover {
  background: #d84782;
  transform: translateY(-2px);
}

.specs-more-link {
  color: #561935;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
}
.specs-more-link:hover {
  color: #d84782;
}

.specs-stamp-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.14);
  color: #ffe3ef;
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  width: fit-content;
}

/* کارت هم‌پوشاننده عمودی SPESIFIC SALON */
.specs-overlap-card {
  padding: 1.8rem 1.5rem;
  margin-top: -3.2rem;
  margin-bottom: -1.6rem;
  position: relative;
  box-shadow: 0 20px 44px rgba(32, 6, 18, 0.28);
}

.overlap-side-arrow {
  position: absolute;
  right: -17px;
  bottom: 24px;
}

.overlap-title {
  font-size: 1.35rem;
  font-weight: 900;
  color: #350e20;
  margin: 0;
}
.overlap-sub {
  display: block;
  font-size: 0.78rem;
  color: #7a5163;
  margin-bottom: 1.2rem;
}

.overlap-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.om-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #ead5df;
}
.om-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.om-row strong {
  display: block;
  font-size: 1.05rem;
  font-weight: 900;
  color: #561935;
}
.om-row span {
  font-size: 0.78rem;
  color: #6d4557;
}
.om-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #f0e0e7;
  color: #561935;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.specs-bottom-notch-label {
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  background: #faf3f6;
  border: 2px solid #561935;
  border-radius: 16px;
  padding: 0.45rem 1.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: #350e20;
  box-shadow: 0 10px 24px rgba(61, 14, 36, 0.22);
  white-space: nowrap;
}
.notch-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #561935;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
}
.specs-bottom-notch-label strong {
  display: block;
  font-size: 0.85rem;
  line-height: 1.1;
}
.specs-bottom-notch-label small {
  font-size: 0.68rem;
  color: #7a5163;
}

/* ========================================================= */
/* ۵. سکشن‌های کامل (سرویس‌ها، پورتال، چرا ما، رضایت، FAQ)  */
/* ========================================================= */
.editorial-section {
  padding: 1rem 0;
}

.section-header-block {
  text-align: center;
  margin-bottom: 2rem;
}

.editorial-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #561935;
  color: #fff8fb;
  padding: 0.35rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

.tag-light {
  background: #faf3f6;
  color: #561935;
}

.section-heading {
  font-size: 1.85rem;
  font-weight: 900;
  color: #350e20;
  margin-bottom: 0.45rem;
  justify-content: center;
}

.section-sub {
  color: #6d4557;
  font-size: 0.95rem;
  max-width: 650px;
  margin: 0 auto;
}

.text-white { color: #ffffff !important; }
.text-rose-soft { color: #f8dce8 !important; }

/* سرویس‌ها باکسی */
.services-editorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.service-rect-card {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.25s ease;
}
.service-rect-card:hover {
  transform: translateY(-5px);
}
.vip-rect-card {
  border-color: #d84782;
  background: linear-gradient(145deg, #fff5f8, #faf3f6);
}

.srv-thumb-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.srv-thumb-frame {
  width: 78px;
  height: 78px;
  border-radius: 14px;
  background: #561935;
  padding: 4px;
  flex-shrink: 0;
}
.srv-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.srv-meta-col {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.srv-line-badge {
  background: #f0e0e7;
  color: #561935;
  font-size: 0.76rem;
  font-weight: 800;
  padding: 0.22rem 0.7rem;
  border-radius: 8px;
  width: fit-content;
}
.vip-badge-bg {
  background: #d84782;
  color: #fff;
}
.srv-duration {
  font-size: 0.8rem;
  color: #7a5163;
}

.srv-title {
  font-size: 1.12rem;
  font-weight: 800;
  color: #350e20;
  margin-bottom: 0.45rem;
}
.srv-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: #58283e;
  margin-bottom: 1.2rem;
  flex: 1;
}

.srv-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.85rem;
  border-top: 1px dashed #dec5d0;
}
.srv-price-wrap small {
  display: block;
  font-size: 0.74rem;
  color: #7a5163;
}
.srv-price-wrap strong {
  font-size: 1.05rem;
  font-weight: 900;
  color: #561935;
}
.srv-book-sq {
  width: 40px;
  height: 40px;
  font-size: 1rem;
}

/* پورتال ورود */
.portal-master-container,
.reviews-master-block {
  padding: 2.6rem clamp(1.2rem, 3vw, 2.5rem);
}

.portal-editorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  position: relative;
  z-index: 2;
}

.portal-rect-card {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
}
.portal-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.portal-sq-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #561935;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.portal-rect-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #350e20;
  margin-bottom: 0.5rem;
}
.portal-rect-card p {
  font-size: 0.86rem;
  color: #58283e;
  line-height: 1.65;
  margin-bottom: 1rem;
}

.portal-checklist {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.4rem;
  flex: 1;
}
.portal-checklist li {
  font-size: 0.83rem;
  color: #4f1d34;
  display: flex;
  align-items: center;
  gap: 0.45rem;
}
.portal-checklist li i {
  color: #059669;
}

.w-full-btn {
  width: 100%;
  margin: 0 !important;
}
.portal-demo-hint {
  display: block;
  text-align: center;
  margin-top: 0.65rem;
  font-size: 0.76rem;
  color: #7a5163;
}
.portal-demo-hint code {
  background: #f0e0e7;
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  color: #561935;
  font-weight: 700;
}

/* چرا رز بیوتی */
.why-editorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.4rem;
}
.why-rect-card {
  padding: 1.6rem;
}
.why-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.why-sq-icon {
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
.why-index-num {
  font-size: 1.5rem;
  font-weight: 900;
  color: #dfc4d0;
}
.why-rect-card h3 {
  font-size: 1.08rem;
  font-weight: 800;
  color: #350e20;
  margin-bottom: 0.45rem;
}
.why-rect-card p {
  font-size: 0.86rem;
  color: #58283e;
  line-height: 1.7;
  margin: 0;
}

/* رضایت مشتریان */
.reviews-editorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1.4rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}
.review-rect-card {
  padding: 1.5rem;
}
.rev-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.8rem;
}
.rev-avatar {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #561935;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  flex-shrink: 0;
}
.rev-head h4 {
  font-size: 0.96rem;
  font-weight: 800;
  margin: 0;
}
.rev-head small {
  font-size: 0.74rem;
  color: #d84782;
  font-weight: 600;
}
.rev-verified {
  margin-right: auto;
  font-size: 0.68rem !important;
}
.rev-stars {
  color: #d97706;
  font-size: 0.85rem;
  margin-bottom: 0.6rem;
  display: flex;
  gap: 0.2rem;
}
.rev-quote {
  font-size: 0.87rem;
  color: #4f1d34;
  line-height: 1.75;
  margin: 0;
}

.reviews-score-bar {
  padding: 1.25rem 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}
.score-info {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
}
.score-big {
  font-size: 1.7rem;
  font-weight: 900;
  color: #561935;
}
.score-stars-row {
  color: #d97706;
}

/* سوالات متداول */
.faq-editorial-list {
  max-width: 960px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.faq-rect-item {
  overflow: hidden;
}
.faq-rect-item.is-open {
  border-color: #d84782;
}
.faq-trigger-btn {
  width: 100%;
  background: none;
  border: none;
  padding: 1.15rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  text-align: right;
  font-family: inherit;
  font-size: 0.98rem;
  font-weight: 800;
  color: #350e20;
}
.faq-q-text {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}
.faq-q-text i {
  color: #d84782;
}
.faq-answer-panel {
  padding: 0 1.4rem 1.25rem;
  border-top: 1px solid #ead5df;
  padding-top: 0.9rem;
}
.faq-answer-panel p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #58283e;
}

.faq-contact-cta {
  padding: 1.8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.cta-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
}
.cta-sq-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #faf3f6;
  color: #561935;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}
.cta-left h3 {
  color: #fff;
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
}
.cta-left p {
  color: #f8dce8;
  font-size: 0.86rem;
  margin: 0;
}
.faq-contact-cta .btn {
  position: relative;
  z-index: 2;
}

/* ========================================================= */
/* ۶. ریسپانسیو کامل                                        */
/* ========================================================= */
@media (max-width: 960px) {
  .hero-showcase-grid,
  .catalog-inner-grid,
  .specs-layout-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
  .hero-podium-stage {
    order: -1;
    min-height: 230px;
  }
  .specs-overlap-card {
    margin-top: 0;
    margin-bottom: 0;
  }
  .band-top, .band-bottom {
    display: none;
  }
  .catalog-cutout-container {
    background: linear-gradient(145deg, #5d1c3a, #3d0e24);
    border-radius: 26px;
    padding: 1.4rem;
  }
}

@media (max-width: 600px) {
  .four-lines-grid {
    grid-template-columns: 1fr;
  }
  .podium-salon-img {
    width: 88px;
    height: 112px;
  }
  .col-center .podium-salon-img {
    width: 100px;
    height: 128px;
  }
  .pedestal-cylinder {
    width: 104px !important;
  }
  .hero-next-page-wrap {
    justify-content: center;
    padding-left: 0;
  }
}
</style>
