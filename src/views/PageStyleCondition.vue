<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import { reactive } from 'vue';

    const data = reactive({
        erreur : false,
        avertissement : false
    });

    function gererMsg(pErreur, pAvert){
        console.log(pErreur, pAvert)
        data.erreur = pErreur;
        data.avertissement = pAvert;
    }

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation des styles conditionnels'">
            <p class="explication">Utilisation de styles conditionnels afin de personnaliser l'affichage</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'intégration d'un style conditionnel</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state afin d'initialiser les booléens nécessaires</li>
                <li>Ensuite, il faut définir les classes SCSS nécessaires selon la mise en forme souhaitée pour chacun des cas de figure</li>
                <li>À l'aide de la directive v-if, vous récupérez les valeurs des booléens du data. Si la valeur est true, alors la classe va s'ajouter à l'élément</li>
                <li>Il faut également binder la classe selon le cas (si c'est true) </li>
                <li>Tous les cas de figure d'une condition if en Javascript sont applicables dans la directive v-if </li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Affectation du style en fonction de conditions</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Dans l'exemple ici, nous avons 3 boutons qui vont nous permettre de faire un Reset, Activer une erreur, Activer un avertissement. Selon le cas activé, il y aura un changement dans le visuel du message. </p>
        </ExplicationsExemple>

        <button @click="gererMsg(false, false)">Reset</button>
        <button @click="gererMsg(true, false)">Activer l'erreur</button>
        <button @click="gererMsg(false, true)">Activer l'avertissement</button>
        <div>Erreur :  {{data.erreur}} / Avertissement : {{data.avertissement}}</div> 
        <h1>Attention!</h1>
        
        <p v-if="data.avertissement" :class="{warning : data.avertissement}"> Ceci est un avertissement...</p>

        <p v-else-if="data.erreur" :class="{error : data.erreur}"> Ceci est un message d'erreur!!!</p>

        <p v-else-if="!data.erreur && !data.avertissement" :class="{texte :!data.erreur && !data.avertissement}"> Ne pas prendre en considération ce message</p> 

        <!-- Option 1 -->
        <p v-else> Peut aussi écrire : "Ne pas prendre en considération ce message"</p>
        <!-- Ou option 2, mais pas les 2 -->

    </main>
</div>
</template>

<style lang="scss">
    
</style>