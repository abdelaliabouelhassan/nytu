<template>
    <!-- home fourth section -->
    <section class="flex flex-col gap-y-9 md:gap-y-16">
         
        <div class="w-full main-container relative overflow-visible">
            <div v-animate class=" flex items-center space-x-2">
                <Star class=" w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
                <span class=" text-xl md:text-5xl font-bold">Referenzen</span>
                <Star class=" w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
            </div>
            <p v-animate class="text-xl md:text-[3.5rem] md:leading-[5rem] max-w-3xl">
                Unsere letzten Events
            </p>
        </div>
        <Splide v-animate :has-track="false" :options="options"  class="flex flex-col gap-y-9 md:gap-y-16">
            <div class="slide-wrapper max-w-[63.5rem] mx-auto px-4">
                <div class="splide__track">
                        <ul class="splide__list">
                            <li v-for="event in events" :key="event.id"  class="splide__slide w-fit last:pr-4 last:box-content">
                                <EventCard  :event="event"
                                    class="shrink-0 w-[17.25rem] md:w-[19.2rem] " />
                            </li>
                        </ul>
                </div>
            </div>
            <div class="w-full main-container flex items-center gap-x-2">
                   <NuxtLink  to="/references" class="md:order-3">
                        <button class="w-fit px-12  bg-primary h-12 text-center text-white font-semibold md:text-xl">
                            Alle Events
                        </button>
                    </NuxtLink>
                    <SplideArrows />
            </div>
        </Splide>
    </section>
</template>

<script setup>
import EventCard from "@/components/UI/EventCard.vue"
import Star from "@/components/UI/Icons/Star.vue"
import { Splide } from '@splidejs/vue-splide';
import SplideArrows from '~/components/UI/SplideArrows.vue'

const options = reactive({
    rewind:false,
    perMove: 1,
    arrows:true,
    pagination: false,
    drag:true,
    autoWidth:true,
    gap:'30px',
    trimSpace: false,
})
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