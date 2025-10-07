<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationSection from '@/components/sections/NavigationSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import { onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

onMounted(() => {
  const { initializeTheme } = useTheme()
  initializeTheme()
})
</script>

<template>
  <div class="bg-light dark:bg-dark text-gray-800 dark:text-gray-200 min-h-screen">
    <NavigationSection />
    <RouterView />
    <FooterSection />
  </div>
</template>

<style>
/* Nous importerons les styles globaux ici */
</style>
