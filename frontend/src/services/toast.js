import { reactive } from 'vue'

export const toastState = reactive({
  toasts: []
})

let nextId = 1

export const toast = {
  show(message, type = 'info', duration = 3500) {
    const id = nextId++
    const item = { id, message, type }
    toastState.toasts.push(item)

    if (duration > 0) {
      setTimeout(() => {
        this.remove(id)
      }, duration)
    }
    return id
  },

  success(message, duration = 3500) {
    return this.show(message, 'success', duration)
  },

  error(message, duration = 4000) {
    return this.show(message, 'error', duration)
  },

  info(message, duration = 3500) {
    return this.show(message, 'info', duration)
  },

  warning(message, duration = 3500) {
    return this.show(message, 'warning', duration)
  },

  remove(id) {
    const idx = toastState.toasts.findIndex(t => t.id === id)
    if (idx !== -1) {
      toastState.toasts.splice(idx, 1)
    }
  },

  clear() {
    toastState.toasts = []
  }
}

export default toast
