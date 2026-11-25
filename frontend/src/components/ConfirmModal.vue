<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="state.isOpen" class="confirm-backdrop" @click.self="cancel">
        <div class="confirm-card" role="dialog" aria-modal="true">
          <div class="confirm-header">
            <div class="confirm-icon-box" :class="{ 'icon-danger': state.danger }">
              <i v-if="state.danger" class="fas fa-trash-alt"></i>
              <i v-else class="fas fa-question-circle"></i>
            </div>
            <h3 class="confirm-title">{{ state.title }}</h3>
          </div>

          <div class="confirm-body">
            <p>{{ state.message }}</p>
          </div>

          <div class="confirm-footer">
            <button
              type="button"
              class="btn"
              :class="state.danger ? 'btn-danger-glow' : 'btn-primary'"
              @click="confirm"
            >
              {{ state.confirmText }}
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              @click="cancel"
            >
              {{ state.cancelText }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { confirmState, handleConfirm, handleCancel } from '../services/confirm.js'

export default {
  name: 'ConfirmModal',
  computed: {
    state() {
      return confirmState
    }
  },
  methods: {
    confirm() {
      handleConfirm()
    },
    cancel() {
      handleCancel()
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyDown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    confirm() {
      handleConfirm()
    },
    cancel() {
      handleCancel()
    },
    onKeyDown(e) {
      if (!confirmState.isOpen) return
      if (e.key === 'Escape') {
        this.cancel()
      } else if (e.key === 'Enter') {
        this.confirm()
      }
    }
  }
}
</script>

<style scoped>
.confirm-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(51, 13, 30, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99998;
  padding: 1rem;
}

.confirm-card {
  background: #faf3f6;
  border: 2px solid #561935;
  box-shadow: 0 20px 50px rgba(51, 13, 30, 0.35);
  border-radius: 22px;
  width: 100%;
  max-width: 440px;
  padding: 1.75rem;
  color: #330d1e;
  text-align: right;
  animation: cardPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes cardPop {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.confirm-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.15rem;
}

.confirm-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #561935;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #ffffff;
  flex-shrink: 0;
}

.confirm-icon-box.icon-danger {
  background: #dc2626;
  color: #ffffff;
}

.confirm-title {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0;
  color: #330d1e;
}

.confirm-body p {
  color: #58283e;
  font-size: 0.95rem;
  line-height: 1.65;
  margin: 0 0 1.5rem 0;
}

.confirm-footer {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.btn-danger-glow {
  background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
  color: #fff;
  border: 1px solid #ef4444;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  font-weight: 600;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-danger-glow:hover {
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.6);
  transform: translateY(-1px);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
