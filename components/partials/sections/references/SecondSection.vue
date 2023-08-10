<template>
    <section class=" w-full main-container  pt-10 pb-28">
        <div  class=" w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
            <EventCard v-animate  v-for="(event,index) in displayedEvents" :key="index" :event="event" />
            <!-- <EventCard v-for="(event,index) in events" :key="index" :event="event" />
            <EventCard v-for="(event,index) in events" :key="index" :event="event" /> -->
        </div>
        <div v-animate @click="showMore" class="flex flex-col items-center text-primary gap-y-6 pt-9 cursor-pointer">
            <div class=" text-base md:text-lg font-bold">Mehr anzeigen</div>
            <svg class="h-4 w-9" width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5 2.4397L19 19.9397L1.5 2.4397" stroke="#9099FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </section>
</template>

<script setup>
import EventCard from "@/components/UI/EventCard.vue"

const elementsNumber = ref(6)
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
    {
        id:5,
        image:'/images/events4.svg',
        title:'Event lorem ipsum dolor',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    {
        id:6,
        image:'/images/events5.svg',
        title:'The Zurich OpenAir',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    {
        id:7,
        image:'/images/events3.svg',
        title:'The Zurich OpenAir',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    {
        id:8,
        image:'/images/events4.svg',
        title:'Event lorem ipsum dolor',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    {
        id:9,
        image:'/images/events5.svg',
        title:'Event lorem ipsum dolor',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur placeat',
        date:' Oktober 2022',
    },
    
])


const displayedEvents =  computed(()=>{
    let count = 1
    let tempArray = []
    for (let index = 0; index < elementsNumber.value; index++) {
        tempArray.push(events.value[index])
    }
    return tempArray;
})

function showMore() {
    if(elementsNumber.value+3 >= events.value.length){
       // elementsNumber.value = events.value.length // show all
       //slowly show all only first time
       if(displayedEvents.value.length == events.value.length) return
         let temp = events.value.length
            let interval = setInterval(() => {
                elementsNumber.value+=1
                if(elementsNumber.value == temp){
                    clearInterval(interval)
                }
            }, 100);
    }else{
        elementsNumber.value+=3
    }

}

































</script>