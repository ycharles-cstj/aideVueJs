<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import anime from 'animejs';
    



    const contenuElement = ref(null);

    onMounted(()=> {
        window.addEventListener('scroll', onScroll);
        onScroll();
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
    })

    function onScroll (){
        const elementPosition = contenuElement.value.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        console.log(scrollPosition, elementPosition)

        if (scrollPosition > elementPosition) {
            anime({
                targets: contenuElement.value,
                duration:600,
                opacity: 1,
                easing:'linear',
            });
        }
    }
</script>

<template>
    <div class="contenu-anim" ref="contenuElement">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    
</style>