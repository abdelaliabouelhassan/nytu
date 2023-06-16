<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
    </div> 
</template>



<script setup>
 import FirstSection from "@/components/partials/sections/contact/FirstSection.vue"
 import SecondSection from "@/components/partials/sections/contact/SecondSection.vue"


 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Contact',
    description: 'Learn more about the events you like in your location.',
})
</script>