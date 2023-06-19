<template>
    <!-- hero section -->
    <section class="bg-primary h-[calc(100vh-4rem)] flex justify-center items-center relative" >
        
            <client-only>
                <Vue3Lottie class="h-full object-contain"
                    ref="lottieAnimation"
                    animationLink="/animations/nytu.json"
                    
                    @on-animation-loaded="playAnimation"
                    @on-complete ="complete"
                    :loop="false"
                    
                />
            </client-only>
        <button @click="playAnimation" class="absolute bottom-12 right-12 hover:bg-primary max-w-[18.75rem] w-full h-[3rem] border border-white text-center text-white text-xl font-bold  ">
            nytu in 45 Sek. Erklärt
        </button>
    </section>
</template>

<script setup>
const lottieAnimation = ref(null)
const animationSegments = ref([[1,90] , [90, 172], [172,251]])
const currentSegment = ref(0)


function complete(){
    // currentSegment.value++
    // if(currentSegment.value>2){currentSegment.value = 0}
    // lottieAnimation.value.goToAndStop(animationSegments.value[currentSegment.value][0], true)
    lottieAnimation.value.goToAndStop(90, true)

}
function playAnimation() {
    lottieAnimation.value.playSegments([1,251],true)
}

onMounted(() => {
    // lottieAnimation.value.setSpeed(2)
})
</script>