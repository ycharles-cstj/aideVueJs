<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import { ref, reactive } from 'vue';

    const data = reactive({
        compteur : ref(0)
    })

    function avertissement(){
        alert('// Message d\'erreur //')
    }

    function afficher(param){
        if(param == 'popup'){
            alert('La valeur du compteur est de '+ data.compteur);
        }else if(param == 'console'){
            console.log('La valeur du compteur est de '+ data.compteur);
        }
    }
    
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation des évènements'">
            <p class="explication">Utilisation des évènements de Vue dans l'interface</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'intégration des évènements de Vue dans l'interface</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Pour utiliser un évènement, vous devez utiliser le symbole suivant : @ suivi du nom de l'évènement. Par exemple, @click, @scroll, @input, @submit, @keydown, @keyup, @mousemove, @mouseenter, @mouseleave, @focus et @blur. Il y en a d'autres, à vous de les découvrir dans la documentation</li>
                <li>Vous devez ajouter l'évènement directement sur l'élément ciblé de la façon suivante : @click="monCallBack". Comme paramètre, vous devez insérer le nom du callback ou le nom de la propriété à affecter avec une incrémentation ou une décrémentation si c'est un évènement de type click</li>
                <li>Dans le cas d'une manipulation d'une propriété, Vue va ajouter la référence de l'objet $event automatiquement dans le paramètre de l'évènement sélectionné. Dans le cas d'un callback sans paramètre, il n'y a aucun ajout. Si vous ajoutez un paramètre, l'objet $event sera ajouté</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Affectation d'une valeur stockée dans la page</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Nous allons nous créer 4 boutons afin d'augmenter et réduire une valeur qui sera stocké dans une constante réactive dans notre page. Ensuite, pour un meilleur suivi, nous avons besoin d'une interpolation afin d'afficher la valeur de ma constante dans la page. Un 3e bouton sera nécessaire afin de faire afficher dans un alert( ) un message. Ce troisième bouton va nous permettre d'ajouter un callback en paramètre. Pour le dernier bouton, nous allons passer des paramètres à notre callback.  </p>
        </ExplicationsExemple>

        <button @click="data.compteur++"> Augmenter </button>
        <button @click="data.compteur--"> Diminuer </button>
        <button @click="avertissement"> Callback fonction </button>
        <button @click="afficher('popup')"> Callback popup </button>
        <button @click="afficher('console')"> Callback console </button>

        <p>J'ai été cliqué {{data.compteur}} fois</p>
    </main>
</div>
</template>

<style lang="scss">
    
</style>