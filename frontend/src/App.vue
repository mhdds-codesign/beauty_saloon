<template>
  <div id="app-shell" class="app-layout">
    <!-- نوار مدیریت سالن (فقط در صفحات داخلی و هنگام لاگین) -->
    <nav class="navbar" v-if="showManagementNav">
      <div class="container">
        <router-link to="/dashboard" class="navbar-brand">
          <i class="fas fa-spa" style="margin-left: 9px; color: #f0dce8;"></i>پنل مدیریت رز بیوتی (rose beauty)
        </router-link>
        
        <ul class="navbar-nav">
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

          <li class="nav-right" style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <span class="user-pill" v-if="auth.username">
              <i class="fas fa-user-shield" v-if="auth.role === 'admin'"></i>
              <i class="fas fa-user" v-else></i>
              {{ auth.username }}
              <small>({{ auth.role === 'admin' ? 'مدیر سالن' : 'مشتری' }})</small>
            </span>
            <a href="#" @click.prevent="doLogout" style="color:#f87171;">
              <i class="fas fa-sign-out-alt"></i> خروج
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- بخش اصلی محتوا -->
    <main :class="['main-content', { 'container app-main-container': !isLandingPage }]">
      <router-view />
    </main>

    <!-- فوتر سراسری برای کل پروژه -->
    <AppFooter />
  </div>
</template>

<script>
import api from './api.js'
import { auth, loadAuth, clearAuth } from './auth.js'
import AppFooter from './components/Footer.vue'

export default {
  components: {
    AppFooter
  },
  data() {
    return {
      loggedIn: false,
      auth,
    }
  },
  computed: {
    isLandingPage() {
      return this.$route.path === '/'
    },
    showManagementNav() {
      return this.loggedIn && !this.isLandingPage
    }
  },
  async created() {
    try {
      await loadAuth()
      this.loggedIn = true
    } catch {
      this.loggedIn = false
    }
  },
  methods: {
    async doLogout() {
      await api.logout()
      clearAuth()
      this.loggedIn = false
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
  color: #ff85c0 !important;
  font-weight: 600 !important;
}
.nav-public-link:hover {
  color: #ff2d95 !important;
}
.user-pill {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 45, 149, 0.25);
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #ff6b9d;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.user-pill small {
  color: #d1c4ce;
}
@media (max-width: 768px) {
  .app-main-container {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
