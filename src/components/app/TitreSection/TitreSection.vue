<script setup>

const props = defineProps({
    titreSection: {
        type: String,
        required: true, 
        default: '// Placeholder-titre //'
    }
})

</script>

<template>

<header>
    <h1> {{ props.titreSection }} </h1>
    <slot></slot>
</header>

</template>

<style lang="scss">
    
</style>