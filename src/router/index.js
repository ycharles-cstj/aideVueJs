import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/PageAccueil.vue"),
    },
    {
      path: '/composant',
      name: 'composant',
      component: () => import("@/views/PageComposant.vue"),
    },
  ]
})

export default router
