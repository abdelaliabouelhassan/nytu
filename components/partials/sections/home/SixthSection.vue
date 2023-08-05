<template>
    <section class=" w-full bg-primary py-28 flex flex-col ">
        <div class="w-full main-container  text-white">
            <div v-animate class=" flex items-center space-x-2">
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] " />
                <span class="text-xl md:text-5xl font-bold">Pricing</span>
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem]" />
            </div>
            <p v-animate class="text-xl md:text-[3.5rem]  md:leading-[5rem] max-w-3xl">
                Entdecken Sie unsere Pakete
            </p>
        </div>
       <Pricing class="mt-16"/>
       <div class=" mt-8 px-4 md:px-0 ">
            <div class="md:px-4  w-full max-w-[27.72rem] mx-auto md:max-w-[61.5rem]">
                <div v-animate class="  h-full  bg-white hover:bg-tertiary group p-5  md:p-10 space-y-6 duration-300">
                    <div class=" w-full flex flex-col items-start space-y-4">
                        <div class=" flex items-center space-x-2">
                            <Star class=" w-[0.95806rem] h-[0.95806rem] md:w-[1.375rem] md:h-[1.375rem] text-primary" />
                            <span class=" text-xl md:text-3xl font-bold text-tertiary group-hover:text-white">Sponsoring</span>
                            <Star class=" w-[1.375rem] h-[1.375rem] text-primary" />
                        </div>
                        <div class=" w-full flex flex-col items-start space-y-1">
                            <span class=" text-black text-base md:text-xl font-normal group-hover:text-white">Wir supporten Vereine und sponsoren evtl. auch dein Event. </span>
                        </div>
                    </div>
                    <NuxtLink to="" class=" w-full max-w-[23.75rem] mx-auto h-[3rem] flex border border-primary group-hover:bg-primary cursor-pointer ">
                        <span class=" text-primary group-hover:text-white font-bold text-base md:text-xl text-center m-auto">Sponsoring anfragen</span>
                    </NuxtLink>
                </div>
            </div>
       </div>
       

    </section>
</template>


<script setup>
 import Star from "@/components/UI/Icons/Star.vue"
 import Pricing from  "@/components/partials/includes/Pricing.vue"
</script>