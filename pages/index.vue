<template>
    <div>
        <HeroSection />
        <SecondSection />
    </div> 
</template>



<script setup>
import HeroSection from '@/components/partials/sections/home/HeroSection.vue'
import SecondSection from '@/components/partials/sections/home/SecondSection.vue'


 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Home',
    description: 'Learn more about the events you like in your location.',
})
</script>