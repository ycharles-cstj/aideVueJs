<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    import { reactive } from 'vue';
    import { computed } from 'vue'

    const state = reactive({
        texteTrue: 'Effectivement, je suis un étudiant...',
        texteFalse : 'Non, je ne suis plus un étudiant...',
        etudiant: true, 
        hauteur: 300, 
        largeur: 100
    });

    const perimetre = computed(() => {
        return 'mon résultat : '+ parseInt((state.hauteur * 2) + (state.largeur * 2)) + ", cette valeur est le périmetre de ma forme.";
    });

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Interpolations complexes'">
            <p class="explication">Intégration dans un composant d'interpolations complexes</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'une interpolation utilisant une condition</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state</li>
                <li>Utiliser une interpolation à l'aide des { }</li>
                <li>Utiliser un opérateur ternaire => condition ? true : false ... afin d'afficher le texte en fonction d'une condition</li>
                <li>Pour accéder aux valeurs des propriétés des données, n'oubliez pas que vous devez utiliser la syntaxe à point : state.etudiant par exemple</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Affichage des données selon une condition</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>La page possède trois données : un texte si la condition est true, un autre si la condition est false et ma condition. L'interpolation va gérer cette condition à l'aide d'un opérateur ternaire afin d'afficher le texte si vous êtes un étudiant, ou non.</p>
        </ExplicationsExemple>

        <p class="exemple">{{state.etudiant ? state.texteTrue : state.texteFalse}}</p>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'une interpolation utilisant une fonction</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Mettre en place les données nécessaires pour le composant ou la page dans la balise « script » selon la procédure du state : hauteur et largeur</li>
                <li>Utiliser une interpolation à l'aide des { }</li>
                <li>Dans la balise « script » du composant ou de la page, vous devez importer « computed » de 'vue' => import { computed } from 'vue'</li>
                <li>Toujours dans la balise « script », vous devez ajouter une constante qui est égale à la méthode computed( )</li>
                <li>La méthode computed( ) possède en paramètre une fonction flèchée qui retourne un résultat d'un calcul ou d'une concaténation</li>
                <li>On ajoute le nom de la constante à l'intérieur d'une interpolation à l'aide des doubles { }</li>
            </ol>
        </div>

        <ExplicationsExemple>
            <p>Le prochain exemple va calculer le périmètre d'une forme rectangulaire et faire afficher le résultat du calcul dans le paragraphe suivant. </p>
        </ExplicationsExemple>

        <p class="exemple">{{ perimetre }}</p>
    </main>
</div>
</template>

<style lang="scss">
    
</style>