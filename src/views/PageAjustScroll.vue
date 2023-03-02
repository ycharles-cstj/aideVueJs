<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import AvertissementApp from "../components/app/AvertissementApp/AvertissementApp.vue";

    // importation de l'exemple

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Ajustement du défilement'">
            <p class="explication">Ajustement du défilement au moment de naviguer entre les pages de l'application</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure afin d'ajuster le défilement à la navigation dans l'application</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Ouvrir le fichier index.js afin d'accéder aux routes du projet</li>
                <li>Cibler la fin du tableau des routes</li>
                <li>Ajouter la fonction scrollBehavior avec les paramètres to, from et savedPosition</li>
                <li>Effectuer un retour à la position top:0 en utilisant un objet et une propriété top return { top: 0 }</li>
                <li>ESLint va créer automatiquement 3 erreurs dans les « problèmes ». Il faut les ignorer. </li>
            </ol>
        </div>

        <AvertissementApp>
            <p>Si vous ne mettez pas cet ajustement à la route, le système va garder en tête l'endroit où vous avez quitté la page. Quand vous revenez, vous reprenez au même endroit. Ce n'est pas le comportement souhaité lorsqu'on visite un site. </p>

            <p>Plusieurs sites utilisent un menu plein hauteur et pleine largeur afin de camoufler le défilement automatique vers le haut de la page. Pendant que nous voyons le menu plein écran, en arrière le site se repositionne dans le haut de la page. </p>

            <p>Avec les tansitions, on risque également d'atténuer ce défilement qui peut être assez agressif => pensez au site de Design 3 qui n'a pas de correction pour atténuer cet effet présentement. </p>
        </AvertissementApp>
    </main>
</div>
</template>

<style lang="scss">
    
</style>