<template>
     <div class=" main-container space-y-16">
                <div class=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(plan,index) in plans" :key="index">
                        <PlanCard :plan="plan" class="max-w-[47.35rem]"/>
                    </div>
                </div>

                <div class=" w-full flex-col flex items-center space-y-10 ">
                    <p class=" text-white text-base md:text-xl font-normal text-center">
                        Wir supporten Vereine und sponsoren evtl. auch dein Event. 
                    </p>
                    <button class=" max-w-[18.75rem] w-full h-[3rem] border border-white text-center text-white ext-base md:text-xl font-bold hover:bg-tertiary hover:border-tertiary duration-300">
                        Hier Anfragen
                    </button>
                </div>
        </div>
</template>


<script setup>
 import PlanCard from "@/components/UI/PlanCard.vue"

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