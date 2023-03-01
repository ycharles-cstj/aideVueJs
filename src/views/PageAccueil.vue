<script setup>
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";

    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Page d\'accueil'">
            <p>Mon contenu de ma page d'introduction</p>
        </TitreSection>

        <TitreContent :titre="'Création d\'un composant'">
            <p>Création d'un composant</p>
        </TitreContent>
    </main>
</div>
</template>

<style lang="scss">
    
</style>