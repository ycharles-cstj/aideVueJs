<!-- eslint-disable vue/comment-directive -->
<script setup>
    // importations de l'application
    import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    import ContenuComposant from "@/components/exercice/ContenuComposant/ContenuComposant.vue"
    import AnimeSvg from '@/components/exercice/AnimeSvg/AnimeSvg.vue'

    // importation de l'exemple

</script>

<template>
<div class="interface">
    <main>
        <TitreSection :titreSection="'Utilisation de anime.js'">
            <p class="explication">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, quas.</p>
        </TitreSection>

        <AnimeSvg />

        <ContenuComposant>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus, veniam aperiam, odit facere, tenetur dolorum at beatae nam quidem perspiciatis! Animi at doloribus praesentium repellendus voluptatibus, velit tempore facilis!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ab. Est tenetur facilis aut laboriosam unde nostrum at veniam asperiores ipsam. Quas ipsum harum ut?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita porro iste repudiandae asperiores officia commodi, culpa et ducimus reiciendis doloremque architecto exercitationem totam beatae tenetur quisquam quaerat consequatur maxime unde?</p>
        </ContenuComposant>

        <ContenuComposant>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid non reprehenderit amet eligendi itaque cupiditate, odio sed nulla, quia repudiandae? Ab quaerat quos natus corporis id labore, itaque deleniti.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt adipisci id impedit, facilis, repudiandae voluptatum tempora, voluptatibus corporis animi eveniet beatae ducimus odio blanditiis? Doloremque neque aliquid quasi molestias numquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi dolor suscipit quia quae consequatur?</p>
        </ContenuComposant>

        <TitreSection :titreSection="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'">
            <p class="explication">Utilisation de la librairie anime.js pour les animation des éléments dans la page</p>
        </TitreSection>

        <ContenuComposant>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio assumenda provident, est aut placeat praesentium accusamus eos voluptate quisquam iste veritatis in voluptates nemo excepturi doloremque exercitationem eveniet, qui rerum corrupti totam unde eaque. Tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure nam quod, quae consectetur autem tempore eveniet voluptates, id maiores esse perspiciatis earum est. Necessitatibus autem neque tenetur aliquid quaerat odit blanditiis. Quasi, sapiente, quo commodi velit accusamus eaque delectus temporibus, ex eligendi maxime id voluptatum recusandae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque distinctio repellat harum? Ducimus at eum officia quaerat sapiente soluta cum provident molestias libero perspiciatis.</p>
        </ContenuComposant>

        <TitreSection :titreSection="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, deserunt?'">
            <p class="explication">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum ut modi consequuntur!</p>
        </TitreSection>

        <ContenuComposant>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit ea perferendis architecto repudiandae saepe numquam corporis debitis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, a earum corporis exercitationem nostrum totam odio dignissimos! Veritatis, doloremque ad? Veritatis ipsam quas molestias corporis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia veniam, distinctio corrupti, vel consequatur maxime saepe possimus doloremque quaerat sapiente, culpa maiores quidem adipisci error. Fugiat beatae quam, sunt accusantium dolor officia facilis incidunt eligendi dignissimos dolorem odio rerum, amet eos commodi consequatur. Deleniti fugit odit repellendus et ab! Ut, hic? Eaque, officiis quis dolore dicta beatae inventore excepturi quae soluta. Voluptatibus, corrupti neque!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel praesentium minus unde, sequi odit quos et placeat ea obcaecati facere quae adipisci esse impedit fugiat itaque reiciendis consequuntur voluptatem voluptatum quibusdam incidunt sapiente? Eaque, veniam reprehenderit. Eos, unde culpa quas in amet placeat? Voluptate tempora mollitia facilis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui et aspernatur? Dicta quibusdam excepturi, asperiores deserunt animi tenetur nostrum, aliquid at rerum culpa nihil, perferendis consequatur. Corporis odit amet quasi officiis facere reprehenderit magnam minima.</p>
        </ContenuComposant>

    </main>
</div>
</template>

<style lang="scss">
    
</style>