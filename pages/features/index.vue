<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
    </div> 
</template>



<script setup>
 import FirstSection from "@/components/partials/sections/features/FirstSection.vue"
 import SecondSection from "@/components/partials/sections/features/SecondSection.vue"
 import ThirdSection from "@/components/partials/sections/features/ThirdSection.vue"

 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Features',
    description: 'Learn more about the events you like in your location.',
})
</script>