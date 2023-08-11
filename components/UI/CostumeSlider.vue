<template>
    <div class="slider-parent relative"  ref="sliderParent">
        <slot></slot>


        <!-- <div class=" absolute md:hidden top-0 left-0 w-full h-[44rem] z-50"></div> -->
        
        <!-- 
            <div class="slider-container overflow-scroll" ref="sliderContainer">
                <div class="slider">
                    <div class="slider-item"></div>
                </div>
            </div> 
        -->
    </div>
</template>

<script setup>


const mousePosition=ref(0)
const scrollOrigin=ref(0)
const scrollDelta=ref(0)
const offset=ref(0)
const allowScroll=ref(false)
const scrollLimit=ref(0)

const scrollDistance = ref(0)
const carouselMargin = ref(0)

const sliderParent = ref(null)
const sliderContainer = ref(null)
const slider = ref(null)
const rightArrow = ref(null)
const leftArrow = ref(null)

// const offsetInPixel = computed(()=> `${offset.value}px`)

function onMouseDown(e){
    scrollOrigin.value = sliderContainer.value.scrollLeft
    mousePosition.value = e.clientX
    allowScroll.value = true 
}
function onMouseMove(e){
    
    if(allowScroll.value){
        scrollDelta.value = e.clientX - mousePosition.value
        offset.value = scrollOrigin.value - scrollDelta.value;

        sliderContainer.value.scrollLeft = offset.value;
    }
}
function onMouseUp(e){
    if(allowScroll.value){
        allowScroll.value = false
    }
}

function moveRight(event) {
   
    let leftScroll = sliderContainer.value.scrollLeft - sliderContainer.value.offsetWidth

    if(leftScroll < carouselMargin.value){
        leftScroll -= carouselMargin.value
    }
    
    sliderContainer.value.scroll({
        left: leftScroll,
        behavior: 'smooth' // 'auto' for instant scroll, 'smooth' for smooth scroll (optional)
    });
   

}
function moveLeft() {
    let leftScroll = sliderContainer.value.scrollLeft + sliderContainer.value.offsetWidth
    
    if(leftScroll > scrollDistance.value-carouselMargin.value){
        leftScroll += carouselMargin.value
    }
    
    sliderContainer.value.scroll({
        left: leftScroll,
        behavior: 'smooth' // 'auto' for instant scroll, 'smooth' for smooth scroll (optional)
    });
  
}



function setValues() {
    scrollLimit.value =   sliderContainer.value.scrollWidth - sliderContainer.value.offsetWidth
    
    scrollDistance.value = sliderContainer.value.scrollWidth-sliderContainer.value.offsetWidth
    carouselMargin.value = parseInt( window.getComputedStyle(slider.value).getPropertyValue('margin-right') )
}


function highlightArrows(){

    if(sliderContainer.value.scrollLeft> scrollLimit.value-2 ){
        rightArrow.value.disabled = true
    }else{
        rightArrow.value.disabled = false
    }

    if(sliderContainer.value.scrollLeft === 0){
        leftArrow.value.disabled = true

    }else{
        leftArrow.value.disabled = false
    }
    
}


onMounted(() => {
    sliderContainer.value = sliderParent.value.querySelector('.slider-container')

    slider.value = sliderContainer.value.querySelector('.slider')

    rightArrow.value = sliderParent.value.querySelector('.right-arrow')
    leftArrow.value = sliderParent.value.querySelector('.left-arrow')

    sliderContainer.value.addEventListener('mousedown',onMouseDown)
    sliderContainer.value.addEventListener('mousemove',onMouseMove)
    sliderContainer.value.addEventListener('mouseup',onMouseUp)

    leftArrow.value.addEventListener('click',moveRight)
    rightArrow.value.addEventListener('click',moveLeft)

    setValues()
    setTimeout(() => {
        setValues()
    }, 2000);
    window.addEventListener('resize',() => {
        setValues()
        // if(window.innerWidth < 768){
        //      window.location.reload()
        // }
    })
    highlightArrows()
    sliderContainer.value.addEventListener('scroll',highlightArrows)

})
onUnmounted(() => {
    sliderContainer.value.removeEventListener('mousedown',onMouseDown)
    sliderContainer.value.removeEventListener('mousemove',onMouseMove)
    sliderContainer.value.removeEventListener('mouseup',onMouseUp)

    rightArrow.value.removeEventListener('click',moveRight)
    leftArrow.value.removeEventListener('click',moveLeft)

    window.removeEventListener('resize',setValues)
})


</script>

<style scoped>

    .slider-parent :deep(.slider-container){
        @apply overflow-x-auto select-none;
    }
    .slider-parent :deep(.slider){
        @apply overflow-visible;
    }
    .slider-parent :deep(.slider-container)::-webkit-scrollbar {
        display: none;
    }
    .slider-parent :deep(.left-arrow), .slider-parent :deep(.right-arrow){
        @apply shrink-0 w-12 h-12 flex items-center justify-center text-2xl border text-primary border-primary transition-colors duration-150 ease-linear
            active:text-white active:bg-primary 
            hover:md:text-white hover:md:bg-primary

            disabled:border-opacity-30 disabled:text-opacity-30
            disabled:active:text-primary disabled:active:bg-transparent 
            disabled:active:border-opacity-30 disabled:active:text-opacity-30
        ;
    }

</style>