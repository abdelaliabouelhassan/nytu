<template>
    <section class=" w-full main-container  pt-10 pb-28">
        <div class=" w-full grid grid-cols-3 gap-x-8 gap-y-20">
            <EventCard v-for="(event,index) in events" :key="index" :event="event" />
            <EventCard v-for="(event,index) in events" :key="index" :event="event" />
            <EventCard v-for="(event,index) in events" :key="index" :event="event" />
        </div>
        <div class="flex flex-col items-center text-primary gap-y-6 pt-9 cursor-pointer">
            <div class="text-lg font-bold">Mehr anzeigen</div>
            <svg class="h-4 w-9" width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5 2.4397L19 19.9397L1.5 2.4397" stroke="#9099FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </section>
</template>

<script setup>
 import EventCard from "@/components/UI/EventCard.vue"

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
    
    
 ])
</script>