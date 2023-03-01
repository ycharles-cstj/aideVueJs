<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import CreationComposant from '@/components/exercice/CreationComposant/CreationComposant.vue';

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
                <li>Ouvrir le dossier « components » du dossier SRC</li>
                <li>Clic droit sur le dossier et créer un nouveau dossier</li>
                <li>Renommer ce dossier selon l'exemple suivant : « HeaderApp »</li>
                <li>Clic droit sur ce nouveau dossier et créer un nouveau fichier</li>
                <li>Renommer ce fichier selon le nom du dossier, par exemple : « HeaderApp.vue »</li>
                <li>Ouvrir le dossier « components » de la structure de dossier SCSS</li>
                <li>Clic droit sur le dossier et créer un nouveau dossier</li>
                <li>Renommer ce dossier selon l'exemple suivant : « header »</li>
                <li>Clic droit sur le dossier et créer un nouveau fichier</li>
                <li>Renommer ce fichier selon le nom de la page, par exemple : « header.scss »</li>
                <li>Lier le fichier scss dans le fichier « components.scss »</li>
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