<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Création d\'un nouveau composant'">
            <p class="explication">Création et l'intégration d'un nouveau composant dans une page de mon application</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure de création d'un nouveau composant</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li></li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Création d'un composant qui affiche un contenu temporaire</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Ce premier exemple démontre la création du composant « CreationComposant ». Celui-ci affichera du texte dans une balise de paragraphe. </p>
        </ExplicationsExemple>


        <CreationComposant />
    </main>
</div>
</template>

<style lang="scss">
    
</style>