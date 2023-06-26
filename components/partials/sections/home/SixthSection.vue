<template>
    <section class=" w-full bg-primary py-28 flex flex-col gap-y-16">
        <div class="w-full main-container  text-white">
            <div class=" flex items-center space-x-2">
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] " />
                <span class="text-xl md:text-5xl font-bold">Pricing</span>
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem]" />
            </div>
            <p class="text-xl md:text-[3.5rem]  md:leading-[5rem] max-w-3xl">
                Entdecken Sie unsere Pakete
            </p>
        </div>
       <Pricing/>
    </section>
</template>


<script setup>
 import Star from "@/components/UI/Icons/Star.vue"
 import Pricing from  "@/components/partials/includes/Pricing.vue"
</script>