<script setup>

const props = defineProps({
    titre: {
        type: String,
        required: true, 
        default: '// Placeholder-titre //'
    }
})

</script>

<template>
<h2 class="titreContent">
    <p class="titre">{{ props.titre }}</p>

    <slot></slot>
</h2>
</template>

<style lang="scss">
    
</style>
