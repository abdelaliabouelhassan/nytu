<template>
    <section class=" main-container pt-20 pb-28 space-y-40">
        <div class=" w-full flex flex-col items-start space-y-4">
            <div class=" flex items-center space-x-2">
                <Star class=" w-[2rem] h-[2.125rem]" />
                <span class=" text-5xl font-bold text-tertiary">Pricing</span>
                <Star class=" w-[2rem] h-[2.125rem]" />
            </div>
            <p class=" text-[5rem] text-tertiary font-light leading-[5rem]">
                Entdecken Sie unsere Pakete
            </p>
        </div>
        <div class=" flex justify-end ">
            <div class=" max-w-[31.875rem] w-full">
                <p class=" text-black font-normal text-xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    </section>
</template>


<script setup>
 import Star from "~/components/UI/Icons/Star.vue"

</script>