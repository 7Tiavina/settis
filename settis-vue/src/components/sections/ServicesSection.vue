<script setup lang="ts">
// Aucune logique spécifique nécessaire pour le moment
</script>

<template>
  <section id="services" class="py-20 bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-light">Nos <span class="text-primary">Services</span></h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Du développement freelance aux solutions SaaS d'entreprise, nous offrons des services numériques complets qui stimulent l'innovation et la croissance des entreprises.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.1s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-laptop-code text-2xl text-light"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Développement Freelance</h3>
          <p class="text-gray-600 dark:text-gray-300">Services de développement web et mobile sur mesure adaptés à vos besoins commerciaux spécifiques.</p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Applications Web Personnalisées</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Solutions Sur Mesure</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Intégrations API</span>
            </li>
          </ul>
        </div>
        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-mobile-alt text-2xl text-light"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Applications Mobiles</h3>
          <p class="text-gray-600 dark:text-gray-300">Applications mobiles natives et multiplateformes pour les appareils iOS et Android.</p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Développement iOS Natif</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Développement Android Natif</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Solutions Cross-Platform</span>
            </li>
          </ul>
        </div>
        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.3s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-cloud text-2xl text-light"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Solutions SaaS</h3>
          <p class="text-gray-600 dark:text-gray-300">Plateformes software-as-a-service évolutives conçues pour les opérations commerciales modernes.</p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Architecture Microservices</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Intégration de Paiement</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Développement d'API</span>
            </li>
          </ul>
        </div>
        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-gamepad text-2xl text-light"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Jeux PC</h3>
          <p class="text-gray-600 dark:text-gray-300">Jeux PC engageants développés pour Steam et d'autres grandes plateformes de gaming.</p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Conception & Développement de Jeu</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Systèmes Multijoueurs</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              <span class="text-gray-600 dark:text-gray-300">Intégration SDK</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <button @click="$router.push('#contact')" class="relative h-12 overflow-hidden rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-2">
          <span class="relative">Démarrer votre projet</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Nous ajouterons ici les styles spécifiques si nécessaire */
</style>