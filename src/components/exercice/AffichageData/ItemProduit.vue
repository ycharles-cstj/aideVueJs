<script setup>
import { onMounted, reactive } from 'vue';

const data = reactive({
    itemImg : ''
});

const props = defineProps({
    item : {
      type: Object,
      required: true
    }
})

onMounted(() => {
    if(props.item.nbPhotos == 0){
        data.itemImg = '/src/assets/img/zerk.jpeg';
        console.log('pas d\'image')
    }else{
        //data.produit.images[0].800.url
        data.itemImg = props.item.image.url
        console.log("j'ai des images")
    }
});
</script>

<template>
    <div class="fiche-produits">
        <div class="wrapImg">
            <img :src="data.itemImg" :alt="props.item.titre">
        </div>

        <div class="wrapInfo" >
            <p class="item" v-text="props.item.titre"></p>
            <RouterLink :to="{name: 'produit.details', params: {id: props.item.id}}">En savoir plus &gt;</RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>