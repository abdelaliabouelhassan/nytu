<template>
    <div class=" w-full bg-white hover:bg-tertiary group  p-10 space-y-6 duration-300">
        <div class=" w-full flex flex-col items-start space-y-4 border-b border-[#D9D9D9] pb-5">
             <div class=" flex items-center space-x-2">
                <Star class=" w-[1.375rem] h-[1.375rem] text-primary" />
                <span class=" text-3xl font-bold text-tertiary group-hover:text-white">{{ plan.name }}</span>
                <Star class=" w-[1.375rem] h-[1.375rem] text-primary" />
            </div>
            <div class=" w-full flex flex-col items-start space-y-1">
                <span class=" text-black text-xl font-normal group-hover:text-white">{{ plan.description }}</span>
                <span class=" text-primary font-bold text-xl">{{ plan.price }}</span>
            </div>
        </div>
        <div class=" flex flex-col items-start space-y-4 text-xl text-black group-hover:text-white font-normal pb-4">
            <div class=" flex items-center space-x-4" v-for=" (item,index ) in plan.features" :key="index">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.4282" cy="12.6206" r="12.1392" fill="#9099FF"/>
                    <path d="M6.67773 12.2156L10.7667 16.262L18.8169 8.97852" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{{item}}</p>
            </div>
        </div>
        <NuxtLink :to="'/references-details/' + plan.id" class=" w-full h-[16.125rem] relative">
            <DateTicket  :datetext="plan.eventDate" class=" absolute top-0 right-0"/>
            <div class=" flex flex-col items-start space-y-2 absolute left-5 bottom-6">
                <h1 class=" text-white font-bold text-[1.375rem]">{{ plan.eventTitle }}</h1>
               <div class=" flex items-center space-x-1 text-primary">
                 <span class=" text-base font-bold ">Merh</span>
                 <svg class=" fill-current" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4761 4.49418C11.6714 4.29892 11.6714 3.98233 11.4761 3.78707L8.29413 0.605091C8.09887 0.409829 7.78229 0.409829 7.58702 0.605091C7.39176 0.800353 7.39176 1.11694 7.58702 1.3122L10.4155 4.14062L7.58702 6.96905C7.39176 7.16431 7.39176 7.4809 7.58702 7.67616C7.78229 7.87142 8.09887 7.87142 8.29413 7.67616L11.4761 4.49418ZM0.437012 4.64062H11.1226V3.64062H0.437012V4.64062Z" />
                </svg>
               </div>
            </div>
            <img :src="plan.eventImg" class=" w-full h-full object-cover" alt="">
        </NuxtLink>

        <NuxtLink to="" class=" w-full h-[3rem] flex border border-primary group-hover:bg-primary   ">
            <span class=" text-primary group-hover:text-white font-bold text-xl text-center m-auto">Enterprise buchen</span>
        </NuxtLink>
    </div>
</template>

<script setup>
 import Star from "@/components/UI/Icons/Star.vue"
 import DateTicket from "@/components/UI/DateTicket.vue"

 const props = defineProps({
    plan:{
        type:Object,
    }
 })
</script>