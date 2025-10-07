<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useSectionNavigation } from '@/composables/useSectionNavigation'

const isMenuOpen = ref(false)
const { isDarkMode, toggleTheme } = useTheme()
const { navigateToSection } = useSectionNavigation()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleNavigation = (sectionId: string) => {
  navigateToSection(sectionId)
  closeMenu()
}
</script>

<template>
  <nav class="fixed w-full bg-light/80 dark:bg-dark/80 backdrop-blur-sm z-50 py-4 border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="/" @click.prevent="navigateToSection('#hero-section')" class="flex items-center">
        <img src="/logo-for-whiteTheme.png" alt="Logo SETTIS LLC" class="h-10 dark:hidden">
        <img src="/logo-for-blackTheme.png" alt="Logo SETTIS LLC" class="h-10 hidden dark:inline">
      </a>
      <div class="hidden md:flex space-x-8 items-center">
        <a href="#hero-section" @click.prevent="navigateToSection('#hero-section')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Accueil</a>
        <a href="#about" @click.prevent="navigateToSection('#about')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">À propos</a>
        <a href="#services" @click.prevent="navigateToSection('#services')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Services</a>
        <a href="#contact" @click.prevent="navigateToSection('#contact')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Contact</a>
        <a href="#faq" @click.prevent="navigateToSection('#faq')" class="nav-link text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">FAQ</a>
        
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
        <a href="#hero-section" @click.prevent="handleNavigation('#hero-section')" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Accueil</a>
        <a href="#about" @click.prevent="handleNavigation('#about')" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">À propos</a>
        <a href="#services" @click.prevent="handleNavigation('#services')" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Services</a>
        <a href="#contact" @click.prevent="handleNavigation('#contact')" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Contact</a>
        <a href="#faq" @click.prevent="handleNavigation('#faq')" class="nav-link py-2 text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">FAQ</a>
        <a href="#contact" @click.prevent="handleNavigation('#contact')" class="btn-primary w-full text-center mt-4">Commencer</a>
      </div>
    </div>
  </nav>
</template>
