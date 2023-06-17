<template>
    <div class="carousel-parent relative" @mousemove="onMouseMove" @mousedown="onMouseDown" @mouseup="onMouseUp" ref="carouselParent">
        <slot></slot>
        
        <!-- 
            <div class="carousel-container overflow-hidden" ref="carouselContainer">
                <div class="carousel">
                    <div class="carousel-item"></div>
                </div>
            </div> 
        -->
    </div>
</template>

<script setup>

const dragOrigin=ref(0)
const dragDelta=ref(0)
const offset=ref(0)
const allowDrag=ref(false)
const dragLeftLimit=ref(0)

const carouselParent = ref(null)
const carouselContainer = ref(null)
const carousel = ref(null)
const rightArrow = ref(null)
const leftArrow = ref(null)

const offsetInPixel = computed(()=> `${offset.value}px`)

function onMouseDown(e){
    dragOrigin.value = e.clientX
    allowDrag.value = true 
}
function onMouseMove(e){
    
    if(allowDrag.value){
        dragDelta.value = e.clientX - dragOrigin.value
        offset.value += dragDelta.value;
        
        adjustOffsetOnLimits()

        dragOrigin.value = e.clientX
    }
}
function onMouseUp(e){
    if(allowDrag.value){
        offset.value = offset.value + dragDelta.value;
        offset.value += dragDelta.value 

        adjustOffsetOnLimits()
        
        dragOrigin.value = 0
        allowDrag.value = false
    }
}

function moveRight() {
    carousel.value.classList.add('smooth')
    offset.value += carousel.value.offsetWidth
    adjustOffsetOnLimits()
    setTimeout(() => {
        carousel.value.classList.remove('smooth')
    }, 500);

}
function moveLeft() {
    carousel.value.classList.add('smooth')

    offset.value -= carousel.value.offsetWidth
    adjustOffsetOnLimits()
    setTimeout(() => {
        carousel.value.classList.remove('smooth')
    }, 500);
}

function adjustOffsetOnLimits() {
    if(offset.value > 0){
        offset.value = 0
    }
    if(dragLeftLimit.value != null && offset.value < dragLeftLimit.value){
        offset.value = dragLeftLimit.value
    }
}



function resizeSetDragLeftLimit() {
    dragLeftLimit.value =  carouselContainer.value.offsetWidth - carousel.value.scrollWidth
}

watch(offset , (val)=>{
    if(val === 0){
        rightArrow.value.classList.remove('highlight')
    }else{
        rightArrow.value.classList.add('highlight')
    }

    if(val === dragLeftLimit.value){
        leftArrow.value.classList.remove('highlight')
    }else{
        leftArrow.value.classList.add('highlight')
    }

    
},)
watch(dragLeftLimit, (val)=>{
    if(!val){
        leftArrow.value.classList.remove('border-primary')
        rightArrow.value.classList.remove('border-primary')
        leftArrow.value.classList.remove('text-primary')
        rightArrow.value.classList.remove('text-primary')
    }
})

onMounted(() => {
    carouselContainer.value = carouselParent.value.querySelector('.carousel-container')

    carousel.value = carouselContainer.value.querySelector('.carousel')

    dragLeftLimit.value =  carouselContainer.value.offsetWidth - carousel.value.scrollWidth

    rightArrow.value = carouselParent.value.querySelector('.right-arrow')
    leftArrow.value = carouselParent.value.querySelector('.left-arrow')


    rightArrow.value.addEventListener('click',moveRight)
    leftArrow.value.addEventListener('click',moveLeft)


    window.addEventListener('resize',resizeSetDragLeftLimit)
})
onUnmounted(() => {
    rightArrow.value.removeEventListener('click',moveRight)
    leftArrow.value.removeEventListener('click',moveLeft)
    window.removeEventListener('resize',resizeSetDragLeftLimit)
})


</script>

<style scoped>
    .carousel-parent :deep(.carousel-container .carousel){
        transform: translateX(v-bind('offsetInPixel'));
    }
    .carousel-parent :deep(.carousel-container .carousel.smooth){
        transition: transform 0.5s ease-in-out;
        
    }
    .carousel-parent :deep(.right-arrow.highlight), .carousel-parent :deep(.left-arrow.highlight){
        @apply border-primary text-primary hover:text-white;
    }
</style>