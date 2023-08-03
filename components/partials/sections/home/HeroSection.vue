<template>
    <!-- hero section -->
    <section class="bg-primary  h-[32.5rem] mb-[calc(32.5rem*0.27)]  flex flex-col items-center relative
                    md:h-[calc(100vh-4rem)] md:mb-0 md:flex-row md:justify-center" >
        
            <client-only>
                <Vue3Lottie class="h-full object-contain"
                    ref="lottieAnimation"
                    animationLink="/animations/nytu.json"
                    
                    @on-animation-loaded="playAnimation"
                    @on-complete ="complete"
                    :loop="false"
                    
                />
            </client-only>
            <div class="h-[27%] w-full px-4 relative md:hidden">
                <Video @click="showVideo = true" class="absolute top-0 left-0 w-full h-[200%]">
                    <img class="h-full w-full object-contain" src="/images/home/hero_section_video.svg" alt="second_section_video">
                </Video>
            </div>
        <button @click="playAnimation" :class="{'btn-ripple':showRipple}" class=" hidden md:block absolute bottom-12 right-12 hover:bg-primary max-w-[18.75rem] w-full h-[3rem] border border-white text-center text-white text-xl font-bold  ">
            nytu in 45 Sek. Erklärt
        </button>
        <VideoModal class="md:hidden" :show="showVideo" @close="showVideo = false" src="/images/home/second_section_video.svg"/>

    </section>
</template>

<script setup>
import Video from '@/components/UI/Video.vue'
import VideoModal from '@/components/UI/VideoModal.vue'

const lottieAnimation = ref(null)
const animationSegments = ref([[1,90] , [90, 172], [172,251]])
const currentSegment = ref(0)
const showVideo = ref(false)
const showRipple = ref(false)

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

    //add and remove it every 5s
    setInterval(() => {
        showRipple.value = true
        setTimeout(() => {
            showRipple.value = false
        }, 1000);
    }, 5000);
})
</script>