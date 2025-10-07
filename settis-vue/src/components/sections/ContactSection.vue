<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import CustomAlert from '../common/CustomAlert.vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const honeypot = ref('') // Honeypot field

const loading = ref(false)
const showAlert = ref(false)
const alertTitle = ref('')
const alertMessage = ref('')

const submitForm = async () => {
  loading.value = true;
  const delay = new Promise(resolve => setTimeout(resolve, 2000));

  try {
      await Promise.all([
    axios.post('https://settis-llc.com/backend/contact.php', {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      honeypot: honeypot.value
    }),
    delay
  ]);
    alertTitle.value = 'Message Sent';
    alertMessage.value = 'Thank you for your message! We will contact you soon.';
    showAlert.value = true;
    // Reset form after submission
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
    honeypot.value = ''
  } catch (error: any) {
    await delay;
    console.error('Error submitting form:', error);
    alertTitle.value = 'Error';
    if (error.response && error.response.data && error.response.data.errors) {
      alertMessage.value = error.response.data.errors.map((e: any) => e.msg).join(' ');
    } else {
      alertMessage.value = 'An error occurred while sending the message. Please try again.';
    }
    showAlert.value = true;
  } finally {
    loading.value = false;
  }
}

const closeAlert = () => {
  showAlert.value = false
}
</script>
<template>
  <section id="contact" class="py-20 bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-light">
          Contact <span class="text-primary">Us</span>
        </h2>
        <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ready to start your next project? Contact our team to discuss how we can help bring your digital vision to life.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="animate__animated animate__fadeInUp">
          <form class="space-y-6" @submit.prevent="submitForm">
            <!-- Honeypot field -->
            <div class="hidden">
              <label for="honeypot">Do not fill this out</label>
              <input type="text" id="honeypot" name="honeypot" v-model="honeypot">
            </div>
            <div>
              <label for="name" class="block mb-2 text-lg text-gray-900 dark:text-light">Full Name *</label>
              <input type="text" id="name" v-model="name" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" required>
            </div>
            <div>
              <label for="email" class="block mb-2 text-lg text-gray-900 dark:text-light">Email *</label>
              <input type="email" id="email" v-model="email" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your.email@example.com" required>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-lg text-gray-900 dark:text-light">Subject *</label>
              <input type="text" id="subject" v-model="subject" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="What is it about?" required>
            </div>
            <div>
              <label for="message" class="block mb-2 text-lg text-gray-900 dark:text-light">Message *</label>
              <textarea id="message" rows="5" v-model="message" class="w-full bg-light dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your project or request..." required></textarea>
            </div>
            <button type="submit" class="relative h-12 w-full overflow-hidden rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-2 mt-4 flex items-center justify-center" :disabled="loading">
              <span v-if="!loading">Send Message</span>
              <svg v-if="loading" class="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>

        <div class="animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <div class="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
            <h3 class="text-3xl font-semibold mb-6 text-gray-900 dark:text-light">Stay in Touch</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">We are here to help you succeed. Whether you need a custom web app, mobile app, or have questions about our services, our team is ready to assist.</p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-envelope text-light"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-light">Email</h4>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Send us an email anytime</p>
                  <p class="text-primary text-lg">contact@settis-llc.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt text-light"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-light">Address</h4>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Our headquarters</p>
                  <p class="text-primary text-lg">117 South Lexington Street Ste 100<br>Harrisonville, MO 64701<br>United States of America</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-clock text-light"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-light">Opening Hours</h4>
                  <p class="text-lg text-gray-600 dark:text-gray-300">When we are available</p>
                  <p class="text-primary text-lg">Monday - Friday: 9:00 AM - 6:00 PM CST<br>Saturday: 10:00 AM - 2:00 PM CST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CustomAlert 
      :visible="showAlert" 
      :title="alertTitle" 
      :message="alertMessage" 
      @close="closeAlert" 
    />
  </section>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
