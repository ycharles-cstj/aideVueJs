<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";
    import AvertissementApp from "../components/app/AvertissementApp/AvertissementApp.vue";



    // importation de l'exemple
    import { reactive } from 'vue';

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
        <TitreSection :titreSection="'Utilisation de la directive v-for'">
            <p class="explication">Utilisation de la directive v-for pour dupliquer un même composant</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'utilisation de la directive v-for</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state</li>
                <li>Pour utiliser la directive v-for, il faut que les données soient à l'intérieur d'un tableau. Chaque entrée du tableau correspond à un objet JSon contenant les propriétés d'un élément. Ces propriétés sont dans tous les élements du tableau sans exception</li>
                <li>Pour accéder à ces propriétés, on doit utiliser la syntaxe à point => state.propriete.proprieteDuTableau</li>
                <li>La directive v-for se divise en 2 parties : la première étant un élément du tableau et la seconde représentant tous les éléments du tableau => element in elements</li>
                <li>On applique cette directive sur la balise d'un conteneur possédant la mise en forme pour afficher l'information stockée</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Utilisation de la directive v-for pour dupliquer une mise en page</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>L'exemple suivant démontre l'utilisation de la directive v-for afin de dupliquer la mise en page selon le nombre d'éléments dans mon tableau dans mes données de mon composant ou de ma page. Dans le cas présent, j'ai 3 éléments à afficher afin d'avoir 3 fiches de personnages dans la page. </p>
        </ExplicationsExemple>

        <div class="fiche-perso" v-for="personnage in state.personnages" :key="personnage.id">
            <div class="wrapPerso">
                <div class="wrapImg">
                    <div class="image">
                        <img :src="personnage.photo" :alt="personnage.nom">
                    </div>
                </div>

                <div class="wrapInfo">
                    <div class="infoPerso">
                        <span>Le nom du personnage : </span> 
                        <span v-text="personnage.nom"></span>
                    </div>
                    <div class="infoPerso">
                        <span>Le pouvoir : </span> 
                        <span v-text="personnage.pouvoir"></span>
                    </div>
                    <div class="infoPerso">
                        <span>Le HP du personnage : </span> 
                        <span v-text="personnage.hp"></span>
                    </div>
                    <div class="infoPerso">
                        <span>Sa faiblesse : </span> 
                        <span v-text="personnage.faiblesse"></span>
                    </div>
                </div>
            </div>
        </div>

        <AvertissementApp>
            <p>En temps normal, vous devrez encapsuler cette fiche dans un composant. Pour intégrer les informations à l'intérieur du composant, vous devez utiliser une props. Cette props fonctionne un peu comme un paramètre dans une fonction. </p>
        </AvertissementApp>
    </main>
</div>
</template>

<style lang="scss">
    
</style>