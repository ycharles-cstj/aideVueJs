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
                <li> <span>04</span> - Création d'un sous-composant</li>
                <li> <span>05</span> - Utilisation des interpolations</li>
                <li> <span>06</span> - Data binding</li>
                <li> <span>07</span> - Création des props</li>
                <li> <span>08</span> - Utilisation des évènements</li>
                <li> <span>09</span> - Utilisation des v-slot</li>
                <li> <span>10</span> - Gestion des fonctions</li>
                <li> <span>11</span> - Utilisation de stop </li>
                <li> <span>12</span> - Utilisation des hook </li>
                <li> <span>13</span> - Utilisation des styles conditionnels et v-show</li>
                <li> <span>14</span> - Utilisation du v-model et des formulaires</li>
                <li> <span>15</span> - Utilisation de v-for</li>
                <li> <span>16</span> - Axios</li>
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