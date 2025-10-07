<template>
  <div class="relative">
    <button @click="toggleDropdown" class="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
      <span class="font-medium">{{ currentLanguage }}</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    <div v-if="isOpen" class="absolute right-0 mt-2 w-40 bg-white dark:bg-dark rounded-lg shadow-lg py-1 border border-gray-200 dark:border-gray-700">
      <a href="#" @click.prevent="setLocale('en')" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">English</a>
      <a href="#" @click.prevent="setLocale('fr')" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Français</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const setLocale = (lang: string) => {
  locale.value = lang;
  isOpen.value = false;
};

const currentLanguage = computed(() => {
  return locale.value === 'en' ? 'English' : 'Français';
});
</script>
