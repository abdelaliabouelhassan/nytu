<template>
    <section class=" w-full bg-primary py-28">
       <Pricing />
        <div v-animate class=" w-full main-container flex-col flex items-center space-y-10 mt-16">
            <p class=" text-white text-base md:text-xl font-normal text-center">
                Wir supporten Vereine und sponsoren evtl. auch dein Event. 
            </p>
            <button class=" max-w-[18.75rem] w-full h-[3rem] border border-white text-center text-white ext-base md:text-xl font-bold hover:bg-tertiary hover:border-tertiary duration-300">
                Hier Anfragen
            </button>
        </div>
    </section>
</template>


<script setup>
 import Star from "@/components/UI/Icons/Star.vue"
 import Pricing from  "@/components/partials/includes/Pricing.vue"
</script>