<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";
    import AvertissementApp from "../components/app/AvertissementApp/AvertissementApp.vue";

    // importation de l'exemple
    import { reactive } from 'vue';

    const state = reactive({
        texte: 'Mon texte de la page...'
    });
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Intégration et utilisation des données d\'un composant'">
            <p class="explication">Intégration dans le composant dy système de données à l'aide des states et l'affichage simple des données dans l'interface</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'intégration des données dans un composant</p>
        </TitreContent>

        <div class="procedures">
            <ol>
            
                <li>Dans la balise « script » du composant ou de la page, vous devez importer « reactive » de 'vue' => import { reactive } from 'vue'</li>
                <li>Ensuite, un peu comme avec le Data, on ajoute les propriétés qui serviront à stocker l'information, par exemple : titre, texte, personnes...</li>
                <li>Pour utiliser ces données dans le « template » de la page ou du composant, il faut utiliser la syntaxe à point selon la forme suivante : state.titre ou state.texte...</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Affichage des données dans le template du composant</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Dans la balise « script » de la page, nous avons la propriété texte. Il est possible d'afficher dans le « template » de la page ou du composant cette valeur en utilisant une interpolation</p>
        </ExplicationsExemple>


        <p class="exemple">{{ state.texte }}</p>

        <AvertissementApp>
            <p>Il est possible de rendre global les données à toute l'application. Dans ce cas, il faut changer l'approche et utilise Vuex. Vuex est destiné à gérer les données d'un projet utilisant cette mise en place (SPA). Nous verrons un exemple pour le travail synthèse. Pour le moment, concentrez-vous sur cette procédure. </p>
        </AvertissementApp>

    </main>
</div>
</template>

<style lang="scss">
    
</style>