<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-light dark:bg-dark rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto border border-gray-200 dark:border-gray-700">
      <div class="text-center">
        <h3 class="text-2xl font-semibold mb-4 text-primary">{{ title }}</h3>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">{{ message }}</p>
        <button @click="close" class="relative h-12 overflow-hidden rounded-full border-2 border-primary bg-primary px-5 py-2.5 text-white font-semibold transition-all duration-300 hover:bg-transparent hover:text-primary">
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Message'
  },
  message: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>
