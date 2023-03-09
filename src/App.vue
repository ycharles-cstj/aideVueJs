<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from '@/components/commun/HeaderApp/HeaderApp.vue'
import FooterApp from '@/components/commun/FooterApp/FooterApp.vue'
</script>

<template>
<div class="structure">
  <HeaderApp />
  <RouterView class="router-view" v-slot="{Component}">
    <Transition name="page-slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <FooterApp />
</div>
</template>

<style scoped>
.page-opacity-enter-active, .page-opacity-leave-active{
  transition: 600ms ease all
}

.page-opacity-enter-from, .page-opacity-leave-to{
  opacity : 0;
}

.page-slide-enter-active, .page-slide-leave-active{
  transition: 400ms ease all
}

.page-slide-enter-from, .page-slide-leave-to{
  opacity : 0;
  transform : translateY(60px);
}
</style>
