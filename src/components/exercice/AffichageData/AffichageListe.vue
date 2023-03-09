<script setup>
import { reactive, onBeforeMount } from 'vue';
import axios from "axios";
import ItemProduit from '@/components/exercice/AffichageData/ItemProduit.vue'

const data = reactive({
    produits: null
});

onBeforeMount(()=> {
    axios.get("http://magasin.mboudrea.tim-cstj.ca/api/produit/alea/9").then(reponse => {
        data.produits = reponse.data.produits;
    });
});
</script>

<template>
    <div class="liste" v-if="data.produits">
        <ItemProduit :item="produit" v-for="produit in data.produits" :key="produit.id"></ItemProduit>
    </div>
</template>

<style lang="scss">
    
</style>