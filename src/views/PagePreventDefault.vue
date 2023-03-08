<script setup>
    // importations de l'application
    import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple
    function stopAction(e){
        e.preventDefault();
    }
</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation de preventDefault( )'">
            <p class="explication">Utilisation de la méthode preventDefault( )</p>
        </TitreSection>

        <TitreContent :titre="'Explication de la procédure'">
            <p>Étapes de la procédure d'utilisation de la méthode preventDefault( )'</p>
        </TitreContent>

        <div class="procedures">
            <ol>
                <li>Utilisé principalement avec la balise &lt;a&gt;, elle retire son comportement relié à un évènement comme pour un  &lt;button&gt; ou un &lt;a&gt;</li>
                <li>Dans une fonction relié au bouton ou au lien, on doit récupérer l'évènement dans le paramètre afin de le réutiliser dans les instructions en tant qu'objet</li>
                <li>À L'aide de la synthaxe à point, on ajoute preventDefault( ) à cet objet => e.preventDefault();</li>
            </ol>
        </div>

        <TitreContent :titre="'Exemple'">
            <p>Utilisation de preventDefault( ) sur un lien &lt;a&gt; </p>
        </TitreContent>

        <ExplicationsExemple>
            <p>Le fait d'utiliser preventDefault( ) sur un lien utilisant la balise &lt;a&gt; permet de supprimer l'action par défaut d'effectuer une redirection dans le fureteur ou l'ouverture d'un nouvel onglet si jamais le lien possède l'attribut target avec la valeur _blank à l'intérieur. Il faut que l'élément ciblé par le preventDefault soit un élément ayant un évènement (un &lt;a&gt; ou un &lt;button&gt; par exemple) </p>
            <p>Le premier lien sera affecté par la méthode preventDefault( ) et il ne sera pas possible d'accéder à l'url. Tandis que pour l'autre lien, il sera possible de se rendre à l'url.</p>
        </ExplicationsExemple>

        <p>
            <a href="https://www.journaldemontreal.com/" @click="stopAction($event)" target="_blank"> Cliquer </a>
        </p>

        <p>
            <a href="https://www.lapresse.ca/" target="_blank">Accès à La Presse</a>
        </p>

    </main>
</div>
</template>

<style lang="scss">
    
</style>