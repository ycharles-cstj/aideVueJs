<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import { reactive } from 'vue';

    const data = reactive({
        affichage : true,
    });
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation de la directive v-show'">
            <p class="explication">Utilisation de la directive v-show pour afficher et masquer des éléments dans l'interface</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'utilisation de la direction de v-show'</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state afin d'initialiser les booléens nécessaires</li>
                <li>Ensuite, vous devez mettre la directive v-show sur l'élément de votre choix. Comme paramètre, vous devez ajouter la propriété du data afin de tester si c'est true (affiche) si c'est false (masque)</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Utilisation de la directive v-show sur un élément de l'interface</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Dans le cas où la propriété affichage est à false, l'élément div.exemple ne sera pas affiché dans l'interface. Cependant, si on change la valeur de la propriété affichage, l'élément sera visible dans l'interface. De ce cette manière, plus besoin de gérer le display none ou de monter un système conditionnel afin de faire afficher ou pas un élément. En utilisant cette directive, le travail est de loin simplifié. </p>
        </ExplicationsExemple>

        <div class="exemple" v-show="data.affichage">Je suis visible dans le DOM</div>
    </main>
</div>
</template>

<style lang="scss">
    
</style>