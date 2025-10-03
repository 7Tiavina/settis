import { onMounted } from 'vue'
import gsap from 'gsap'

export function useGsapAnimations() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId) as HTMLElement
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
        
        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute('href')
        
        if (targetId === '#') {
          gsap.to(window, { duration: 0.5, scrollTo: 0, ease: 'power2.inOut' })
          return
        }
        
        if (targetId) {
          const targetElement = document.querySelector(targetId) as HTMLElement
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
        }
      })
    })
  })
  
  return {
    scrollToSection
  }
}