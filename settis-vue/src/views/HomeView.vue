<script setup lang="ts">
import { onMounted } from 'vue'
import NavigationSection from '@/components/sections/NavigationSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import { useScrollAnimations } from '@/composables/useScrollAnimations'

const { initializeCustomElements } = useScrollAnimations()

onMounted(() => {
  // Initialize custom elements after the component is mounted
  initializeCustomElements()
})
</script>

<template>
  <div class="home">
    <NavigationSection />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <ContactSection />
    <FaqSection />
    <FooterSection />
  </div>
</template>

<style scoped>
/* Nous ajouterons ici les styles spécifiques à la page d'accueil si nécessaire */
</style>