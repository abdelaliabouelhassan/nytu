<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
    </div> 
</template>



<script setup>
 import FirstSection from "@/components/partials/sections/pricing/FirstSection.vue"
 import SecondSection from "@/components/partials/sections/pricing/SecondSection.vue"
 
 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Pricing',
    description: 'Learn more about the events you like in your location.',
})
</script>