<script setup lang="ts">
// No specific logic needed for now
</script>

<template>
  <section class="py-20 bg-light dark:bg-dark">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-light">Our <span class="text-primary">Development</span> Process</h2>
        <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.</p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.1s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">1</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Consultation</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">We start with a detailed consultation to understand your needs and goals.</p>
        </div>
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">2</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Development</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Our expert team develops your solution using the latest technologies.</p>
        </div>
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.3s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">3</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Testing</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Comprehensive testing ensures your solution is reliable, secure, and high-performing.</p>
        </div>
        <div class="process-step card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-light mb-6">4</div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Deployment</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">We handle the complete deployment process and provide ongoing support.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add specific styles here if necessary */
</style>
