import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Landing from './views/Landing.vue'
import NotFound from './views/NotFound.vue'

// Customers
import Customers from './views/Customers.vue'
import CustomerForm from './views/CustomerForm.vue'

// Lines (خدمات)
import Lines from './views/Lines.vue'
import LineForm from './views/LineForm.vue'

// Reservations
import Reservations from './views/Reservations.vue'
import ReservationForm from './views/ReservationForm.vue'
import ReservationDetail from './views/ReservationDetail.vue'

// Schedules (برنامه کاری)
import Schedules from './views/Schedules.vue'
import ScheduleForm from './views/ScheduleForm.vue'

const routes = [
  {
    path: '/',
    component: Landing,
    meta: { 
      requiresAuth: false,
      title: 'رز بیوتی | سالن زیبایی و نوبت‌دهی آنلاین'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: { 
      requiresAuth: false,
      title: 'ورود به حساب | رز بیوتی'
    }
  },
  {
    path: '/register',
    component: CustomerForm,
    meta: { 
      requiresAuth: false,
      title: 'ثبت‌نام مشتری جدید | رز بیوتی'
    }
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { 
      requiresAuth: true,
      title: 'داشبورد مدیریت | رز بیوتی'
    }
  },

  // ==================== Customers ====================
  { 
    path: '/customers', 
    component: Customers, 
    meta: { 
      requiresAuth: true,
      title: 'مدیریت مشتریان | رز بیوتی'
    } 
  },
  {
    path: '/customers/new',
    component: CustomerForm,
    meta: { 
      requiresAuth: true, 
      requiresAdmin: true,
      title: 'ثبت مشتری جدید | رز بیوتی'
    }
  },
  { 
    path: '/customers/:id/edit', 
    component: CustomerForm, 
    meta: { 
      requiresAuth: true,
      title: 'ویرایش اطلاعات مشتری | رز بیوتی'
    } 
  },

  // ==================== Lines ====================
  { 
    path: '/lines', 
    component: Lines, 
    meta: { 
      requiresAuth: true,
      title: 'سرویس‌ها و خدمات | رز بیوتی'
    } 
  },
  {
    path: '/lines/new',
    component: LineForm,
    meta: { 
      requiresAuth: true, 
      requiresAdmin: true,
      title: 'افزودن خدمت جدید | رز بیوتی'
    }
  },
  {
    path: '/lines/:id/edit',
    component: LineForm,
    meta: { 
      requiresAuth: true, 
      requiresAdmin: true,
      title: 'ویرایش خدمت | رز بیوتی'
    }
  },

  // ==================== Reservations ====================
  { 
    path: '/reservations', 
    component: Reservations, 
    meta: { 
      requiresAuth: true,
      title: 'نوبت‌ها و رزروها | رز بیوتی'
    } 
  },
  { 
    path: '/reservations/new', 
    component: ReservationForm, 
    meta: { 
      requiresAuth: true,
      title: 'رزرو نوبت جدید | رز بیوتی'
    } 
  },
  { 
    path: '/reservations/:id', 
    component: ReservationDetail, 
    meta: { 
      requiresAuth: true,
      title: 'جزئیات نوبت | رز بیوتی'
    } 
  },
  { 
    path: '/reservations/:id/edit', 
    component: ReservationForm, 
    meta: { 
      requiresAuth: true,
      title: 'ویرایش نوبت | رز بیوتی'
    } 
  },

  // ==================== Schedules ====================
  { 
    path: '/schedules', 
    component: Schedules, 
    meta: { 
      requiresAuth: true,
      title: 'برنامه کاری سالن | رز بیوتی'
    } 
  },
  {
    path: '/schedules/new',
    component: ScheduleForm,
    meta: { 
      requiresAuth: true, 
      requiresAdmin: true,
      title: 'تعریف زمان کاری جدید | رز بیوتی'
    }
  },
  {
    path: '/schedules/:id/edit',
    component: ScheduleForm,
    meta: { 
      requiresAuth: true, 
      requiresAdmin: true,
      title: 'ویرایش زمان کاری | رز بیوتی'
    }
  },

  // ==================== 404 Catch All ====================
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      requiresAuth: false,
      title: 'صفحه پیدا نشد | رز بیوتی'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      const res = await fetch('/api/auth/me', {
        credentials: 'include'
      })

      if (!res.ok) {
        return next('/login')
      }

      // مسیرهای مخصوص admin برای کاربران عادی مسدود می‌شوند
      if (to.meta.requiresAdmin) {
        const me = await res.json()
        if (me.role !== 'admin') {
          return next('/dashboard')
        }
      }
    } catch (err) {
      console.error('Auth check failed:', err)
      return next('/login')
    }
  }
  next()
})

router.afterEach((to) => {
  document.title = to.meta?.title || 'رز بیوتی | سالن زیبایی و نوبت‌دهی آنلاین'
})

export default router
