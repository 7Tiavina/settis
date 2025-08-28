import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark'
    } else {
      isDarkMode.value = prefersDark
    }
    
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    }
  }
  
  onMounted(() => {
    initializeTheme()
  })
  
  return {
    isDarkMode,
    toggleTheme,
    initializeTheme
  }
}