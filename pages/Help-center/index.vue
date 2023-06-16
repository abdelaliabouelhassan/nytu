<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
    </div> 
</template>



<script setup>
 import FirstSection from "@/components/partials/sections/helpcenter/FirstSection.vue"
 import SecondSection from "@/components/partials/sections/helpcenter/SecondSection.vue"
 import ThirdSection from "@/components/partials/sections/helpcenter/ThirdSection.vue"
 import FourthSection from "@/components/partials/sections/helpcenter/FourthSection.vue"
 import FifthSection from "@/components/partials/sections/helpcenter/FifthSection.vue"

 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Help Center',
    description: 'Learn more about the events you like in your location.',
})
</script>