<script setup lang="ts">
import { useGsapAnimations } from '@/composables/useGsapAnimations'

const { scrollToSection } = useGsapAnimations()
</script>

<template>
  <section id="services" class="py-20 bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At SETTIS, we provide a full range of modern digital services designed to boost your business and help you achieve your goals efficiently.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.1s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-laptop-code text-2xl text-light"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Web Development</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Creation of custom websites, complex web applications, and high-performance e-commerce platforms.
          </p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Showcase and institutional websites</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Custom web apps (SaaS, CRM, ERP)</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>E-commerce platforms (WooCommerce, Shopify, Prestashop)</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Website redesign & optimization</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>API & third-party integrations</span></li>
          </ul>
        </div>

        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-mobile-alt text-2xl text-light"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Mobile Development</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Design and development of native (iOS, Android) and cross-platform mobile applications.
          </p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Native iOS (Swift) & Android (Kotlin) apps</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Hybrid apps (React Native, Flutter)</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Custom features (geolocation, push notifications)</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Store publishing (App Store, Google Play)</span></li>
          </ul>
        </div>

        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.3s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-cloud text-2xl text-light"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">SaaS Solutions</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Scalable software-as-a-service platforms designed for modern business operations.
          </p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Microservices Architecture</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Payment Integration</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>API Development</span></li>
          </ul>
        </div>

        <div class="service-card card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-gamepad text-2xl text-light"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">PC Game Development</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Engaging PC games developed for Steam and other major gaming platforms.
          </p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Game Design & Development</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>Multiplayer Systems</span></li>
            <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-2"></i><span>SDK Integration</span></li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <button
          @click="scrollToSection('#contact')"
          class="relative h-12 overflow-hidden rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-2"
        >
          <span class="relative text-lg">Start Your Project</span>
        </button>
      </div>
    </div>
  </section>
</template>
