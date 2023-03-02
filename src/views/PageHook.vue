<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import AvertissementApp from "@/components/app/AvertissementApp/AvertissementApp.vue";

    // importation de l'exemple
    import { ref, computed, watch, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue'

    onMounted(() => {
        console.log('Le composant a été monté')
    })

    onUpdated(() => {
        console.log('Le composant a été mis à jour')
    })

    onUnmounted(() => {
        console.log('Le composant a été démonté')
    })

    onBeforeMount(() => {
        window.scrollTo({top: 0})
        console.log('Le composant va être monté')
    })

    onBeforeUpdate(() => {
        console.log('Le composant va être mis à jour')
    })

    onBeforeUnmount(() => {
        console.log('Le composant va être démonté')
    })

    //----------------------------------------------

    const points = ref(10);

    onMounted(() => {
        points.value++
    })

    watch(points, (newValue, oldValue) =>{
        console.log(`La valeur de count est maintenant ${newValue}, elle était ${oldValue}`)
    })

    //----------------------------------------------

    const nb1 = ref(200);
    const nb2 = ref(100);

    const calcul = computed(()=>{
        return nb1.value + nb2.value;
    })

    console.log(calcul.value)

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation du cycle de vie d\'un composant'">
            <p class="explication">Utilisation des hooks dans le cycle de vie du composant</p>
        </TitreSection>

        <AvertissementApp>
        <p>Il existe plusieurs hooks dans la vie d'un composant : ref, computed, watch, onMounted, onUpdated, onUnmonted, onBeforeMount, onBeforeUpdate, onBeforeUnmount.</p>

        <p>De cette liste, les plus importants sont : computed, onMounted, onUnmonted. Pour bien comprendre le comportement de ces hooks, vous devez effectuer une trace dans la console du navigateur. </p>
        </AvertissementApp>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'intégration d'un hook dans le composant : onMounted, onUpdate...</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Cette procédure s'applique à la majorité des hooks débutant par « on... » </li>
                <li>Vous devez importer le hook souhaité dans la balise « script »</li>
                <li>Un plus plus bas dans la balise « script », vous devez ajouter le hook en tant que méthode ayant une fonction flèchée à l'intérieur</li>
                <li>Vous ajoutez le code que vous souhaitez selon le contexte de développement</li>
            </ol>
        </div>

        <AvertissementApp>
            <p>Les hooks suivants : onMounted, onUpdated, onUnmonted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, peuvent être très utiles pour gérer le comportement du composant. Surtout, pour gérer ses transitions et ses animations ou bien, gérer le moment que le composant va aller chercher ses informations avant de les afficher dans l'écran.</p>
        </AvertissementApp>


        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure de watch</p>
        </TitreContent>

        <AvertissementApp>
            <p>Le rôle de computed est de faire un calcul et de retourner la valeur de ce calcul des données. Le rôle de watch est de vérifier si certaines données ont changé de valeur en cours de route. </p>
        </AvertissementApp>

        <div class="procedures">
            <ol>
                <li>Il faut dans un premier temps importer le hook ref et watch de 'vue'</li>
                <li>Ensuite, vous devez insérer une valeur dans une constante. Cette valeur doit être englobée à l'intérieur de ref () afin de la transformer en valeur réactive. En gros, ref() transforme la constante en objet et la valeur est contenue dans la propriété value. </li>
                <li>Puis, on ajoute watch( ) et ce hook a besoin de 2 paramètre => 1 : la constante à analyser (qui doit être en ref) / 2 : une fonction flèchée ayant en paramètre l'ancienne valeur et la nouvelle valeur. Ensuite on est en mesure de faire une action ou une série d'instructions selon le contexte de développement à l'intérieur de cette fonction.  </li>
                <li>On récupère la nouvelle valeur à l'aide de ${newValue} et l'ancienne avec ${oldValue} à l'intérieur de la fonction flèchée</li>
                <li>Dès qu'il y aura une modification sur la constante à évaluer ou à analyser, le hook watch sera activé et procèdera aux instructions à l'intérieur. </li>
            </ol>
        </div>


        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure de computed et ref</p>
        </TitreContent>

        <AvertissementApp>
            <p>En utilisant ref pour englober la valeur d'une constante, celle-ci se transforme en objet et doit être utilisé selon ce principe. Donc, pour accéder à la valeur de la constante, on ne peut pas juste utiliser le nom comme vous l'aviez fait en JS jusqu'ici. Vous devez considérer qu'avec une constante possèdant ref( ), l'accès à la valeur doit passer par la propriété value. Donc, nomDeLaConstante.value... </p>
        </AvertissementApp>

        <div class="procedures">
            <ol>
                <li>Il faut dans un premier temps importer le hook ref et computed de 'vue'</li>
                <li>Ensuite, vous devez insérer une valeur dans une constante. Cette valeur doit être englobée à l'intérieur de ref () afin de la transformer en valeur réactive. En gros, ref() transforme la constante en objet et la valeur est contenue dans la propriété value. </li>
                <li>Ensuite, on attribue à une constante la méthode computed afin de retourner le résultat d'un traitement (pour les chaînes de caractères) ou d'un calcul pour les int et les float.</li>
                <li>Ensuite, pour récupérer la valeur dans un autre endroit dans notre programmation, vous devez appeler la constante et pointer sur sa valeur, donc nomDeLaConstante.value. </li>
            </ol>
        </div>

        <AvertissementApp>
            <p>Si vous effectuez un console.log de nomDeLaConstante, le retour dans la console sera l'affichage des propriétés de l'objet créé par ref( ). Si vous voulez seulement la valeur, vous devez pointer sur value => console.log(nomDeLaConstante.value)  </p>
        </AvertissementApp>

    </main>
</div>
</template>

<style lang="scss">
    
</style>