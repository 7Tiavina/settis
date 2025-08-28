import { onMounted } from 'vue'
import gsap from 'gsap'

export function useGsapAnimations() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: element.offsetTop - 80
        },
        ease: 'power2.inOut'
      })
    }
  }
  
  onMounted(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const targetId = this.getAttribute('href')
        
        if (targetId === '#') {
          gsap.to(window, { duration: 0.5, scrollTo: 0, ease: 'power2.inOut' })
          return
        }
        
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          // Close mobile menu if open
          const menu = document.getElementById('mobile-menu')
          if (menu) {
            menu.classList.add('hidden')
          }
          
          gsap.to(window, {
            duration: 0.5,
            scrollTo: {
              y: targetElement.offsetTop - 80
            },
            ease: 'power2.inOut'
          })
        }
      })
    })
  })
  
  return {
    scrollToSection
  }
}