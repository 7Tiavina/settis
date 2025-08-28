<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useGsapAnimations } from '@/composables/useGsapAnimations'

const isMenuOpen = ref(false)
const { isDarkMode, toggleTheme } = useTheme()
const { scrollToSection } = useGsapAnimations()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  const nav = document.querySelector('nav')
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }
}

onMounted(() => {
  // Ajouter l'écouteur d'événement de défilement
  window.addEventListener('scroll', handleScroll)
  
  // Initialiser l'état de défilement
  handleScroll()
})

onBeforeUnmount(() => {
  // Retirer l'écouteur d'événement de défilement
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed w-full bg-light/80 dark:bg-dark/80 backdrop-blur-sm z-50 py-4 border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="index.html" class="flex items-center">
        <img src="/logo-for-whiteTheme.png" alt="Settis Logo" class="h-8 dark:hidden">
        <img src="/logo-for-blackTheme.png" alt="Settis Logo" class="h-8 hidden dark:inline">
      </a>
      <div class="hidden md:flex space-x-8 items-center">
        <a href="#" @click.prevent="scrollToSection('#hero-section')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Accueil</a>
        <a href="#" @click.prevent="scrollToSection('#about')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium">À propos</a>
        <a href="#" @click.prevent="scrollToSection('#services')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Services</a>
        <a href="#" @click.prevent="scrollToSection('#contact')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Contact</a>
        <a href="#" @click.prevent="scrollToSection('#faq')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium">FAQ</a>
        
        <button @click="toggleTheme" class="ml-4 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
          <i :class="isDarkMode ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl'"></i>
        </button>
      </div>
      <div class="flex items-center md:hidden">
        <button @click="toggleTheme" class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mr-4">
          <i :class="isDarkMode ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl'"></i>
        </button>
        <button class="text-light dark:text-light" @click="toggleMenu">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div :class="['hidden', 'md:hidden', 'bg-light', 'dark:bg-dark', 'border-t', 'border-gray-200', 'dark:border-gray-800', 'py-4', { 'hidden': !isMenuOpen }]" id="mobile-menu">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <a href="#" @click.prevent="scrollToSection('#hero-section')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium py-2">Accueil</a>
        <a href="#" @click.prevent="scrollToSection('#about')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium py-2">À propos</a>
        <a href="#" @click.prevent="scrollToSection('#services')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium py-2">Services</a>
        <a href="#" @click.prevent="scrollToSection('#contact')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium py-2">Contact</a>
        <a href="#" @click.prevent="scrollToSection('#faq')" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium py-2">FAQ</a>
        <a href="#" @click.prevent="scrollToSection('#contact')" class="btn-primary w-full text-center mt-4">Commencer</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav.scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dark nav.scrolled {
  background-color: rgba(9, 10, 10, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>