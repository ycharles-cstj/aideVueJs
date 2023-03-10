<script setup>
    import { ref, onMounted } from 'vue'
    import anime from 'animejs';

    const monLecteur = ref(null);
	const monTerminal = ref(null);
	const monPouce = ref(null);
    const maCarte = ref(null);
    const wrapAnim = ref(null);

    function supprimerAnim(){
        wrapAnim.value.style.display = 'none';
    }

    function fadePouce(){
        anime({
            targets: monPouce.value,
            opacity : {
                value: [1,0], 
                duration: 800, 
                delay : 2000,
                easing: 'linear',
            },
            complete: supprimerAnim,
        });
    }

    function animPouce(){
        monPouce.value.style.display = 'block';
        anime({
            targets: monPouce.value,
            opacity : {
                value: [0,1], 
                duration: 800, 
                delay : 3000,
                easing: 'linear',
            },
            translateY : {
                value : -100, 
                duration: 800, 
                delay : 3000,
                easing: 'easeOutBounce',
            },
            complete: fadePouce,
        });
    }

    function animTerminal(){
        anime({
            targets: [monLecteur.value, monTerminal.value],
            opacity : {
                value: 0, 
                duration: 100, 
                delay : 1800,
                easing: 'linear', 
                complete : animPouce,  
            }
        });
    }

    function animationCarte(){
        anime({
			targets: maCarte.value,
			translateX:[
				{
					value: -200, 
					duration: 800,
					delay : 200,
					easing: 'linear',
				},
				{
					value: -20, 
					duration: 600,
					easing: 'linear',
				},
			],
			translateY:  {
				value: 90, 
				duration: 1000,
				easing: 'linear',
			},
			rotate : [
				{ //anim 1
					value: 30, 
					duration: 100, 
					easing: 'linear' 
				},
				{ //anim 2
					value: 0, 
					duration: 100, 
					delay : 800,
					easing: 'linear' 
				},
			],
			opacity : {
				value: 0, 
				duration: 100, 
				delay : 1800,
				easing: 'linear', 
				complete : animTerminal,  
			}, 
		});
    }

    onMounted(()=>{
        animationCarte();
    })


</script>

<template>
<div class="anim" ref="wrapAnim">
    <img src="@/assets/img/svg/carte.svg" alt="" ref="maCarte" id="anim_carte">
    <img src="@/assets/img/svg/terminal_base.svg" alt="" ref="monTerminal" id="anim_base_terminal">
    <img src="@/assets/img/svg/terminal_lecteur.svg" alt="" ref="monLecteur" id="anim_lecteur_terminal">
    <img src="@/assets/img/svg/pouce.svg" alt="" ref="monPouce" id="anim_pouce">
</div>
</template>

<style lang="scss">
    
</style>