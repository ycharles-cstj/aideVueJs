<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import { reactive } from 'vue';

    const data = reactive({
        texte : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias consequuntur vero quos dolor et magni dolore maxime ducimus. Sit.',
    });

    function modifier(){
        data.texte = 'Mauris sed sapien sit amet sem sollicitudin varius. Morbi aliquam dui in justo congue rutrum. Nam molestie ipsum est, in lacinia augue convallis et. In hac habitasse platea dictumst. Phasellus sagittis dignissim orci, ac vulputate nulla facilisis non. Nunc ipsum ante, tristique id blandit non, suscipit id tellus. In hac habitasse platea dictumst. Quisque laoreet aliquam lacinia. Suspendisse cursus ante felis, pellentesque ultricies felis ullamcorper a. Mauris viverra dignissim nunc sit amet rutrum. Donec eu massa scelerisque, vestibulum nunc id, aliquet nulla. Ut in est ante. Integer consectetur elit metus, ac sagittis magna blandit semper. Proin at turpis purus. Ut quis dignissim orci. Nunc tortor elit, rutrum nec facilisis at, condimentum vel tortor.'
    }
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation de v-once'">
            <p class="explication">Utilisation de la directive v-once exécuter une fois un affichage sans mettre à jour le contenu </p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'utilisation de la directive v-once</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Vous devez ajouter le nom de la directive sans paramètre v-once directement dans la balise ouvrante d'un élément permettant l'affichage. L'élément en question ne sera pas mis à jour su jamais il y a des modifications en cours de route</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Utilisation de la directive v-once pour empêcher la mise à jour du contenu de la balise paragraphe</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Il y a deux paragraphes affichés à l'écran. Dès que vous allez appuyer sur le bouton, seulement le 2e paragraphe sera mis à jour. Le premier en ayant v-once sur la balise ouvrante, empêche la modification de l'affichage du texte dans l'interpolation. De cette façon, on peut bloquer la mise à jour du contenu dynamique. </p>
        </ExplicationsExemple>

        <button @click="modifier">Modifier le texte</button>
        
        <p v-once> {{data.texte}}</p>
        <p> {{data.texte}}</p>
        

    </main>
</div>
</template>

<style lang="scss">
    
</style>