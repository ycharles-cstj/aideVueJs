<script setup>
const props = defineProps({
    photo: {
        type: String,
        required: true, 
        default: '// photo //'
    },
    nom: {
        type: String,
        required: true, 
        default: '// nom //'
    },
    email: {
        type: String,
        required: true, 
        default: '// email //'
    },
    phone: {
        type: String,
        required: true, 
        default: '// phone //'
    },
});
</script>

<template>
    <div class="fiche-user">
        <div class="wrapUser">
            <div class="wrapImg">
                <div class="image">
                    <img :src="props.photo" :alt="props.nom">
                </div>
            </div>

            <div class="wrapInfo">
                <div class="infoUser">
                    <span v-text="props.nom"></span>
                </div>
                <div class="infoUser">
                    <span v-text="props.email"></span>
                </div>
                <div class="infoUser">
                    <span v-text="props.phone"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>