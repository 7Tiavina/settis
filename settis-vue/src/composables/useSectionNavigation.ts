import { useRouter, useRoute } from 'vue-router'
import { useGsapAnimations } from '@/composables/useGsapAnimations'

export function useSectionNavigation() {
  const router = useRouter()
  const route = useRoute()
  const { scrollToSection } = useGsapAnimations()

  const navigateToSection = (sectionId: string) => {
    if (route.path === '/') {
      scrollToSection(sectionId)
    } else {
      router.push(`/${sectionId}`)
    }
  }

  return {
    navigateToSection,
  }
}
