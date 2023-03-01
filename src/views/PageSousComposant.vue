<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import AvertissementApp from "@/components/app/AvertissementApp/AvertissementApp.vue"
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import CreationSousComposant from '@/components/exercice/CreationSousComposant/CreationSousComposant.vue';
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Création d\'un sous-composant'">
            <p class="explication">Création et l'intégration d'un sous-composant dans un composant existant</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure de création d'un sous-composant</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>À partir d'un composant existant, par exemple : « HeaderApp »</li>
                <li>Clic droit sur le dossier et créer un nouveau fichier</li>
                <li>Renommer ce fichier selon l'exemple suivant : « LogoHeader.vue »</li>
                <li>Ouvrir le fichier du composant principal, par exemple : « HeaderApp »</li>
                <li>Importer le fichier en prenant soin de préciser le nom du composant et le lien vers le composant à partir du dossier src avec l'alias @/</li>
                <li>Dans la balise « template » du composant principal, il faut ajouter la balise du composant. </li>
            </ol>
        </div>

        <AvertissementApp>
            <p>Il est important que le nom du composant soit le même dans la balise du composant et également dans la ligne d'importation.</p>
        </AvertissementApp>

        <TitreContent :titre="'Exemple'">
            <p>Création d'un composant qui affiche un contenu temporaire</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Ce premier exemple démontre la création du composant « CreationComposant ». Celui-ci affichera du texte dans une balise de paragraphe. </p>
        </ExplicationsExemple>


        <CreationSousComposant />
    </main>
</div>
</template>

<style lang="scss">
    
</style>