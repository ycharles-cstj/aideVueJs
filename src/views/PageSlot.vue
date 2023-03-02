<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";
    import AvertissementApp from "@/components/app/AvertissementApp/AvertissementApp.vue";

    // importation de l'exemple
    import IntegrationSlot from "@/components/exercice/IntegrationSlot/IntegrationSlot.vue";
    import IntegrationSlotNomme from "@/components/exercice/IntegrationSlot/IntegrationSlotNomme.vue";


</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation des slots dans un composant'">
            <p class="explication">Utilisation des slots dans un composant afin d'y ajouter du contenu dynamique</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'intégration d'une slot dans un composant</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Vous devez cibler un composant dans votre page ou dans votre composant principal</li>
                <li>Vous devez ouvrir ce composant afin de modifier son contenu</li>
                <li>Pour intégrer dynamiquement du contenu, vous devez ajouter à l'endroit souhaité la balise ouvrante et fermante « slot »</li>
                <li>Vous fermez le composant et retournez au composant principal</li>
                <li>Vous devez vous assurer que votre composant principal possède une balise ouvrante et fermante également. Si ce n'est pas le cas, supprimez la fin de la balise auto-fermante /> et utilisez uniquement le symbole > pour fermer la balise. VS Code va créer la balise fermante pour vous automatiquement </li>
                <li>Ensuite, entre la balise ouvrante et fermante vous pouvez ajouter le HTML que vous souhaitez</li>
                <li>Pour terminer, vous pouvez vous concentrer sur le SCSS afin de donner un aspect visuel particulier à ce composant pouvant accueillir du contenu dynamique</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Intégration d'une balise slot à un composant</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>L'ajout d'une balise slot à un composant peut vraiment être pratique. Surtout lorsque vous souhaitez faire un bloc de contenu spécial comme ici avec un paragraphe d'explication ayant une mise en forme spéciale ou un bloc titre ou une fiche de produit, bref les options sont très variée. Ce qui est très intéressant avec cette technique c'est qu'on peut ajouter le contenu que l'ont souhaite, et le composant va gérer à l'intérieur les éléments nécessaires afin de contenir ce contenu dynamique. Une fois de plus, cette pratique s'inscrit dans la philosophie de réutilisation des composants. On est en mesure de faire une modification à un endroit et cela change à tous les endroits que ce composant est utilisé. </p>
        </ExplicationsExemple>

        <IntegrationSlot>
            <p>Mon contenu inséré dans ma slot de composant</p>
        </IntegrationSlot>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'intégration plusieurs slots nommées dans un composant</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Vous devez cibler un composant dans votre page ou dans votre composant principal</li>
                <li>Vous devez ouvrir ce composant afin de modifier son contenu</li>
                <li>Pour intégrer dynamiquement du contenu, vous devez ajouter à l'endroit souhaité la balise ouvrante et fermante « slot »</li>
                <li>Pour nommer une slot, vous devez utiliser l'attribut name=" ". De cette façon, vous êtes en mesure d'utiliser plusieurs slots sur le même composant</li>
                <li>Vous fermez le composant et retournez au composant principal</li>
                <li>Vous devez vous assurer que votre composant principal possède une balise ouvrante et fermante également. Si ce n'est pas le cas, supprimez la fin de la balise auto-fermante /> et utilisez uniquement le symbole > pour fermer la balise. VS Code va créer la balise fermante pour vous automatiquement </li>
                <li>Ensuite, entre la balise ouvrante et fermante vous devez ajouter la balise template et la directive v-slot:leNomDeLaSlot</li>
                <li>C'est à l'intérieur de la balise template que vous devez ajouter le HTML que vous voulez contrairement à la procédure précédente</li>
                <li>Pour terminer, vous pouvez vous concentrer sur le SCSS afin de donner un aspect visuel particulier à ce composant pouvant accueillir du contenu dynamique</li>

            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Intégration de plusieurs zones dynamique dans un composant</p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Cette procédure est très pratique si vous avez des composants plus complexes où il est nécessaire de séparer le code à insérer à l'intérieur. De cette façon, vous êtes en mesure de placer le code dans les bonnes slots de votre composant. Il faut paramétrer différemment votre composant, mais il s'agit d'une option bien intéressante pour les regroupements de composants.  </p>
        </ExplicationsExemple>

        <IntegrationSlotNomme>
            <p>Mon contenu inséré dans ma slot de composant</p>
            <template v-slot:nom>
                <div>Lorem Ipsum Dolor</div>
            </template>
            <template v-slot:info>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore maxime dolorem.</p>
            </template>
        </IntegrationSlotNomme>

        <AvertissementApp>
        <p>Vous pouvez utiliser cette technique afin de ne pas utiliser les states et les props pour intégrer le contenu dans le composant. Dans ce cas, le composant va gérer le cadre et les slots vont gérer l'intégration du contenu dans le composant. À vous de voir la méthode que vous souhaitez utiliser, les deux nécessitent un certain niveau de préparation. Dans les deux cas, il est possible de réutiliser le composant.  </p>

        <p>Le seul bémol notable avec la dernière procédure multi-slots, c'est que vous devez être constant dans les éléments qui sont intégrés dynamiquement. Vous devez être rigoureux dans le code que vous décidez d'intégrer.  </p>
        </AvertissementApp>
    </main>
</div>
</template>

<style lang="scss">
    
</style>