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

const props = defineProps({
    widthScroll:{
        type:Boolean,
        required:false,
        default:false
    }
})

const mousePosition=ref(0)
const scrollOrigin=ref(0)
const scrollDelta=ref(0)
const offset=ref(0)
const allowScroll=ref(false)
const scrollLimit=ref(0)

const ArrowScrollOffset = ref(0)
const scrollDistance = ref(0)
const carouselMargin = ref(0)
const lastScrollDistance = ref(null)

const carouselParent = ref(null)
const carouselContainer = ref(null)
const carousel = ref(null)
const rightArrow = ref(null)
const leftArrow = ref(null)

// const offsetInPixel = computed(()=> `${offset.value}px`)

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

function moveRight(event) {
    if(event.target.closest('highlight')){
        console.log('highlighted');
    }
    let leftScroll = carouselContainer.value.scrollLeft - ArrowScrollOffset.value

    if(props.widthScroll && leftScroll < carouselMargin.value){
        leftScroll -= carouselMargin.value
    }
    // else if(!props.widthScroll && leftScroll < 10){
    //     leftScroll -= 20
    // }
    else if(!props.widthScroll && lastScrollDistance.value){
        leftScroll = lastScrollDistance.value
        lastScrollDistance.value = null
    }
    
    
    carouselContainer.value.scroll({
        left: leftScroll,
        behavior: 'smooth' // 'auto' for instant scroll, 'smooth' for smooth scroll (optional)
    });
   

}
function moveLeft() {
    console.log('moveLeft');
    let leftScroll = carouselContainer.value.scrollLeft + ArrowScrollOffset.value
    
    if(props.widthScroll && leftScroll > scrollDistance.value-carouselMargin.value){
        leftScroll += carouselMargin.value
    }
    // else if(!props.widthScroll && leftScroll > scrollDistance.value-10){
    //     leftScroll += 20
    // }
    else if(!props.widthScroll && leftScroll > scrollDistance.value-10){
       lastScrollDistance.value = carouselContainer.value.scrollLeft
    }
    

    console.log('leftScroll',leftScroll);
    console.log('scrollDistance - 300',scrollDistance.value - 300);
    console.log('scrollDistance',scrollDistance.value);
    console.log('lastScrollDistance',lastScrollDistance.value);

    carouselContainer.value.scroll({
        left: leftScroll,
        behavior: 'smooth' // 'auto' for instant scroll, 'smooth' for smooth scroll (optional)
    });
  

}



function setValues() {
    scrollLimit.value =   carouselContainer.value.scrollWidth - carouselContainer.value.offsetWidth
    if(props.widthScroll){
        ArrowScrollOffset.value = carouselContainer.value.offsetWidth
    }else{
        let columnGap = parseInt( window.getComputedStyle(carousel.value).getPropertyValue('column-gap'))
        if(!columnGap){
            columnGap = 0
        }
        ArrowScrollOffset.value = carousel.value.children[0].offsetWidth + columnGap 
    }
    scrollDistance.value = carouselContainer.value.scrollWidth-carouselContainer.value.offsetWidth
    carouselMargin.value = parseInt( window.getComputedStyle(carousel.value).getPropertyValue('margin-right') )
}

function highlightArrows(){

    if(carouselContainer.value.scrollLeft> scrollLimit.value-2 ){
        rightArrow.value.classList.remove('highlight')
    }else{
        rightArrow.value.classList.add('highlight')
    }

    if(carouselContainer.value.scrollLeft === 0){
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

    leftArrow.value.addEventListener('click',moveRight)
    rightArrow.value.addEventListener('click',moveLeft)

    setValues()
    setTimeout(() => {
        
        setValues()
    }, 2000);
    window.addEventListener('resize',setValues)
    highlightArrows()
    carouselContainer.value.addEventListener('scroll',highlightArrows)

})
onUnmounted(() => {
    carouselContainer.value.removeEventListener('mousedown',onMouseDown)
    carouselContainer.value.removeEventListener('mousemove',onMouseMove)
    carouselContainer.value.removeEventListener('mouseup',onMouseUp)

    rightArrow.value.removeEventListener('click',moveRight)
    leftArrow.value.removeEventListener('click',moveLeft)

    window.removeEventListener('resize',setValues)
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