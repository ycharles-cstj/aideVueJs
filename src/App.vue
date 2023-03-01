<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from '@/components/commun/HeaderApp/HeaderApp.vue'
import FooterApp from '@/components/commun/FooterApp/FooterApp.vue'
</script>

<template>
  <h1>Strcuture de l'app</h1>
  <HeaderApp />
  <RouterView />
  <FooterApp />
</template>

<style scoped>
</style>
