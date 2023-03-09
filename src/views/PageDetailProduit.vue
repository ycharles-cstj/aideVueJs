<!-- eslint-disable vue/comment-directive -->
<script setup>
    // importations de l'application
    // import TitreContent from "@/components/app/TitreContent/TitreContent.vue";
    // import TitreSection from "@/components/app/TitreSection/TitreSection.vue";
    // import ExplicationsExemple from "@/components/app/ExplicationsExemple/ExplicationsExemple.vue";

    // importation de l'exemple

    import { computed, reactive, onBeforeMount } from 'vue';
    import axios from "axios";
    import { useRoute } from 'vue-router'

  const route = useRoute();
  const routeId = computed(() => route.params.id);

    const data = reactive({
        produit : null,
        produitImg : null,
        id : null
    });

    onBeforeMount(() => {
        data.id = routeId;
        axios.get("http://magasin.mboudrea.tim-cstj.ca/api/produit/"+data.id).then(reponse => {
            data.produit = reponse.data;
            console.log(data.produit)

            if(data.produit.images.length == 0){
                data.produitImg = '/src/assets/img/zerk.jpeg';
                console.log('pas d\'image')
            }else{
                data.produitImg = data.produit.images[0][800].url
                //data.produitImg = data.produit.images[0].original.url
                console.log("j'ai des images")
            }
        });
    });
</script>

<template>
<div class="interface">
    <main>
        <div>
            <div class="fiche" v-if="data.produit">

                <div class="wrapImg">
                    <img :src="data.produitImg" :alt="data.produit.titre" >
                </div>

                <div class="wrapInfo" >
                    <p class="titre-item" v-text="data.produit.titre"></p>
                    <p class="prix-item" v-text="data.produit.prix+'$'"></p>
                    <p class="prix-item" v-text="data.produit.description"></p>

                    <RouterLink :to="{name: 'produit.liste'}" >Retour à la liste</RouterLink>
                </div>
            </div>

            
        </div>
    </main>
</div>
</template>

<style lang="scss">
    
</style>