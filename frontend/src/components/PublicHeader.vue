<template>
  <header class="public-site-header" :class="{ 'scrolled': isScrolled }">
    <div class="header-inner-container">
      <!-- لوگو و برند سالن -->
      <router-link to="/" class="brand-link" @click="handleNav('/')">
        <span class="brand-logo-icon">
          <i class="fas fa-spa"></i>
        </span>
        <div class="brand-title-wrap">
          <span class="brand-name">رز بیوتی</span>
          <span class="brand-subtitle">Rose Beauty Salon</span>
        </div>
      </router-link>

      <!-- منوی اصلی ناوبری هدر -->
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
          <template v-if="isLoggedIn">
            <router-link to="/dashboard" class="action-btn action-primary w-full">
              <i class="fas fa-chart-pie"></i>
              <span>ورود به داشبورد</span>
            </router-link>
          </template>
          <template v-else>
            <router-link to="/login" class="action-btn action-outline w-full">
              <i class="fas fa-sign-in-alt"></i>
              <span>ورود به حساب</span>
            </router-link>
          </template>
        </div>
      </nav>

      <!-- دکمه ورود در دسکتاپ (بدون دکمه نوبت‌دهی طبق درخواست) -->
      <div class="header-actions">
        <template v-if="isLoggedIn">
          <router-link to="/dashboard" class="action-btn action-primary">
            <i class="fas fa-chart-pie"></i>
            <span>ورود به داشبورد</span>
          </router-link>
        </template>
        <template v-else>
          <router-link to="/login" class="action-btn action-outline">
            <i class="fas fa-sign-in-alt"></i>
            <span>ورود به حساب</span>
          </router-link>
        </template>

        <!-- دکمه همبرگری موبایل -->
        <button class="hamburger-btn" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="منو">
          <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
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
      this.isScrolled = window.scrollY > 30
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
            const yOffset = -70
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
  padding: 1rem 0;
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: rgba(10, 8, 24, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 45, 149, 0.15);
}

.public-site-header.scrolled {
  padding: 0.65rem 0;
  background: rgba(8, 6, 20, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 45, 149, 0.25);
}

.header-inner-container {
  width: 100%;
  padding: 0 clamp(1rem, 3vw, 2.5rem);
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
  padding: 0.4rem 0.65rem;
  border-radius: 8px;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.nav-link i {
  font-size: 0.85rem;
  color: #ff6b9d;
  transition: transform 0.2s;
}

.nav-link:hover,
.nav-link.active,
.nav-link.router-link-exact-active {
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
  gap: 0.45rem;
  padding: 0.55rem 1.25rem;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}

.action-outline {
  border: 1px solid rgba(255, 45, 149, 0.45);
  color: #f0e6ee;
  background: rgba(255, 45, 149, 0.06);
}

.action-outline:hover {
  background: rgba(255, 45, 149, 0.2);
  border-color: #ff2d95;
  color: #fff;
  transform: translateY(-1px);
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

.w-full {
  width: 100% !important;
  justify-content: center;
}

@media (max-width: 900px) {
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

  .header-actions .action-btn {
    display: none;
  }
}
</style>
