<template>
    <div class=" w-full">
        <SecondSection />
        <FirstSection />
    </div> 
</template>



<script setup>
 import FirstSection from "~/components/partials/sections/contact/SecondSection.vue"
 import SecondSection from "~/components/partials/sections/contact/FirstSection.vue"


 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Contact',
    description: 'Learn more about the events you like in your location.',
})
</script>