<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";
    import AvertissementApp from "@/components/app/AvertissementApp/AvertissementApp.vue";

    // importation de l'exemple
    import { reactive } from 'vue';
    import FichePerso from "@/components/exercice/FichePerso/FichePerso.vue";

    const state = reactive({
        personnages : [
            {
                id:1,
                photo:"/src/assets/img/glomstar.jpeg", 
                nom:'Glomstar', 
                pouvoir:'Rire dévastateur', 
                hp:'300', 
                faiblesse:"Alergique aux enfants"
            },
            {
                id:2,
                photo:"/src/assets/img/flomoust.jpeg", 
                nom:'Flomoust', 
                pouvoir:'Yeux hypnotisants', 
                hp:'500', 
                faiblesse:"Ne tolère pas l'incompétence"
            },
            {
                id:3,
                photo:"/src/assets/img/zerk.jpeg", 
                nom:'Zerk', 
                pouvoir:'Lance du sang contaminé', 
                hp:'100', 
                faiblesse:"Les clowns"
            }
        ]
    });
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation des props'">
            <p class="explication">Utilisation des props pour récupérer les données dans un composant </p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'utilisation des props</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Pour utiliser les props, il vous faut un composant à l'intérieur d'une page</li>
                <li>À l'intérieur du composant ciblé, vous devez ajouter dans la balise « script » la définition des props à intégrer.  </li>
                <li>Vous devez utiliser un objet JSon pour stocker l'information dans les props. Donc, chaque props devient une propriété de l'objet. </li>
                <li>Chacune des propriétés stockera un objet contenant trois propriétés : type, required et default</li>
                <li>Pour l'objet principal Json, il devra être défini par la méthode de Vue defineProps( ) </li>
                <li>Pour paramétrer ces props, vous devez ajouter sur la balise du composant le nom de la props de la même façon qu'un attribut HTML. Vous devez également binder cette information en utilisant les : => :nom="le.chemin.vers.ma.donnee" </li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Affichage de la fiche de personnage à partir d'un composant</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Une props c'est comme un paramètre d'une fonction. On passe des informations au moment de l'appeler, et on est en mesure de récupérer ces informations à l'intérieur au moment d'effectuer les instructions.</p>
        </ExplicationsExemple>

        <FichePerso v-for="personnage in state.personnages" :key="personnage.id"
            :nom="personnage.nom"
            :photo="personnage.photo"
            :pouvoir="personnage.pouvoir"
            :hp="personnage.hp"
            :faiblesse="personnage.faiblesse"  
        />

        <AvertissementApp>
            <p>En procédant de la sorte, vous vous inscrivez dans la philosophie de récupération des composants dans un projet Vue.js. Si jamais vous avez une modification à faire, vous le faites à l'intérieur du composant FichePerso. Partout où vous utilisez ce composant, la modification sera appliquée automatiquement. Cette façon de faire est celle à préconiser dans le cours.  </p>
        </AvertissementApp>
    </main>
</div>
</template>

<style lang="scss">
    
</style>