<template>
    <div class=" w-full">
       <FirstSection />
    </div> 
</template>



<script setup>
 import FirstSection from "@/components/partials/sections/demoplanen/FirstSection.vue"
 
 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Demo Planen',
    description: 'Learn more about the events you like in your location.',
})
</script>