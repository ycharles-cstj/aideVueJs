<!-- eslint-disable vue/comment-directive -->
<script setup>
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import { useRouter } from 'vue-router';


    const router = useRouter();

function redirection(){

    setTimeout(() => {
        router.push({name:'produit.liste'});// /route
    }, 1000);
    
}
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Création ...'">
            <p class="explication">Création ...</p>
        </TitreSection>

        <button @click="redirection">Rediriger</button>
    </main>
</div>
</template>

<style lang="scss">
    
</style>