<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const submitForm = () => {
  // Ici, nous ajouterons la logique pour envoyer le formulaire
  console.log('Formulaire soumis:', { name: name.value, email: email.value, subject: subject.value, message: message.value })
  // Réinitialiser le formulaire après soumission
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
  alert('Merci pour votre message ! Nous vous contacterons bientôt.')
}
</script>

<template>
  <section id="contact" class="py-20 bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-light">Contactez-<span class="text-primary">nous</span></h2>
        <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Prêt à commencer votre prochain projet? Contactez notre équipe pour discuter de la façon dont nous pouvons vous aider à concrétiser votre vision digitale.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="animate__animated animate__fadeInUp">
          <form class="space-y-6" @submit.prevent="submitForm">
            <div>
              <label for="name" class="block mb-2 text-lg text-gray-900 dark:text-light">Nom complet *</label>
              <input type="text" id="name" v-model="name" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Votre nom complet" required>
            </div>
            <div>
              <label for="email" class="block mb-2 text-lg text-gray-900 dark:text-light">Email *</label>
              <input type="email" id="email" v-model="email" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="votre.email@exemple.com" required>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-lg text-gray-900 dark:text-light">Sujet *</label>
              <input type="text" id="subject" v-model="subject" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="De quoi s'agit-il?" required>
            </div>
            <div>
              <label for="message" class="block mb-2 text-lg text-gray-900 dark:text-light">Message *</label>
              <textarea id="message" rows="5" v-model="message" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Parlez-nous de votre projet ou demande..." required></textarea>
            </div>
            <button type="submit" class="relative h-12 overflow-hidden rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-2 mt-4">Envoyer le message</button>
          </form>
        </div>
        <div class="animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <div class="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
            <h3 class="text-3xl font-semibold mb-6 text-gray-900 dark:text-light">Restons en contact</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">Nous sommes là pour vous aider à réussir. Que vous ayez besoin d'une application web personnalisée, d'une application mobile ou de questions sur nos services, notre équipe est prête à vous aider.</p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-envelope text-light"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-light">Email</h4>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Envoyez-nous un email à tout moment</p>
                  <p class="text-primary text-lg">contact@settis-llc.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt text-light"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-light">Adresse</h4>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Notre siège social</p>
                  <p class="text-primary text-lg">117 South Lexington Street Ste 100<br>Harrisonville, MO 64701<br>United States of America</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-clock text-light"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-light">Heures d'ouverture</h4>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Quand nous sommes disponibles</p>
                  <p class="text-primary text-lg">Lundi - Vendredi: 9h00 - 18h00 CST<br>Samedi: 10h00 - 14h00 CST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Nous ajouterons ici les styles spécifiques si nécessaire */
</style>