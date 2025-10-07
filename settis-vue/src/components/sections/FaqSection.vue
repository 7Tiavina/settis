<script setup lang="ts">
import { useGsapAnimations } from '@/composables/useGsapAnimations'

const { scrollToSection } = useGsapAnimations()
</script>

<template>
  <section id="faq" class="py-20 bg-light dark:bg-dark">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-light">Frequently Asked <span class="text-primary">Questions</span></h2>
        <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Find answers to common questions about our services, processes, and how we can help you bring your digital projects to life.</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.1s;">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">What types of projects does SETTIS LLC offer?</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">We offer a wide range of services including web and mobile development, enterprise SaaS solutions, and PC game development. Whether you need a custom app, a cloud platform, or a game, we have the expertise to deliver.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">What is the typical timeline for a project?</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">The timeline depends on the complexity and scope of the project. Simple projects may take 2-4 weeks, while more complex projects can take 3-6 months. We provide a detailed schedule after the initial assessment of your needs.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.3s;">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Do you provide ongoing support and maintenance?</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Yes, we offer ongoing support and maintenance plans for all our projects. This includes updates, bug fixes, performance optimization, and technical assistance as needed.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Can you work with existing systems and third-party integrations?</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Absolutely. We have experience integrating with various systems, APIs, and third-party services. We can work with your existing infrastructure or recommend new solutions that integrate seamlessly.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.5s;">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">What is your pricing structure?</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">We offer flexible pricing models depending on the project: fixed-price for well-defined projects, hourly rates for ongoing work, and subscription models for SaaS services. Contact us for a personalized quote.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.6s;">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-light">Do you work with international clients?</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300">Yes, we serve clients worldwide. Our team is distributed across different time zones, allowing us to provide near-continuous support and collaborate effectively with international clients.</p>
        </div>
      </div>

      <div class="text-center mt-12 animate__animated animate__fadeInUp">
        <p class="text-2xl mb-8 text-gray-900 dark:text-light">Can't find the answer you're looking for? Our team is here to help.</p>
        <a href="#contact" @click.prevent="scrollToSection('#contact')" class="btn-primary">Contact Us</a>
      </div>
    </div>
  </section>
</template>
