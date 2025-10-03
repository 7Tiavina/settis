import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimations() {
  let ticking = false
  
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated')
    
    elements.forEach(element => {
      // Vérifier si l'élément est dans les sections FAQ ou Contact
      const isInFAQ = element.closest('#faq')
      const isInContact = element.closest('#contact')
      
      // Ne pas animer les éléments des sections FAQ et Contact
      if (isInFAQ || isInContact) {
        return
      }
      
      const rect = element.getBoundingClientRect()
      const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0)
      
      // Vérifier si l'élément est visible
      if (isVisible) {
        // Vérifier si l'élément a déjà été animé
        if (!element.hasAttribute('data-animated')) {
          // Marquer l'élément comme animé
          element.setAttribute('data-animated', 'true')
          
          // Obtenir l'animation de base de l'élément
          let baseAnimation = ''
          const animationClasses = Array.from(element.classList).filter(cls => cls.startsWith('animate__'))
          
          // Trouver l'animation principale (autre que animate__animated)
          for (const cls of animationClasses) {
            if (cls !== 'animate__animated') {
              baseAnimation = cls
              break
            }
          }
          
          // Définir des animations alternatives en fonction de l'animation de base
          let animationVariants = [baseAnimation]
          switch (baseAnimation) {
            case 'animate__fadeInUp':
              animationVariants = ['animate__fadeInUp', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__zoomIn']
              break
            case 'animate__fadeInDown':
              animationVariants = ['animate__fadeInDown', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__bounceIn']
              break
            case 'animate__fadeInRight':
              animationVariants = ['animate__fadeInRight', 'animate__fadeInUp', 'animate__fadeInDown', 'animate__slideInRight']
              break
            default:
              // Pour les éléments sans animation spécifique, utiliser une variante aléatoire
              animationVariants = ['animate__fadeInUp', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__zoomIn', 'animate__bounceIn']
          }
          
          // Choisir une animation aléatoire parmi les variantes
          const randomAnimation = animationVariants[Math.floor(Math.random() * animationVariants.length)]
          
          // Supprimer toutes les classes d'animation
          animationClasses.forEach(cls => element.classList.remove(cls))
          
          // Forcer un reflow
          void (element as HTMLElement).offsetWidth
          
          // Réajouter les classes d'animation avec la nouvelle animation
          element.classList.add('animate__animated')
          element.classList.add(randomAnimation)
        }
      } else {
        // Si l'élément n'est pas visible, supprimer le marqueur pour permettre la réanimation
        if (element.hasAttribute('data-animated')) {
          element.removeAttribute('data-animated')
        }
      }
    })
    
    // Gérer les éléments personnalisés (card-hover, process-step, etc.) - sauf ceux dans les sections FAQ et Contact
    const customElements = document.querySelectorAll('.card-hover, .process-step, .service-card, .stats-card')
    customElements.forEach(element => {
      // Vérifier si l'élément est dans les sections FAQ ou Contact
      const isInFAQ = element.closest('#faq')
      const isInContact = element.closest('#contact')
      
      // Ne pas animer les éléments des sections FAQ et Contact
      if (isInFAQ || isInContact) {
        return
      }
      
      const rect = element.getBoundingClientRect()
      const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0)
      
      if (isVisible) {
        element.classList.add('opacity-100')
        element.classList.remove('opacity-0')
      } else {
        // Réinitialiser l'opacité pour permettre la réanimation
        element.classList.remove('opacity-100')
        element.classList.add('opacity-0')
      }
    })
    
    ticking = false
  }
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(animateOnScroll)
      ticking = true
    }
  }
  
  const initializeCustomElements = () => {
    const customElements = document.querySelectorAll('.card-hover, .process-step, .service-card, .stats-card')
    customElements.forEach(element => {
      // Vérifier si l'élément est dans les sections FAQ ou Contact
      const isInFAQ = element.closest('#faq')
      const isInContact = element.closest('#contact')
      
      // Ne pas animer les éléments des sections FAQ et Contact
      if (!isInFAQ && !isInContact) {
        element.classList.add('opacity-0')
        element.classList.add('transition-opacity')
        element.classList.add('duration-700')
      }
    })
    
    // Initial check
    animateOnScroll()
  }
  
  onMounted(() => {
    // Initialize elements with opacity-0 for custom animations
    initializeCustomElements()
    
    // Listen for scroll events with requestAnimationFrame for better performance
    window.addEventListener('scroll', requestTick)
  })
  
  onBeforeUnmount(() => {
    // Remove scroll event listener
    window.removeEventListener('scroll', requestTick)
  })
  
  return {
    animateOnScroll,
    initializeCustomElements
  }
}