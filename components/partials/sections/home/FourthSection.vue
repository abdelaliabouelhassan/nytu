<template>
    <!-- home fourth section -->
    <section class="flex flex-col  gap-y-9 md:gap-y-16">
         
        <div class="w-full main-container relative overflow-visible">
            <div class=" flex items-center space-x-2 ">
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
                <span class="text-xl md:text-5xl font-bold">This is us</span>
                <Star class=" w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
            </div>
            <p class=" text-xl md:text-[3.5rem]  md:leading-[5rem] max-w-3xl">
                Treffen Sie unser Team
            </p>
        </div>
        <BaseCarousel class=" flex flex-col gap-y-9 md:gap-y-16">
            <div class="carousel-container ">
                <div class="carousel main-container flex  gap-x-8 gap-y-20 ">
                    <TeamCard v-for="(person,index) in team" :key="index" :person="person" 
                            class="shrink-0 w-[17.25rem] md:w-[19.2rem] last:pr-4 last:box-content" />
                </div>
            </div>
            <div class="w-full main-container flex items-center gap-x-2">
                    <button class="w-fit px-12  bg-primary h-12 text-center text-white font-semibold md:text-xl md:order-3">
                        Mehr über uns
                    </button>
                    <LeftArrow class="md:order-1"/>
                    <RightArrow class="md:order-2"/>
            </div>
        </BaseCarousel>
    </section>
</template>

<script setup>
 import TeamCard from "@/components/UI/TeamCard.vue"
import Star from "@/components/UI/Icons/Star.vue"
import RightArrow from '@/components/UI/RightArrow.vue'
import LeftArrow from '@/components/UI/LeftArrow.vue'
import BaseCarousel from '@/components/UI/BaseCarousel.vue'

 const team = ref([
    {
        id:1,
        image:'/images/person1.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
        location:'location Im Vorland 38580 Amriswil',
    },
    {
        id:2,
        image:'/images/person2.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
    },
    {
        id:3,
        image:'/images/person1.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
    },
    {
        id:4,
        image:'/images/person2.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
    },
    {
        id:5,
        image:'/images/person1.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
        location:'location Im Vorland 38580 Amriswil',
    },
 ])
</script>