<template>
  <div class="not-found-wrapper">
    <div class="not-found-card">
      <div class="glitch-404">
        <span>4</span>
        <span class="rose-bloom">🌸</span>
        <span>4</span>
      </div>

      <h1 class="not-found-title">صفحه مورد نظر یافت نشد</h1>
      <p class="not-found-desc">
        متأسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد، ممکن است آدرس تغییر کرده یا حذف شده باشد.
      </p>

      <div class="not-found-actions">
        <router-link to="/" class="btn btn-primary">
          <i class="fas fa-home"></i> بازگشت به پیشخوان اصلی
        </router-link>
        <router-link to="/dashboard" class="btn btn-secondary">
          <i class="fas fa-chart-pie"></i> پنل مدیریت
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem 1rem;
}

.not-found-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-elevated);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: var(--radius-lg);
  padding: 3rem 2rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
}

.glitch-404 {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--rose-gold-light);
  text-shadow: 0 4px 20px rgba(217, 107, 138, 0.35);
}

.rose-bloom {
  font-size: 4rem;
  animation: floatFlower 3s ease-in-out infinite;
}

@keyframes floatFlower {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(10deg);
  }
}

.not-found-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--ink-primary);
  margin-bottom: 1rem;
}

.not-found-desc {
  color: var(--ink-muted);
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.not-found-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.not-found-actions .btn {
  padding: 0.75rem 1.4rem;
  font-size: 0.95rem;
}
</style>
