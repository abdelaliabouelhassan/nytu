<template>
    <section class=" pt-10 md:pt-20 pb-10 md:pb-28 space-y-10 md:space-y-36">
        <div class="main-container  w-full flex flex-col items-start space-y-2 md:space-y-4">
            <div v-animate class=" flex items-center space-x-2">
                <Star class=" w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
                <span class=" text-xl md:text-5xl font-bold text-tertiary">This is us</span>
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
            </div>
            <p v-animate class=" hidden md:block text-3xl md:text-[5rem] text-tertiary font-light md:leading-[5rem]">
                Wir stehen für Spezialanforderungen zur Verfügung
            </p>

            <p  class=" md:hidden text-3xl md:text-[5rem] text-tertiary font-light md:leading-[5rem]">
                Treffen Sie unser Team
            </p>
        </div>
        <div v-animate class=" w-full">
            <img src="/images/us.svg" class=" w-full h-[12.19rem] md:max-h-[31.938rem] object-cover md:h-full" alt="">
        </div>
        <div v-animate class=" main-container  flex justify-end ">
            <div class=" max-w-[18.37156rem] md:max-w-[31.875rem] w-full">
                <p class=" text-black font-normal text-base md:text-xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    </section>
</template>


<script setup>
 import Star from "~/components/UI/Icons/Star.vue"

</script>