<template>
    <div class=" w-full flex flex-col gap-y-32">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </div> 
</template>



<script setup>
    import FirstSection from "@/components/partials/sections/referencesdetail/FirstSection.vue"
 import SecondSection from "@/components/partials/sections/referencesdetail/SecondSection.vue"
    import ThirdSection from "@/components/partials/sections/referencesdetail/ThirdSection.vue"
    import FourthSection from "@/components/partials/sections/referencesdetail/FourthSection.vue"

 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - References details',
    description: 'Learn more about the events you like in your location.',
})
</script>