<script setup>
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

                <li> <RouterLink to="/nouvellepage"><span>02</span> - Ajouter une page et une nouvelle route </RouterLink></li>

                <li> <RouterLink to="/souscomposant"><span>03</span> - Création d'un sous-composant </RouterLink></li>

                <li> <RouterLink to="/datacomposant"><span>04</span> - Intégration et affichage des données dans un composant </RouterLink></li>

                <li> <RouterLink to="/interpolation"><span>05</span> - Interpolations complexes </RouterLink></li>

                <li> <RouterLink to="/databinding"><span>06</span> - Utilisation du data binding </RouterLink></li>

                <li> <RouterLink to="/ajustscroll"><span>07</span> - Ajustement du défilement de la page à la navigation </RouterLink></li>

                <li> <RouterLink to="/directivevfor"><span>08</span> - Ajustement du défilement de la page à la navigation </RouterLink></li>

                <li> <RouterLink to="/props"><span>09</span> - Utilisation des props</RouterLink></li>

                <li> <RouterLink to="/slot"><span>10</span> - Utilisation des slots dans un composant</RouterLink></li>

                <li> <RouterLink to="/hook"><span>11</span> - Utilisation des hooks</RouterLink></li>
            </ul>
        </div>
    </main>
</div>
</template>

<style lang="scss">
    
</style>