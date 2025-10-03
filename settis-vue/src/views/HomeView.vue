<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import { useRoute } from 'vue-router'
import { useGsapAnimations } from '@/composables/useGsapAnimations'

const { initializeCustomElements } = useScrollAnimations()
const route = useRoute()
const { scrollToSection } = useGsapAnimations()

onMounted(() => {
  // Initialize custom elements after the component is mounted
  initializeCustomElements()

  // Scroll to section if hash is present
  if (route.hash) {
    scrollToSection(route.hash)
  }
})
</script>

<template>
  <div class="home w-full max-w-full overflow-x-hidden">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <ContactSection />
    <FaqSection />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>