<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";
    import AvertissementApp from "@/components/app/AvertissementApp/AvertissementApp.vue";

    // importation de l'exemple

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation des hooks spécifiques aux routes'">
            <p class="explication">Utilisation des hooks spécifiques aux routes de l'application</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure pour affecter un hook à une route</p>
        </TitreContent>

        <AvertissementApp>
            <p>Les hooks peuvent également s'appliquer aux routes de votre application. Cependant, ce n'est pas les mêmes routes qu'un composant. Le principe ou le concept est similaire : beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave, beforeEach, onRouteUpdate, onRouteActivated, onRouteDeactivated...</p>
        </AvertissementApp>

        <div class="procedures">
            <ol>
                <li>Effectuez une petite recherche sur les hooks de navigation en vue.js 3 pour cibler le hook qui est le plus pertinent selon le contexte de développement</li>
                <li>Il n'est pas nécessaire d'importer quoi que ce soit, car ces méthodes sont déjà incluse dans le « vue-router »</li>
                <li>Il est nécessaire de pointer sur l'objet « router » créé au moment de concevoir la route et d'y ajouter le hook souhaité </li>
                <li>Dans la fonction fléchée, vous pouvez ajouter les instructions souhaitées selon le contexte de développement</li>
            </ol>
        </div>

        <AvertissementApp>
            <p>Vous allez utiliser ces hooks surtout lorsque vous souhaitez valider une connexion au compte afin d'éviter de rendre accès à des éléments sans être connecté au compte, valider une donnée avant d'entrer dans la route, recalibrer certains éléments avant d'entrer dans la route... bref on est dans une logique où il faut faire quelque chose avant d'entrer dans la route...</p>
        </AvertissementApp>

    </main>
</div>
</template>

<style lang="scss">
    
</style>