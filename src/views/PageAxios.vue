<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue"
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue"
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue"
    import AvertissementApp from "@/components/app/AvertissementApp/AvertissementApp.vue"

    // importation de l'exemple
    import axios from 'axios'
    import { reactive, onBeforeMount } from 'vue'
    import FicheUser from "@/components/exercice/FicheUser/FicheUser.vue"

    const data = reactive({
        usagers: []
    });

    onBeforeMount(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => {
            data.usagers = response.data.results;
            console.log(data.usagers);
            console.log(data.usagers.length);
      })
      .catch(error => {
        console.error(error);
      });
  });


</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation de la librairie Axios'">
            <p class="explication">Utilisation de la librairie Axios pour récupérer des données d'un API</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure pour récupérer des données d'un API avec Axios</p>
        </TitreContent>

        <AvertissementApp>
            <p>Les API sont tous différents, mais fonctionne tous de la même façon. C'est un peu contradictoire, mais vous allez comprendre un peu mieux après. Certains API ne nécessite pas de clé d'accès pour récupérer les données, d'autres oui et vous devez faire une demande d'accès ou tout simplement payer un forfait d'utilisation. Pour les API gratuit, la majorité impose un quota d'utilissation... un quota de requête que vous pouvez faire. Au niveau des requêtes, les API sont bien différents les uns des autres. Il est nécessaire de bien lire la documentation et ne pas prendre pour acquis qu'un API Abc fonctionne d'une façon que l'API DFG va fonctionner de la même...</p>
            <p>Cependant, les API fonctionnent tous de la même façon... vous avez besoin d'un URL qui pointe vers l'API et d'une requête afin de raffiner ce que vous cherchez dans les données. Ces deux éléments sont essentiels pour votre récolte d'information. </p>
        </AvertissementApp>

        <div class="procedures">
            <ol>
                <li>Vous devez installer la librairie Axios à l'aide de npm dans votre projet : npm install axios</li>
                <li>Ensuite, vous devez importer axio from 'axios'</li>
                <li>Vous devez par la suite vous créer une constante réactive pour enmagasiner le résultat de votre requête à l'API (selon la méthode du state...)</li>
                <li>Il faut également importer un hook pour utiliser à un moment précis dans la vie du composant. Vous pouvez utiliser onBeforeMount ou onMounted</li>
                <li>À l'intérieur du hook, vous devez utiliser l'objet axios de l'importation et ajouter une promesse « get( ).then( ) »</li>
                <li>Dans la première partie => « get( ) », on insère en paramètre l'adresse URL de l'API. Dans notre cas, c'est l'adresse suivante : « https://randomuser.me/api/ ». À cette adresse, on ajoute également la requête qui débute avec le symbole suivante « ? : « ?results=3 ». La requête peut varier d'un API à l'autre et varier selon ce que l'on souhaite récupérer comme information. Il faut bien lire la documentation de l'API afin de bien construire votre requête ... sinon ... kapout l'affichage de vos données... Donc, au final l'adresse va ressembler à ceci : « https://randomuser.me/api/?results=3 »</li>
                <li>Pour la deuxième partie => « then( ) », on insère une fonction fléchée me permettant de construire la répartion des données à partir d'une propriété « response ». Je peux alors choisir dans l'objet retournée de l'API la ou les propriétés qui sont intéressantes à mes yeux à récupérer. Bien souvent il y aura une propriété results dans l'objet renvoyé. C'est cette propriété que nous allons pointer pour stocker l'information dans l'application par la suite => « state.tableauDonnees = response.data.results »</li>
                <li>Une fois l'information stockée dans l'application, vous devez simplement parcourir le tableau comme si c'était vous qui l'aviez monté manuellement à la définition du composant</li>
                <li>Dans un soucis d'efficacité de développement, on peut ajouter à la promesse un catch( ) afin de faire afficher dans la console toutes les erreurs si jamais il y a un problème qui arrive en cours de route avec l'API. Je vous recommande de l'ajouter afin de monitorer tous problèmes en cours de développement </li>
                <li>Il suffit maintenant de passer les données via le data binding à vos composants pour afficher l'information dans l'interface. Pour vous aider, effectuer un console.log du résultat envoyé par l'API afin de visualiser le nom des propriétés disponibles à afficher</li>
            </ol>
        </div>

        <AvertissementApp>
            <p>Une promesse est divisée en 2 parties : partie 1 - une action et partie 2 - quoi faire après l'action dans la première partie. Concrètement ce que cela veut dire dans le cas d'un API, la partie 1 du get me permet d'aller chercher les données sur l'API... tant est aussi longtemps que cette action n'est pas terminée, je ne peux pas faire la 2e partie qui est de transférer les données au projet donc à mon composant...  </p>
            <p>La partie 1 doit être terminée avant que la partie 2 entre en action dans l'histoire. On s'assure avec une promesse que les données sont toutes téléchargées avant de les afficher dans l'interface.</p>
        </AvertissementApp>

        <TitreContent :titre="'Exemple'">
            <p>Affichage des données récupérées de l'API</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Nous allons récupérer 10 personnes de l'API. Ces informations seront stockées dans un tableau usagers. Nous allons nous créer un composant FicheUser afin d'afficher l'information spécifique à un usager. Comme il y en a plusieurs, nous devons utiliser la directive v-for pour dupliquer la fiche selon le nombre de personnes récoltées de l'API. </p>
        </ExplicationsExemple>

        <FicheUser v-for="usager in data.usagers" :key="usager.id" 
            :nom="usager.name.first +' '+ usager.name.last "
            :photo="usager.picture.large"
            :email="usager.email"
            :phone="usager.phone"
        />
    </main>
</div>
</template>

<style lang="scss">
    
</style>