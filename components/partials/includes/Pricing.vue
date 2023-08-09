<template>
     <div v-animate class="main-container w-full">

        <Splide  :has-track="false" :options="options"  class="flex flex-col gap-y-9 md:hidden">
            <div  class="slide-wrapper">
                <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide w-full" v-for="(plan,index) in plans" :key="index">
                                <PlanCard :plan="plan" class="w-full max-w-[28.75rem] mx-auto"/>
                            </li>
                        </ul>
                </div>
            </div>
            <SplideArrows  reverse_colors class="shrink-0 mx-auto"/>

         </Splide>
         

            <div class="hidden w-full md:grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(plan,index) in plans" :key="index">
                    <PlanCard v-animate :plan="plan" class="max-w-[47.35rem]"/>
                </div>
            </div>
               
        </div>
</template>


<script setup>
import PlanCard from "@/components/UI/PlanCard.vue"
import Star from "@/components/UI/Icons/Star.vue"
import { Splide } from '@splidejs/vue-splide';
import SplideArrows from '~/components/UI/SplideArrows.vue'
import '@splidejs/vue-splide/css';

const options = reactive({
    rewind:false,
    perMove: 1,
    arrows:true,
    perPage: 1,
    pagination: false,
    drag:true,
    gap:'10px',
    speed:700,
    

})

  const plans = ref([
    {
        id:1,
        name:'Enterprise',
        description:'Wir empfehlen ein Enterprise Packet',
        price:'ab CHF 5000.- / Jahr',
        features:[
            '30x Events pro Jahr',
            'digital & druck Einladungs-Support',
            'bezahlt unbezahlt Events',
            '5000+ Teilnehmer pro Jahr'
        ],
        eventImg:'/images/enterprise.svg',
        eventTitle:'Event XYZ',
        eventDate:'Oktober 2022',
    },
     {
        id:2,
        name:'Business',
        description:'Wir empfehlen ein Enterprise Packet',
        price:'ab CHF 800.- / Jahr',
        features:[
            '3x Events pro Jahr',
            'einfache Einladung',
            'unbezahlte Events',
            'ca. 750 Teilnehmer pro Jahr'
        ],
        eventImg:'/images/business.svg',
        eventTitle:'Event zyf',
        eventDate:'Oktober 2022',
    }
 ])
</script>