<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToSection = (sectionId: string) => {
  router.push({ hash: sectionId })
  
  // Attendre un peu pour que la navigation soit terminée
  setTimeout(() => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }, 100)
}

onMounted(() => {
  // Ajuster la hauteur du hero wrapper pour tenir compte de la navigation
  const nav = document.querySelector('nav')
  const heroWrapper = document.getElementById('hero-wrapper')
  
  if (nav && heroWrapper) {
    const navHeight = nav.offsetHeight
    heroWrapper.style.paddingTop = `${navHeight}px`
    heroWrapper.style.minHeight = `calc(100vh)`
  }
})
</script>

<template>
  <div id="hero-wrapper" class="relative flex flex-col justify-center items-center w-full h-screen overflow-hidden">
    <!-- Background Lottie -->
    <div id="hero-lottie" class="absolute top-0 right-0 -z-10 w-1/2 h-full">
      <lottie-player 
        src="/2vmtMjmlm2.json" 
        background="transparent" 
        speed="1" 
        loop 
        autoplay
        class="w-full h-full object-cover">
      </lottie-player>
    </div>

    <!-- Hero Section -->
    <section id="hero-section" class="w-full flex flex-col justify-center items-center px-6">
      <div>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Texte Hero aligné à gauche -->
          <div class="md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInDown text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-light">
              Innovating Digital Solutions for a <span class="text-primary">Global Future</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Nous créons des expériences digitales exceptionnelles à travers le développement freelance, 
              les solutions SaaS, les applications mobiles et le gaming PC.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button @click="scrollToSection('#services')" class="relative h-12 overflow-hidden rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-2">
                <span class="relative">Découvrir nos services</span>
              </button>
              <button id="hero-contact-button" @click="scrollToSection('#contact')" class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary font-semibold text-white transition-all duration-300 hover:w-48">
                <div class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">Nous contacter</div>
                <div class="absolute right-3.5 opacity-100 transition-all duration-200">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Nous ajouterons ici les styles spécifiques si nécessaire */
</style>