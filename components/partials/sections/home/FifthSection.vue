<template>
    <!-- home fourth section -->
    <section class="flex flex-col gap-y-16">
         
        <div class="w-full main-container relative overflow-visible">
            <div class=" flex items-center space-x-2 text-primary">
                <Star class=" w-[2rem] h-[2.125rem] " />
                <span class=" text-5xl font-bold">Referenzen</span>
                <Star class=" w-[2rem] h-[2.125rem]" />
            </div>
            <p class=" text-[3.5rem]   leading-[5rem] max-w-3xl">
                Unsere letzten Events
            </p>
        </div>
        <BaseCarousel class=" flex flex-col gap-y-9">
            <div class="carousel-container">
                <div class="carousel main-container flex  gap-x-8 gap-y-20">
                    <EventCard v-for="(event,index) in events" :key="event.id" :event="event" 
                            class="shrink-0 w-[19.2rem] " />
                    
                </div>
            </div>
            <div class="w-full main-container flex items-center gap-x-2">
                    <LeftArrow/>
                    <RightArrow/>
                    <button class="w-fit px-12  bg-primary h-12 text-center text-white font-semibold text-xl">
                        Alle Events
                    </button>
            </div>
        </BaseCarousel>
    </section>
</template>

<script setup>
import EventCard from "@/components/UI/EventCard.vue"
import Star from "@/components/UI/Icons/Star.vue"
import RightArrow from '@/components/UI/RightArrow.vue'
import LeftArrow from '@/components/UI/LeftArrow.vue'
import BaseCarousel from '@/components/UI/BaseCarousel.vue'

 const events = ref([
    {
        id:1,
        image:'/images/events3.svg',
        title:'The Zurich OpenAir',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    {
        id:2,
        image:'/images/events4.svg',
        title:'Event lorem ipsum dolor',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    {
        id:3,
        image:'/images/events5.svg',
        title:'The Zurich OpenAir',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    {
        id:4,
        image:'/images/events3.svg',
        title:'The Zurich OpenAir',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    
 ])
</script>