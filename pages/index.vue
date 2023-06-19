<template>
    <div class="flex flex-col gap-y-[7.875rem]">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection/>
        <EightSection />
    </div> 
</template>



<script setup>
import HeroSection from '@/components/partials/sections/home/HeroSection.vue'
import SecondSection from '@/components/partials/sections/home/SecondSection.vue'
import ThirdSection from '@/components/partials/sections/home/ThirdSection.vue'
import FourthSection from '@/components/partials/sections/home/FourthSection.vue'
import FifthSection from '~/components/partials/sections/home/FifthSection.vue'
import SixthSection from '~/components/partials/sections/home/SixthSection.vue'
import SeventhSection from '~/components/partials/sections/home/SeventhSection.vue'
import EightSection from '~/components/partials/sections/home/EightSection.vue'


 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Home',
    description: 'Learn more about the events you like in your location.',
})
</script>