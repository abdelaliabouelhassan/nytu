<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </div> 
</template>



<script setup>
 import FirstSection from "@/components/partials/sections/references/FirstSection.vue"
 import SecondSection from "@/components/partials/sections/references/SecondSection.vue"
 import ThirdSection from "~/components/partials/sections/references/ThirdSection.vue"
 import FourthSection from "@/components/partials/sections/references/FourthSection.vue"


 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - References',
    description: 'Learn more about the events you like in your location.',
})
</script>