<script setup lang="ts">
import { ref } from 'vue'
import { useSectionNavigation } from '@/composables/useSectionNavigation'
import axios from 'axios'
import CustomAlert from '../common/CustomAlert.vue'

const { navigateToSection } = useSectionNavigation()
const email = ref('')
const honeypot = ref('') // Honeypot field

const loading = ref(false)
const showAlert = ref(false)
const alertTitle = ref('')
const alertMessage = ref('')

const subscribe = async () => {
  loading.value = true;
  const delay = new Promise(resolve => setTimeout(resolve, 2000));

  try {
    await Promise.all([
      axios.post('https://settis-llc.com/backend/newsletter.php', {
        email: email.value,
        honeypot: honeypot.value
      }),
      delay
    ]);
    alertTitle.value = 'Subscription Successful';
    alertMessage.value = 'Thank you for subscribing to our newsletter!';
    showAlert.value = true;
    email.value = ''
    honeypot.value = ''
  } catch (error: any) {
    await delay; // Wait also in case of error for consistent UX
    console.error('Error subscribing:', error);
    alertTitle.value = 'Error';
    if (error.response && error.response.data && error.response.data.errors) {
      alertMessage.value = error.response.data.errors.map((e: any) => e.msg).join(' ')
    } else if (error.response && error.response.data) {
      alertMessage.value = typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data)
    } else {
      alertMessage.value = 'An error occurred while subscribing. Please try again.'
    }
    showAlert.value = true
  } finally {
    loading.value = false
  }
}

const closeAlert = () => {
  showAlert.value = false
}
</script>


<template>
  <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <a href="#" @click.prevent="navigateToSection('#hero-section')" class="flex items-center mb-4">
            <img src="/logo-for-whiteTheme.png" alt="SETTIS LLC Logo" class="h-8 dark:hidden">
            <img src="/logo-for-blackTheme.png" alt="SETTIS LLC Logo" class="h-8 hidden dark:inline">
          </a>
          <div class="text-lg text-gray-600 dark:text-gray-300 mb-4">
            <span class="text-primary">Innovating Digital Solutions</span>
            <span class="text-gray-900 dark:text-light">for a Global Future.</span>
            <p>Specializing in web development, mobile apps, SaaS solutions, and PC gaming experiences.</p>
          </div>
          <p class="text-primary text-lg">Email: contact@settis-llc.com</p>
        </div>
        <div>
          <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Company</h4>
          <ul class="space-y-2">
            <li><a href="#" @click.prevent="navigateToSection('#hero-section')" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" @click.prevent="navigateToSection('#about')" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">About</a></li>
            <li><a href="#services" @click.prevent="navigateToSection('#services')" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Services</a></li>
            <li><a href="#contact" @click.prevent="navigateToSection('#contact')" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Legal & Support</h4>
          <ul class="space-y-2">
            <li><router-link to="/legal-notice" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Legal Notice</router-link></li>
            <li><router-link to="/privacy-policy" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Privacy Policy</router-link></li>
            <li><router-link to="/terms-of-service" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Terms of Service</router-link></li>
            <li><router-link to="/refund-policy" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Refund Policy</router-link></li>
            <li><a href="#faq" @click.prevent="navigateToSection('#faq')" class="text-lg text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Stay Connected</h4>
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
          <p class="text-lg text-gray-600 dark:text-gray-300">Subscribe to our newsletter for the latest updates</p>
          <form @submit.prevent="subscribe" class="flex mt-2">
            <!-- Honeypot field -->
            <div class="hidden">
              <label for="honeypot-footer">Do not fill this out</label>
              <input type="text" id="honeypot-footer" name="honeypot" v-model="honeypot">
            </div>
            <input type="email" v-model="email" placeholder="Your email" class="bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full text-gray-900 dark:text-light">
            <button type="submit" class="bg-primary text-white px-4 rounded-r-lg flex items-center justify-center" :disabled="loading">
              <span v-if="!loading">Subscribe</span>
              <svg v-if="loading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
        <p class="text-lg text-gray-600 dark:text-gray-300">© 2025 SETTIS LLC – All rights reserved.</p>
      </div>
    </div>
    <CustomAlert 
      :visible="showAlert" 
      :title="alertTitle" 
      :message="alertMessage" 
      @close="closeAlert" 
    />
  </footer>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
