<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";

    // importation de l'exemple

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Création d\'une page et d\'une nouvelle route'">
            <p class="explication">Création d'une page et d'une nouvelle route </p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure de création d'une nouvelle page</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Ouvrir le dossier « views »</li>
                <li>Clic droit sur le dossier et créer un nouveau fichier</li>
                <li>Renommer ce fichier selon l'exemple suivant : « PageIndex.vue »</li>
                <li>Ouvrir le dossier « pages » de la structure de dossier SCSS</li>
                <li>Clic droit sur le dossier et créer un nouveau fichier</li>
                <li>Renommer ce fichier selon le nom de la page, par exemple : « page-index.scss »</li>
                <li>Lier le fichier scss dans le fichier « pages.scss »</li>
            </ol>
        </div>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure de création d'une nouvelle route</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Ouvrir le dossier « router »</li>
                <li>Ouvrir le fichier « index.js »</li>
                <li>Recopier la route principale en vous assurant d'avoir les 3 propriétés suivantes : « path », « name », « component »</li>
                <li>Pour le  « path », la route doit commencer par / et suivi du nom de la route que vous voulez donner</li>
                <li>Pour le  « name », il s'agit du nom de la route afin de l'identifier</li>
                <li>Pour le  « component », à l'aide de la syntaxe suivant : ( ) => import(" "), vous devez </li>
            </ol>
        </div>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure pour ajouter un lien d'une route</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Ouvrir le composant de la navigation ou le bouton</li>
                <li>Utiliser le composant de Vue-Router « RouterLink »</li>
                <li>Modifier l'attribut « to » afin d'ajouter la même valeur que la propriété « path » préalablement configurée dans la route</li>
                <li>Ajouter les styles nécessaires dans le dossier SCSS selon s'il s'agit d'une navigation ou d'un bouton</li>
            </ol>
        </div>
    </main>
</div>
</template>

<style lang="scss">
    
</style>