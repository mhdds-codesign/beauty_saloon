<template>
  <div id="app-shell" class="app-layout">
    <!-- نوار مدیریت سالن (فقط در صفحات داخلی و هنگام لاگین) -->
    <nav class="navbar" v-if="showManagementNav">
      <div class="navbar-full-container">
        <!-- لوگو و عنوان پنل مدیریت (سمت چپ/راست در جای خود) -->
        <div class="navbar-brand-wrap">
          <router-link to="/dashboard" class="navbar-brand">
            <i class="fas fa-spa" style="margin-left: 9px; color: #f0dce8;"></i>
            <span>پنل مدیریت رز بیوتی (rose beauty)</span>
          </router-link>
        </div>
        
        <!-- منوی وسط‌چین هدر -->
        <ul class="navbar-center-nav">
          <li>
            <router-link to="/dashboard">
              <i class="fas fa-chart-pie"></i> داشبورد
            </router-link>
          </li>
          <li v-if="auth.role === 'admin'">
            <router-link to="/customers">
              <i class="fas fa-users"></i> مشتریان
            </router-link>
          </li>
          <li v-else-if="auth.customer_id">
            <router-link :to="`/customers/${auth.customer_id}/edit`">
              <i class="fas fa-user-circle"></i> اطلاعات حساب من
            </router-link>
          </li>
          <li>
            <router-link to="/lines">
              <i class="fas fa-cut"></i> سرویس‌ها و لاین‌ها
            </router-link>
          </li>
          <li>
            <router-link to="/reservations">
              <i class="fas fa-calendar-check"></i> نوبت‌ها
            </router-link>
          </li>
          <li>
            <router-link to="/schedules">
              <i class="fas fa-clock"></i> برنامه کاری
            </router-link>
          </li>
          <li>
            <router-link to="/" class="nav-public-link" title="مشاهده پیشخوان عمومی سالن">
              <i class="fas fa-home"></i> پیشخوان عمومی
            </router-link>
          </li>
        </ul>

        <!-- بخش کاربر و خروج -->
        <div class="navbar-user-actions">
          <span class="user-pill" v-if="auth.username">
            <i class="fas fa-user-shield" v-if="auth.role === 'admin'"></i>
            <i class="fas fa-user" v-else></i>
            {{ auth.username }}
            <small>({{ auth.role === 'admin' ? 'مدیر سالن' : 'مشتری' }})</small>
          </span>
          <a href="#" @click.prevent="doLogout" class="navbar-logout-btn">
            <i class="fas fa-sign-out-alt"></i> خروج
          </a>
        </div>
      </div>
    </nav>

    <!-- بخش اصلی محتوا (تمام‌عرض برای صفحات مدیریتی) -->
    <main :class="['main-content', { 'app-main-container': !isStandalonePage }]">
      <router-view />
    </main>

    <!-- فوتر سراسری برای کل پروژه -->
    <AppFooter />

    <!-- سیستم اعلان‌ها و مودال تأیید مدرن -->
    <ToastContainer />
    <ConfirmModal />
  </div>
</template>

<script>
import api from './api.js'
import { auth, loadAuth, clearAuth } from './auth.js'
import AppFooter from './components/Footer.vue'
import ToastContainer from './components/ToastContainer.vue'
import ConfirmModal from './components/ConfirmModal.vue'

export default {
  components: {
    AppFooter,
    ToastContainer,
    ConfirmModal
  },
  data() {
    return {
      auth,
    }
  },
  computed: {
    isLandingPage() {
      return this.$route.path === '/'
    },
    isStandalonePage() {
      return this.$route.path === '/' || this.$route.path === '/about' || this.$route.path === '/contact'
    },
    showManagementNav() {
      return !!this.auth.id && !this.isStandalonePage
    }
  },
  watch: {
    async $route() {
      if (!this.auth.id) {
        try {
          await loadAuth()
        } catch {
          // not logged in
        }
      }
    }
  },
  async created() {
    try {
      await loadAuth()
    } catch {
      // not logged in
    }
  },
  methods: {
    async doLogout() {
      await api.logout()
      clearAuth()
      this.$router.push('/login')
    },
  },
}
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1 0 auto;
}
.app-main-container {
  margin-top: 2rem;
  margin-bottom: 3rem;
}
.nav-public-link {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #ffe3ef !important;
  font-weight: 700 !important;
}
.nav-public-link:hover {
  background: #faf3f6 !important;
  color: #350e20 !important;
}
.user-pill {
  background: #faf3f6;
  border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 0.36rem 0.85rem;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #350e20;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}
.user-pill i {
  color: #d84782;
}
.user-pill small {
  color: #7a5163;
  font-weight: 600;
}
@media (max-width: 768px) {
  .app-main-container {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
