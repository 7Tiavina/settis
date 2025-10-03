<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationSection from '@/components/sections/NavigationSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>

<template>
  <NavigationSection />
  <RouterView />
  <FooterSection />
</template>

<style>
/* Nous importerons les styles globaux ici */
</style>
