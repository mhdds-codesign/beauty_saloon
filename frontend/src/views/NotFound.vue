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
  background: rgba(22, 17, 34, 0.9);
  border: 1px solid rgba(255, 45, 149, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 45, 149, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 24px;
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
  color: #ff2d95;
  text-shadow: 0 0 25px rgba(255, 45, 149, 0.6), 0 0 50px rgba(255, 45, 149, 0.3);
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
  color: #fff;
  margin-bottom: 1rem;
}

.not-found-desc {
  color: #cfbecc;
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
