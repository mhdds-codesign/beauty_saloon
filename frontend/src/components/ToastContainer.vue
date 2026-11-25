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
  border-radius: 14px;
  background: #faf3f6;
  box-shadow: 0 12px 30px rgba(51, 13, 30, 0.22);
  border: 1.5px solid #dfc4d0;
  color: #330d1e;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
}

.toast-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 35px rgba(51, 13, 30, 0.28);
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
  color: #7a5163;
  font-size: 1.3rem;
  line-height: 1;
  padding: 0 0.25rem;
  cursor: pointer;
  transition: color 0.2s;
  flex-shrink: 0;
}

.toast-close:hover {
  color: #330d1e;
}

/* نوع موفقیت (سبز) */
.toast-success {
  border-color: #10b981;
}
.toast-success .toast-icon {
  color: #059669;
}

/* نوع خطا (قرمز) */
.toast-error {
  border-color: #ef4444;
}
.toast-error .toast-icon {
  color: #dc2626;
}

/* نوع هشدار (خردلی) */
.toast-warning {
  border-color: #d97706;
}
.toast-warning .toast-icon {
  color: #b45309;
}

/* نوع اطلاع‌رسانی (صورتی رز) */
.toast-info {
  border-color: #d84782;
}
.toast-info .toast-icon {
  color: #561935;
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
