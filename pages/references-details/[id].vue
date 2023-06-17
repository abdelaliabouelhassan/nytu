<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
    </div> 
</template>



<script setup>
    import FirstSection from "@/components/partials/sections/referencesdetail/FirstSection.vue"
//  import SecondSection from "@/components/partials/sections/referencesdetail/SecondSection.vue"
    import ThirdSection from "@/components/partials/sections/pricing/ThirdSection.vue"

 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - References details',
    description: 'Learn more about the events you like in your location.',
})
</script>