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
    pouvoir: {
        type: String,
        required: true, 
        default: '// pouvoir //'
    },
    hp: {
        type: String,
        required: true, 
        default: '// hp //'
    },
    faiblesse: {
        type: String,
        required: true, 
        default: '// faiblesse //'
    },
});
</script>

<template>
    <div class="fiche-perso">
        <div class="wrapPerso">
            <div class="wrapImg">
                <div class="image">
                    <img :src="props.photo" :alt="props.nom">
                </div>
            </div>

            <div class="wrapInfo">
                <div class="infoPerso">
                    <span>Le nom du personnage : </span> 
                    <span v-text="props.nom"></span>
                </div>
                <div class="infoPerso">
                    <span>Le pouvoir : </span> 
                    <span v-text="props.pouvoir"></span>
                </div>
                <div class="infoPerso">
                    <span>Le HP du personnage : </span> 
                    <span v-text="props.hp"></span>
                </div>
                <div class="infoPerso">
                    <span>Sa faiblesse : </span> 
                    <span v-text="props.faiblesse"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>