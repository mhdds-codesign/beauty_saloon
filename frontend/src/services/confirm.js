import { reactive } from 'vue'

export const confirmState = reactive({
  isOpen: false,
  title: 'تأیید عملیات',
  message: '',
  confirmText: 'بله، حذف شود',
  cancelText: 'انصراف',
  danger: true,
  resolve: null,
})

export function showConfirm(message, options = {}) {
  return new Promise((resolve) => {
    confirmState.message = message
    confirmState.title = options.title || 'تأیید عملیات'
    confirmState.confirmText = options.confirmText || 'بله، تأیید'
    confirmState.cancelText = options.cancelText || 'انصراف'
    confirmState.danger = options.danger !== false
    confirmState.resolve = resolve
    confirmState.isOpen = true
  })
}

export function handleConfirm() {
  if (confirmState.resolve) {
    confirmState.resolve(true)
  }
  confirmState.isOpen = false
  confirmState.resolve = null
}

export function handleCancel() {
  if (confirmState.resolve) {
    confirmState.resolve(false)
  }
  confirmState.isOpen = false
  confirmState.resolve = null
}

export default showConfirm
