<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from '@/components/commun/HeaderApp/HeaderApp.vue'
import FooterApp from '@/components/commun/FooterApp/FooterApp.vue'
</script>

<template>
  <HeaderApp />
  <RouterView />
  <FooterApp />
</template>

<style scoped>
</style>
