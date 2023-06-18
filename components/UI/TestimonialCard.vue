<template>
    <div class="flex gap-x-[5.625rem] text-lg">
        <div class="shrink-0">
            <img draggable="false" class="w-[12.5rem] h-[12.5rem] object-contain rounded-full" :src="testimonial.image" :alt="testimonial.name">
        </div>
        <div class="flex flex-col gap-y-3">
            <p>{{testimonial.content}}</p>
            <div class="font-medium text-primary underline underline-offset-2">Event: {{testimonial.event}}</div>
            <div class="flex flex-col gap-y-1">
                <div class="font-bold">{{testimonial.name}}</div>
                <div>{{testimonial.company}}</div>
            </div>
            <a :href="testimonial.linkedin" class="w-6 h-6">
                <svg class="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.45212 23.3032H0.761416V8.19783H5.45212V23.3032ZM3.10424 6.13731C1.60431 6.13731 0.387695 4.89495 0.387695 3.39501C0.387695 2.67454 0.673902 1.98358 1.18335 1.47412C1.69281 0.964673 2.38377 0.678467 3.10424 0.678467C3.82472 0.678467 4.51568 0.964673 5.02513 1.47412C5.53458 1.98358 5.82079 2.67454 5.82079 3.39501C5.82079 4.89495 4.60367 6.13731 3.10424 6.13731ZM23.0079 23.3032H18.3273V15.95C18.3273 14.1976 18.292 11.9502 15.8885 11.9502C13.4497 11.9502 13.076 13.8541 13.076 15.8238V23.3032H8.39038V8.19783H12.8892V10.2583H12.9548C13.5811 9.07153 15.1108 7.81906 17.393 7.81906C22.1403 7.81906 23.013 10.9452 23.013 15.0056V23.3032H23.0079Z" fill="black"/>
                </svg>
            </a>

        </div>
        
    </div>
</template>

<script setup>
const props = defineProps({
    testimonial:Object
})
</script>