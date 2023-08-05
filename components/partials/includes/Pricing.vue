<template>
     <div class=" main-container space-y-16">
                <div class=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(plan,index) in plans" :key="index">
                        <PlanCard v-animate :plan="plan" class="max-w-[47.35rem]"/>
                    </div>
                </div>

               
        </div>
</template>


<script setup>
 import PlanCard from "@/components/UI/PlanCard.vue"
 import Star from "@/components/UI/Icons/Star.vue"


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