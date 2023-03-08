<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    function actionParent(){
        console.log('Évènement associé au parent');
    }
    function actionInput(e){
        e.stopPropagation();
        //e.preventDefault();
        console.log('Évènement associé au input');
    }
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation de stopPropagation ( )'">
            <p class="explication">Arrêt de la propagation d'un évènement au parent</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'utilisation de stopPropagation( )</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>La méthode stopPropagation( ) doit être ajouté à l'intérieur d'une fonction rattachée à un évènement. Cette méthode permet d'arrêter la propagation d'un évènement à son parent et les instructions rattachées à la fonction concerne seulement l'élément ciblé</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Arrêt de la propagation d'un évènement</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Dans cet exemple, il y a un évènement @keydown qui est lié au parent (div) et un autre sur l'enfant (input de type texte). Chacun des éléments permet de monitorer l'action de taper par l'affichage dans la console d'une trace. En ajoutant la méthode dans la fonction du input, la trace du parent ne s'affiche plus, car l'évènement ne permet plus d'activer le parent. </p>
        </ExplicationsExemple>


        <div @keydown="actionParent">
            <input type="text" @keydown="actionInput($event)">
        </div>
    </main>
</div>
</template>

<style lang="scss">
    
</style>