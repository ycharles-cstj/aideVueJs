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
    {
      path: '/nouvellepage',
      name: 'nouvellepage',
      component: () => import("@/views/PageNouvellePage.vue"),
    },
    {
      path: '/souscomposant',
      name: 'souscomposant',
      component: () => import("@/views/PageSousComposant.vue"),
    },
    {
      path: '/datacomposant',
      name: 'datacomposant',
      component: () => import("@/views/PageIntegrationData.vue"),
    },
    {
      path: '/interpolation',
      name: 'interpolationAvance',
      component: () => import("@/views/PageInterpolation.vue"),
    },
    {
      path: '/databinding',
      name: 'databinding',
      component: () => import("@/views/PageDataBinding.vue"),
    },
  ]
})

export default router
