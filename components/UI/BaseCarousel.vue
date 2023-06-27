<template>
    <div class="carousel-parent relative"  ref="carouselParent">
        <slot></slot>
        
        <!-- 
            <div class="carousel-container overflow-scroll" ref="carouselContainer">
                <div class="carousel">
                    <div class="carousel-item"></div>
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

const carouselParent = ref(null)
const carouselContainer = ref(null)
const carousel = ref(null)
const rightArrow = ref(null)
const leftArrow = ref(null)

const offsetInPixel = computed(()=> `${offset.value}px`)

function onMouseDown(e){
    scrollOrigin.value = carouselContainer.value.scrollLeft
    mousePosition.value = e.clientX
    allowScroll.value = true 
}
function onMouseMove(e){
    
    if(allowScroll.value){
        scrollDelta.value = e.clientX - mousePosition.value
        offset.value = scrollOrigin.value - scrollDelta.value;

        carouselContainer.value.scrollLeft = offset.value;
    }
}
function onMouseUp(e){
    if(allowScroll.value){
        allowScroll.value = false
    }
}

function moveRight() {
    carouselContainer.value.scroll({
        left: carouselContainer.value.scrollLeft - carouselContainer.value.offsetWidth,
        behavior: 'smooth' // 'auto' for instant scroll, 'smooth' for smooth scroll (optional)
    });

}
function moveLeft() {
    carouselContainer.value.scroll({
        left: carouselContainer.value.scrollLeft + carouselContainer.value.offsetWidth,
        behavior: 'smooth' // 'auto' for instant scroll, 'smooth' for smooth scroll (optional)
    });
}



function setScrollLimit() {
    scrollLimit.value =   carouselContainer.value.scrollWidth - carouselContainer.value.offsetWidth
}

function highlightArrows(){

    if(carouselContainer.value.scrollLeft === 0){
        rightArrow.value.classList.remove('highlight')
    }else{
        rightArrow.value.classList.add('highlight')
    }

    if(carouselContainer.value.scrollLeft > scrollLimit.value-2){
        leftArrow.value.classList.remove('highlight')
    }else{
        leftArrow.value.classList.add('highlight')
    }
    
}


onMounted(() => {
    carouselContainer.value = carouselParent.value.querySelector('.carousel-container')

    carousel.value = carouselContainer.value.querySelector('.carousel')

    rightArrow.value = carouselParent.value.querySelector('.right-arrow')
    leftArrow.value = carouselParent.value.querySelector('.left-arrow')

    carouselContainer.value.addEventListener('mousedown',onMouseDown)
    carouselContainer.value.addEventListener('mousemove',onMouseMove)
    carouselContainer.value.addEventListener('mouseup',onMouseUp)

    rightArrow.value.addEventListener('click',moveRight)
    leftArrow.value.addEventListener('click',moveLeft)

    setScrollLimit()
    window.addEventListener('resize',setScrollLimit)

    highlightArrows()
    carouselContainer.value.addEventListener('scroll',highlightArrows)

})
onUnmounted(() => {
    carouselContainer.value.removeEventListener('mousedown',onMouseDown)
    carouselContainer.value.removeEventListener('mousemove',onMouseMove)
    carouselContainer.value.removeEventListener('mouseup',onMouseUp)

    rightArrow.value.removeEventListener('click',moveRight)
    leftArrow.value.removeEventListener('click',moveLeft)

    window.removeEventListener('resize',setScrollLimit)
})


</script>

<style scoped>

    .carousel-parent :deep(.carousel-container){
        overflow-x:auto;
        user-select: none;
        scrollbar-width: thin; /* For Firefox */
        -ms-overflow-style: none; /* For Internet Explorer and Microsoft Edge */  
    }
    .carousel-parent :deep(.carousel){
        overflow:visible;
    }
    .carousel-parent :deep(.carousel-container)::-webkit-scrollbar {
        display: none;
    }

</style>