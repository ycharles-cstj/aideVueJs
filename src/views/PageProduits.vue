<!-- eslint-disable vue/comment-directive -->
<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import AffichageListe from '@/components/exercice/AffichageData/AffichageListe.vue'
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Mise en place de la séquence complète d\'affichage des données'">
            <p class="explication">Mise en place de la séquence complète d'affichage des données en provenance d'un API : de la liste à la fiche détaillée</p>
        </TitreSection>

        <AffichageListe/>


        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure de ...</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li></li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>...</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>... </p>
        </ExplicationsExemple>

    </main>
</div>
</template>

<style lang="scss">
    
</style>