<template>
    <section class="flex flex-col gap-y-16">
        <div class="w-full main-container relative overflow-visible">
            <div v-animate class=" flex items-center space-x-2 ">
                <Star class="w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary " />
                <span class="text-xl md:text-5xl font-bold">Testimonials</span>
                <Star class="w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
            </div>
            <p v-animate class="text-xl md:text-[3.5rem] md:leading-[5rem] max-w-3xl">
                Was unsere Kunden sagen
            </p>
        </div>
        <!-- <BaseCarousel v-animate class="relative w-full  flex flex-col gap-y-9"> -->

        <Splide v-animate :has-track="false" :options="options" class="main-container flex flex-col gap-y-9 relative" >
            <div  class="slide-wrapper main-container">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li v-for="(testimonial,index) in testimonials" :key="index" class="splide__slide">
                            <TestimonialCard  :testimonial="testimonial" 
                            class="shrink-0 w-full" />
                        </li>
                    </ul>               
                </div>
            </div>

            <SplideArrows class=" self-end md:absolute md:bottom-0 md:right-8"/>
        </Splide>
    </section>
</template>

<script setup>
 import TestimonialCard from "@/components/UI/TestimonialCard.vue"
import Star from "@/components/UI/Icons/Star.vue"


import { Splide } from '@splidejs/vue-splide';
import SplideArrows from '~/components/UI/SplideArrows.vue'



const options = reactive({
    rewind:false,
    perMove: 1,
    arrows:true,
    pagination: false,
    drag:true,
    perPage: 1,
    gap:0,
    speed:700,
    

})

const testimonials = ref([
    {
        id:1,
        image:'/images/person4.svg',
        content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        company:'Musterfirma',
        name:'Maxine Muster',
        event:'The Zurich OpenAir',
        linkedin:'https://linkedin.com',
        
    },
    {
        id:2,
        image:'/images/person4.svg',
        content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        company:'Musterfirma',
        name:'Frank Fischer',
        event:'The Zurich OpenAir',
        linkedin:'https://linkedin.com',
        
    },
    {
        id:3,
        image:'/images/person4.svg',
        content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        company:'Musterfirma',
        name:'Maxine Muster',
        event:'The Zurich OpenAir',
        linkedin:'https://linkedin.com',
        
    },
    
])



</script>