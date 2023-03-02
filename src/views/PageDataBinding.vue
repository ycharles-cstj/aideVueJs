<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import { reactive } from 'vue';

    const state = reactive({
        url: '/src/assets/img/sac_personne.jpg',
        texte : 'Personne louche sur la rue...',
        classe: 'uneClasse',
        couleur: '#736283',
        taille: '21px',
        graisse: 'bold',
        texteBrute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet ducimus unde molestiae accusantium nesciunt et nobis rerum consequatur. Odit.',
        texteHTML: '<div style="color:red">Ajout balise HTML</div>'
    });
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation du data binding'">
            <p class="explication">Utiliser la technique du data binding afin d'interagir avec les attributs des éléments</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure pour utiliser le data binding sur un attribut SRC</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state</li>
                <li>Insérer dans le state la propriété url avec le lien menant vers l'image dans le dossier assets (assurez-vous que vous avez préalablement inséré une image dans ce dossier...). Le lien ne doit pas inclure l'alias @/, mais bien /src/ à la place. Cet alias n'est plus disponible lorsqu'il est ajouté par programmation à l'attribut</li>
                <li>Insérer la balise img dans la page ou dans le composant</li>
                <li>Convertissez l'attribut src afin de permettre le data binding en utilisant la méthode courte avec les : devant le nom de l'attribut => :src</li>
                <li>Ajouter la propriété du state dans l'attribut ciblé</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Utilisation du data binding pour affecter le src de l'image</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>À l'aide de la technique du data binding, nous allons modifier le chemin dynamiquement d'une image en fonction des informations stockées dans le state du composant ou de la page. Nous allons également affecter l'attribut alt afin d'afficher le texte par défaut de l'image avec cette même technique. </p>
        </ExplicationsExemple>

        <div class="exemple">
            <img :src="state.url" :alt="state.texte">
        </div>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure pour utiliser le data binding sur un attribut class</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state</li>
                <li>Insérer dans le state la propriété classe le nom de la classe à ajouter sur l'élément ciblé</li>
                <li>Insérer la classe dans le fichier SCSS ou dans la balise « style » du composant ou de la page ciblé</li>
                <li>Convertissez l'attribut src afin de permettre le data binding en utilisant la méthode courte avec les : devant le nom de l'attribut => :class</li>
                <li>Ajouter la propriété du state dans l'attribut ciblé</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Utilisation du data binding pour affecter l'attribut class</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>À l'aide de la technique du data binding, nous allons modifier les classes d'un élément à partir des informations stockées dans le state du composant ou de la page. </p>
        </ExplicationsExemple>

        <div :class="state.classe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet ducimus unde molestiae accusantium nesciunt et nobis rerum consequatur. Odit.</div>

        <ExplicationsExemple>
            <p>On peut également faire la même chose avec l'attribut style et y injecter du style directement sur la balise de mon élément. </p>
        </ExplicationsExemple>

        <div :style="{color: state.couleur, fontSize : state.taille, fontWeight : state.graisse}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet ducimus unde molestiae accusantium nesciunt et nobis rerum consequatur. Odit.</div>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure pour écrire du texte et du HTML dans un élément</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state</li>
                <li>Insérer dans le state les propriétés texteBrute et texteHTML</li>
                <li>Sur l'élément à affecter, insérer la directive v-text pour envoyer du texte dans la balise</li>
                <li> Sur un autre élément, insérer la directive v-html pour ajouter des balises HTML à l'intérieur de l'élément ciblé</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Utilisation de la directive v-text et v-html pour ajouter dynamiquement du contenu</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>À l'aide de la directive v-text, nous allons ajouter du texte dynamiquement à un paragraphe qui n'aura pas de contenu entre ses balises ouvrantes et fermantes.</p>
        </ExplicationsExemple>

        <p class="exemple" v-text="state.texteBrute"></p>


        <ExplicationsExemple>
            <p>À l'aide de la directive v-html, nous allons ajouter du HTML  dynamiquement à un paragraphe qui n'aura pas de contenu entre ses balises ouvrantes et fermantes.</p>
        </ExplicationsExemple>

        <p class="exemple" v-html="state.texteHTML"></p>

    </main>
</div>
</template>

<style lang="scss">
    .uneClasse{
        background-color: red;
        color: #fff;
        padding: 32px;
    }
</style>