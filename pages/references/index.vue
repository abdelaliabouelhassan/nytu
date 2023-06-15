<template>
    <div class=" w-full">
        <FirstSection />
    </div> 
</template>



<script setup>
 import FirstSection from "@/components/partials/sections/references/FirstSection.vue"

 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - References',
    description: 'Learn more about the events you like in your location.',
})
</script>