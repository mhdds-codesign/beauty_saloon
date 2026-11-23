<template>
  <teleport to="body">
    <div class="toast-container" aria-live="polite" aria-atomic="true">
      <transition-group name="toast-slide" tag="div" class="toast-wrapper">
        <div
          v-for="item in toasts"
          :key="item.id"
          class="toast-item"
          :class="`toast-${item.type}`"
          @click="removeToast(item.id)"
        >
          <div class="toast-icon">
            <i v-if="item.type === 'success'" class="fas fa-check-circle"></i>
            <i v-else-if="item.type === 'error'" class="fas fa-exclamation-circle"></i>
            <i v-else-if="item.type === 'warning'" class="fas fa-exclamation-triangle"></i>
            <i v-else class="fas fa-info-circle"></i>
          </div>
          <div class="toast-message">{{ item.message }}</div>
          <button
            type="button"
            class="toast-close"
            @click.stop="removeToast(item.id)"
            title="بستن"
          >
            &times;
          </button>
        </div>
      </transition-group>
    </div>
  </teleport>
</template>

<script>
import { toastState, toast } from '../services/toast.js'

export default {
  name: 'ToastContainer',
  computed: {
    toasts() {
      return toastState.toasts
    }
  },
  methods: {
    removeToast(id) {
      toast.remove(id)
    }
  }
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  max-width: 420px;
  width: calc(100vw - 3rem);
}

.toast-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.toast-item {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  background: rgba(22, 17, 34, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 45, 149, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f5e6ee;
  font-size: 0.92rem;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
}

.toast-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 45, 149, 0.25);
}

.toast-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast-message {
  flex: 1;
  word-break: break-word;
}

.toast-close {
  background: transparent;
  border: none;
  color: #bfa8b8;
  font-size: 1.3rem;
  line-height: 1;
  padding: 0 0.25rem;
  cursor: pointer;
  transition: color 0.2s;
  flex-shrink: 0;
}

.toast-close:hover {
  color: #fff;
}

/* نوع موفقیت (سبز زمردی نئونی) */
.toast-success {
  border-color: rgba(16, 185, 129, 0.55);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.25);
}
.toast-success .toast-icon {
  color: #10b981;
}

/* نوع خطا (قرمز رز نئونی) */
.toast-error {
  border-color: rgba(239, 68, 68, 0.55);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(239, 68, 68, 0.25);
}
.toast-error .toast-icon {
  color: #ef4444;
}

/* نوع هشدار (خردلی / طلایی) */
.toast-warning {
  border-color: rgba(217, 119, 6, 0.55);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(217, 119, 6, 0.25);
}
.toast-warning .toast-icon {
  color: #f59e0b;
}

/* نوع اطلاع‌رسانی (صورتی رز) */
.toast-info {
  border-color: rgba(255, 45, 149, 0.55);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 45, 149, 0.25);
}
.toast-info .toast-icon {
  color: #ff2d95;
}

/* ترنزیشن اسلاید و فید */
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.92);
}
.toast-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.92);
}

@media (max-width: 600px) {
  .toast-container {
    top: 1rem;
    left: 1rem;
    right: 1rem;
    width: auto;
    max-width: 100%;
  }
}
</style>
