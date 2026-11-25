<template>
  <header class="public-site-header" :class="{ 'scrolled': isScrolled }">
    <div class="header-bar-layout">
      <!-- کپسول مستطیلی اصلی ناوبری (منطبق با نوار بالای پوستر مرجع) -->
      <div class="header-main-capsule">
        <!-- لوگو و برند سالن -->
        <router-link to="/" class="brand-link" @click="handleNav('/')">
          <span class="brand-logo-badge">
            <i class="fas fa-spa"></i>
          </span>
          <div class="brand-title-wrap">
            <span class="brand-name">رز بیوتی</span>
            <span class="brand-subtitle editorial-serif">ROSE SALON</span>
          </div>
        </router-link>

        <!-- منوی اصلی ناوبری هدر (فقط لینک‌های تاییدشده) -->
        <nav class="nav-menu" :class="{ 'active': mobileMenuOpen }">
          <a
            href="/"
            class="nav-link"
            :class="{ 'active': isRoute('/') && !currentHash }"
            @click.prevent="navigate('/')"
          >
            <i class="fas fa-home"></i> خانه
          </a>

          <a
            href="/#services"
            class="nav-link"
            :class="{ 'active': isHash('#services') }"
            @click.prevent="navigate('/#services')"
          >
            <i class="fas fa-cut"></i> سرویس‌ها و لاین‌ها
          </a>

          <a
            href="/#faq"
            class="nav-link"
            :class="{ 'active': isHash('#faq') }"
            @click.prevent="navigate('/#faq')"
          >
            <i class="fas fa-question-circle"></i> سوالات متداول
          </a>

          <router-link
            to="/about"
            class="nav-link"
            :class="{ 'active': isRoute('/about') }"
            @click="mobileMenuOpen = false"
          >
            <i class="fas fa-heart"></i> درباره ما
          </router-link>

          <router-link
            to="/contact"
            class="nav-link"
            :class="{ 'active': isRoute('/contact') }"
            @click="mobileMenuOpen = false"
          >
            <i class="fas fa-phone-alt"></i> تماس با ما
          </router-link>

          <!-- دکمه ورود در منوی موبایل -->
          <div class="mobile-nav-actions" v-if="mobileMenuOpen">
            <router-link
              :to="isLoggedIn ? '/dashboard' : '/login'"
              class="mobile-login-btn"
              @click="mobileMenuOpen = false"
            >
              <i :class="isLoggedIn ? 'fas fa-chart-pie' : 'fas fa-sign-in-alt'"></i>
              <span>{{ isLoggedIn ? 'ورود به داشبورد' : 'ورود به حساب' }}</span>
            </router-link>
          </div>
        </nav>

        <!-- دکمه همبرگری موبایل -->
        <button class="hamburger-btn" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="منو">
          <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>

      <!-- دکمه مستطیلی جداشده ورود در کنار نوار (شبیه باکس ذره‌بین مرجع) -->
      <div class="header-detached-action">
        <router-link
          :to="isLoggedIn ? '/dashboard' : '/login'"
          class="detached-login-box"
          :title="isLoggedIn ? 'ورود به داشبورد' : 'ورود به حساب'"
        >
          <i :class="isLoggedIn ? 'fas fa-chart-pie' : 'fas fa-sign-in-alt'"></i>
          <span>{{ isLoggedIn ? 'داشبورد' : 'ورود به حساب' }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { auth } from '../auth.js'

export default {
  name: 'PublicHeader',
  data() {
    return {
      auth,
      mobileMenuOpen: false,
      isScrolled: false,
      currentHash: ''
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
    this.currentHash = window.location.hash
    window.addEventListener('hashchange', this.updateHash)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('hashchange', this.updateHash)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 25
    },
    updateHash() {
      this.currentHash = window.location.hash
    },
    isRoute(path) {
      return this.$route.path === path
    },
    isHash(hash) {
      return this.$route.path === '/' && this.currentHash === hash
    },
    handleNav(path) {
      this.mobileMenuOpen = false
      if (this.$route.path === path) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    navigate(target) {
      this.mobileMenuOpen = false
      if (target === '/') {
        if (this.$route.path === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          this.currentHash = ''
        } else {
          this.$router.push('/')
        }
        return
      }

      if (target.startsWith('/#')) {
        const hash = target.replace('/', '')
        if (this.$route.path === '/') {
          const el = document.querySelector(hash)
          if (el) {
            const yOffset = -90
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
          this.currentHash = hash
        } else {
          this.$router.push(target)
        }
      }
    }
  }
}
</script>

<style scoped>
.public-site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0.9rem clamp(1rem, 2.5vw, 2.5rem);
  transition: all 0.3s ease;
  pointer-events: none;
}

.public-site-header.scrolled {
  padding-top: 0.55rem;
  padding-bottom: 0.55rem;
}

.header-bar-layout {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  pointer-events: auto;
}

/* کپسول مستطیلی اصلی ناوبری */
.header-main-capsule {
  flex: 1;
  background: linear-gradient(135deg, #5d1c3a 0%, #441229 100%);
  border-radius: 18px;
  padding: 0.55rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 10px 28px rgba(62, 15, 37, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-logo-badge {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: #faf3f6;
  color: #561935;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
}

.brand-title-wrap {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff8fb;
  line-height: 1.2;
}

.brand-subtitle {
  font-size: 0.65rem;
  color: #f8b4cf;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav-link {
  color: #f5dae5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.42rem 0.85rem;
  border-radius: 11px;
  transition: all 0.22s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
}

.nav-link i {
  font-size: 0.82rem;
  opacity: 0.85;
}

.nav-link:hover,
.nav-link.active,
.nav-link.router-link-exact-active {
  color: #350e20;
  background: #faf3f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* باکس مستطیلی جداشده در کنار نوار (سبک مرجع) */
.header-detached-action {
  flex-shrink: 0;
}

.detached-login-box {
  height: 52px;
  padding: 0 1.25rem;
  background: linear-gradient(135deg, #5d1c3a 0%, #441229 100%);
  color: #fff8fb;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 10px 26px rgba(62, 15, 37, 0.25);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.88rem;
  transition: all 0.22s ease;
}

.detached-login-box:hover {
  background: linear-gradient(135deg, #d84782, #b8326a);
  transform: translateY(-2px);
  color: #ffffff;
}

.hamburger-btn {
  display: none;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.05rem;
  align-items: center;
  justify-content: center;
}

.mobile-login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 12px;
  background: #faf3f6;
  color: #350e20;
  font-weight: 800;
  text-decoration: none;
}

@media (max-width: 960px) {
  .hamburger-btn {
    display: flex;
  }

  .header-detached-action {
    display: none;
  }

  .nav-menu {
    position: fixed;
    top: 76px;
    left: 1rem;
    right: 1rem;
    background: linear-gradient(145deg, #561935, #3d0e24);
    border-radius: 20px;
    flex-direction: column;
    padding: 1.1rem;
    gap: 0.45rem;
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 18px 40px rgba(45, 9, 26, 0.38);
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.25s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.95rem;
  }

  .mobile-nav-actions {
    width: 100%;
    margin-top: 0.5rem;
    padding-top: 0.6rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }
}
</style>
