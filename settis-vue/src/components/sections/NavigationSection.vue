<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useGsapAnimations } from '@/composables/useGsapAnimations'

const isMenuOpen = ref(false)
const { isDarkMode, toggleTheme } = useTheme()
const { scrollToSection } = useGsapAnimations()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed w-full bg-light/80 dark:bg-dark/80 backdrop-blur-sm z-50 py-4 border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="/" @click.prevent="scrollToSection('#hero-section')" class="flex items-center">
        <img src="/logo-for-whiteTheme.png" alt="Settis Logo" class="h-10 dark:hidden">
        <img src="/logo-for-blackTheme.png" alt="Settis Logo" class="h-10 hidden dark:inline">
      </a>
      <div class="hidden md:flex space-x-8 items-center">
        <a href="#hero-section" @click.prevent="scrollToSection('#hero-section')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Accueil</a>
        <a href="#about" @click.prevent="scrollToSection('#about')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">À propos</a>
        <a href="#services" @click.prevent="scrollToSection('#services')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Services</a>
        <a href="#contact" @click.prevent="scrollToSection('#contact')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Contact</a>
        <a href="#faq" @click.prevent="scrollToSection('#faq')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">FAQ</a>
        
        <button @click="toggleTheme" class="ml-4 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
          <i :class="isDarkMode ? 'fas fa-moon text-xl' : 'fas fa-sun text-xl'"></i>
        </button>
      </div>
      <div class="flex items-center md:hidden">
        <button @click="toggleTheme" class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mr-4">
          <i :class="isDarkMode ? 'fas fa-moon text-xl' : 'fas fa-sun text-xl'"></i>
        </button>
        <button class="text-gray-800 dark:text-light" @click="toggleMenu">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="md:hidden bg-light dark:bg-dark border-t border-gray-200 dark:border-gray-800 py-4" :class="{ 'hidden': !isMenuOpen }">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <a href="#hero-section" @click.prevent="scrollToSection('#hero-section', closeMenu)" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Accueil</a>
        <a href="#about" @click.prevent="scrollToSection('#about', closeMenu)" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">À propos</a>
        <a href="#services" @click.prevent="scrollToSection('#services', closeMenu)" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Services</a>
        <a href="#contact" @click.prevent="scrollToSection('#contact', closeMenu)" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Contact</a>
        <a href="#faq" @click.prevent="scrollToSection('#faq', closeMenu)" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">FAQ</a>
        <a href="#contact" @click.prevent="scrollToSection('#contact', closeMenu)" class="btn-primary w-full text-center mt-4">Commencer</a>
      </div>
    </div>
  </nav>
</template>
