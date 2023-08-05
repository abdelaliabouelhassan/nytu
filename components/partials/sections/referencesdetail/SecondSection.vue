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
        <div v-animate class="relative w-full main-container flex flex-col gap-y-9">
            
                <TestimonialCard :testimonial="testimonial" 
                        class="shrink-0 w-full" />
                
        </div>
    </section>
</template>

<script setup>
 import TestimonialCard from "@/components/UI/TestimonialCard.vue"
import Star from "@/components/UI/Icons/Star.vue"
import RightArrow from '@/components/UI/RightArrow.vue'
import LeftArrow from '@/components/UI/LeftArrow.vue'
import BaseCarousel from '@/components/UI/BaseCarousel.vue'

const testimonial = ref(
    {
        id:1,
        image:'/images/person4.svg',
        content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        company:'Musterfirma',
        name:'Maxine Muster',
        event:'The Zurich OpenAir',
        linkedin:'https://linkedin.com',
        
    },
)



</script>