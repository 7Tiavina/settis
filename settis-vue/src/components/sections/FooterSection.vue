<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  // Ici, nous ajouterons la logique pour l'abonnement à la newsletter
  console.log('Abonnement à la newsletter:', email.value)
  // Réinitialiser le champ après soumission
  email.value = ''
  alert('Merci pour votre abonnement à notre newsletter !')
}
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <a href="index.html" class="flex items-center mb-4">
            <img src="/logo-for-whiteTheme.png" alt="Settis Logo" class="h-8 dark:hidden">
            <img src="/logo-for-blackTheme.png" alt="Settis Logo" class="h-8 hidden dark:inline">
          </a>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Innovating Digital Solutions for a Global Future. Specializing in web development, mobile apps, SaaS solutions, and PC gaming experiences.</p>
          <p class="text-primary">Email: contact@settisllc.com</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4 text-gray-900 dark:text-light">Entreprise</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Accueil</a></li>
            <li><a href="index.html#about" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">À propos</a></li>
            <li><a href="index.html#services" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Services</a></li>
            <li><a href="index.html#contact" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4 text-gray-900 dark:text-light">Légal & Support</h4>
          <ul class="space-y-2">
            <li><a href="mentions-legales.html" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Mentions légales</a></li>
            <li><a href="politiques-de-confidentialite.html" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Politique de confidentialité</a></li>
            <li><a href="conditions-d-utilisations.html" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Conditions d'utilisation</a></li>
            <li><a href="politique-de-remboursement.html" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Politique de remboursement</a></li>
            <li><a href="index.html#faq" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4 text-gray-900 dark:text-light">Restez connecté</h4>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="w-10 h-10 bg-light dark:bg-dark rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-light dark:bg-dark rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-light dark:bg-dark rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-light dark:bg-dark rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors">
              <i class="fab fa-discord"></i>
            </a>
          </div>
          <p class="text-gray-600 dark:text-gray-300">Abonnez-vous à notre newsletter pour les dernières mises à jour</p>
          <div class="flex mt-2">
            <input type="email" v-model="email" placeholder="Votre email" class="bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full text-gray-900 dark:text-light">
            <button @click="subscribe" class="bg-primary text-white px-4 rounded-r-lg">S'abonner</button>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
        <p class="text-gray-600 dark:text-gray-300">© 2025 SETTIS LLC – Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Nous ajouterons ici les styles spécifiques si nécessaire */
</style>