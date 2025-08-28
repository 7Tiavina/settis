<script setup lang="ts">
// Aucune logique spécifique nécessaire pour le moment
</script>

<template>
  <section id="faq" class="py-20 bg-light dark:bg-dark">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate__animated animate__fadeInUp">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-light">Questions <span class="text-primary">Fréquentes</span></h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Trouvez des réponses aux questions courantes sur nos services, nos processus et la façon dont nous pouvons vous aider à concrétiser vos projets digitaux.</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.1s;">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Quels types de projets SETTIS LLC propose-t-elle?</h3>
          <p class="text-gray-600 dark:text-gray-300">Nous proposons une large gamme de services incluant le développement web et mobile, les solutions SaaS d'entreprise, et le développement de jeux PC. Que vous ayez besoin d'une application personnalisée, d'une plateforme cloud ou d'un jeu, nous avons l'expertise nécessaire.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Quel est le délai typique pour un projet?</h3>
          <p class="text-gray-600 dark:text-gray-300">Le délai dépend de la complexité et de la portée du projet. Les projets simples peuvent prendre 2-4 semaines, tandis que les projets plus complexes peuvent nécessiter 3-6 mois. Nous fournissons un calendrier détaillé après l'évaluation initiale de vos besoins.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.3s;">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Fournissez-vous un support et une maintenance continus?</h3>
          <p class="text-gray-600 dark:text-gray-300">Oui, nous proposons des plans de support et de maintenance continus pour tous nos projets. Cela inclut les mises à jour, la correction de bugs, l'optimisation des performances et l'assistance technique selon vos besoins.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Pouvez-vous travailler avec des systèmes existants et des intégrations tierces?</h3>
          <p class="text-gray-600 dark:text-gray-300">Absolument. Nous avons de l'expérience dans l'intégration avec divers systèmes, API et services tiers. Nous pouvons travailler avec votre infrastructure existante ou recommander de nouvelles solutions qui s'intègrent parfaitement.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.5s;">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Quelle est votre structure tarifaire?</h3>
          <p class="text-gray-600 dark:text-gray-300">Nous proposons des modèles de tarification flexibles selon le projet : forfaitaire pour les projets bien définis, taux horaire pour les travaux continus, et modèles d'abonnement pour les services SaaS. Contactez-nous pour une estimation personnalisée.</p>
        </div>
        <div class="bg-light dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700 card-hover animate__animated animate__fadeInUp" style="animation-delay: 0.6s;">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-light">Travaillez-vous avec des clients internationaux?</h3>
          <p class="text-gray-600 dark:text-gray-300">Oui, nous servons des clients du monde entier. Notre équipe est répartie dans différents fuseaux horaires, ce qui nous permet de fournir un support quasi continu et de collaborer efficacement avec des clients internationaux.</p>
        </div>
      </div>

      <div class="text-center mt-12 animate__animated animate__fadeInUp">
        <p class="text-xl mb-8 text-gray-900 dark:text-light">Vous ne trouvez pas la réponse que vous cherchez? Notre équipe est là pour vous aider.</p>
        <button @click="$router.push('#contact')" class="relative h-12 overflow-hidden rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-2">
          <span class="relative">Contactez-nous</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Nous ajouterons ici les styles spécifiques si nécessaire */
</style>