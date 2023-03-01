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
                <li> <span>01</span> - Ajouter un composant</li>
                <li> <span>02</span> - Ajouter une page et une nouvelle route</li>
                <li> <span>03</span> - Ajouter un lien avec RouterLink</li>
                <li> <span>04</span> - </li>
                <li> <span>05</span> - </li>
                <li> <span>06</span> - </li>
                <li> <span>07</span> - </li>
                <li> <span>08</span> - </li>
                <li> <span>09</span> - </li>
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