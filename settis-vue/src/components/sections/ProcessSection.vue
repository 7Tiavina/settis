<script setup lang="ts">
// Aucune logique spécifique nécessaire pour le moment
</script>

<template>
  <section class="py-20 bg-light dark:bg-dark">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-light">Notre <span class="text-primary">Processus</span> de Développement</h2>
        <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Nous suivons une méthodologie éprouvée pour garantir que votre projet est livré à temps, dans le budget et dépasse vos attentes.</p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.1s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">1</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Consultation</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Nous commençons par une consultation approfondie pour comprendre vos besoins et objectifs.</p>
        </div>
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">2</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Développement</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Notre équipe experte développe votre solution en utilisant les dernières technologies.</p>
        </div>
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.3s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">3</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Test</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Des tests complets garantissent que votre solution est fiable, sécurisée et performante.</p>
        </div>
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">4</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Déploiement</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Nous gère le processus de déploiement complet et fournissons une assistance continue.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Nous ajouterons ici les styles spécifiques si nécessaire */
</style>