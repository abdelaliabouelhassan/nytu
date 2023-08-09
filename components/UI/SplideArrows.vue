<template>
<div>
    <div class="custom-slide-arrows splide__arrows flex items-center gap-x-2" style="position: relative">
        <button class="splide__arrow splide__arrow--prev w-12 h-12 flex items-center justify-center text-2xl  text-primary border-primary
                    hover:text-white hover:bg-primary highlight transition-all duration-150 ease-linear hover:border-primary">
            <svg class="w-4 h-5" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M0.369102 3.95406C0.173841 4.14933 0.173841 4.46591 0.369103 4.66117L3.55108 7.84315C3.74635 8.03841 4.06293 8.03841 4.25819 7.84315C4.45345 7.64789 4.45345 7.33131 4.25819 7.13605L1.42976 4.30762L4.25819 1.47919C4.45345 1.28393 4.45345 0.967346 4.25819 0.772084C4.06293 0.576822 3.74635 0.576822 3.55108 0.772084L0.369102 3.95406ZM13.7227 3.80762L0.722656 3.80762L0.722656 4.80762L13.7227 4.80762L13.7227 3.80762Z" />
            </svg>

        </button>
        <button class="splide__arrow splide__arrow--next w-12 h-12 flex items-center justify-center text-2xl text-primary border-primary  
                    hover:text-white hover:bg-primary highlight transition-all duration-150 ease-linear">
            <svg class="w-4 h-5"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  fill="currentColor" d="M13.6289 4.66117C13.8242 4.46591 13.8242 4.14933 13.6289 3.95406L10.447 0.772083C10.2517 0.576821 9.93512 0.576821 9.73986 0.772083C9.54459 0.967345 9.54459 1.28393 9.73986 1.47919L12.5683 4.30762L9.73986 7.13604C9.54459 7.33131 9.54459 7.64789 9.73986 7.84315C9.93512 8.03841 10.2517 8.03841 10.447 7.84315L13.6289 4.66117ZM0.275391 4.80762H13.2754V3.80762H0.275391V4.80762Z"/>
            </svg>
        
        </button>
    </div>
</div>
</template>

<script setup>

const props= defineProps({
    reverse_colors:{
        type:Boolean,
        default:false
    }
})

const backgroundColor  = computed(()=>{
    if(props.reverse_colors){
        return '#9099ff'
    }
    return 'white'
})
const borderColor  = computed(()=>{
    if(props.reverse_colors){
       return 'white' 
    }
    return '#9099ff'
})
const textColor  = computed(()=>{
    if(props.reverse_colors){
       return 'white' 
    }
    return '#9099ff'
})
</script>
<style scoped>

.splide__arrow{
    position: relative;
    left: 0;
    right: 0;
    padding: 12px;
    background: v-bind('backgroundColor');
    width: auto;
    height: auto;
    transform: translateY(0);

    border-width:1px ;
    border-style: solid;
    border-color: v-bind('borderColor');
    border-radius: 0;
    color: v-bind('textColor');
}
.splide__arrow:hover{
    background: v-bind('borderColor');
    color: v-bind('backgroundColor');

}
.splide__arrow--next svg {
        transform: scaleX(1) !important;
}
.splide__arrow--prev svg {
        transform: scaleX(1)  !important;
}
.splide__arrow svg {
    fill: none;
    height: 1.25rem;
    width: 1rem;
}
</style>