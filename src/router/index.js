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
    {
      path: '/ajustscroll',
      name: 'ajustscroll',
      component: () => import("@/views/PageAjustScroll.vue"),
    },
    {
      path: '/directivevfor',
      name: 'directivevfor',
      component: () => import("@/views/PageVFor.vue"),
    },
    {
      path: '/props',
      name: 'props',
      component: () => import("@/views/PageProps.vue"),
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import("@/views/PageSlot.vue"),
    },
    {
      path: '/hook',
      name: 'hook',
      component: () => import("@/views/PageHook.vue"),
    },
    {
      path: '/hookroute',
      name: 'hookroute',
      component: () => import("@/views/PageHookRoute.vue"),
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import("@/views/PageAxios.vue"),
    },
    {
      path: '/useevent',
      name: 'useevent',
      component: () => import("@/views/PageEvent.vue"),
    },
    {
      path: '/stylecondition',
      name: 'stylecondition',
      component: () => import("@/views/PageStyleCondition.vue"),
    },
  ],
  scrollBehavior() {
    // always scroll to top
    //return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  window.scrollTo({top: 0});
  console.log('////////////')
  next();
});


export default router
