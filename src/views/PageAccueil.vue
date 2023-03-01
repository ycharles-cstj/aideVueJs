<script setup>
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";

    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";


</script>

<template>
<div class="interface">
    <main>
        
        <TitreSection :titreSection="'Guide de procédures Vue.js'">
            <p class="explication">Votre guide de référence pour le développement en Vue.js de vos productions de la session</p>
        </TitreSection>

        
        
        <div class="tableMatieres">
        
            <p>Table des matières</p>

            <ul class="listeContenu">
                <li> <RouterLink to="/composant"><span>01</span> - Ajouter un composant </RouterLink></li>
            </ul>
        </div>



        <TitreContent :titre="'Création d\'un composant'">
            <p>Création d'un composant</p>
        </TitreContent>

    </main>
</div>
</template>

<style lang="scss">
    
</style>