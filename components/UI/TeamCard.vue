<template>
    <div class="flex flex-col items-start space-y-3 ">
        <div class=" w-full max-h-[25.813rem]  h-full  cursor-pointer">
            <img draggable="false" :src="person.image" class=" w-full h-full object-cover hover:grayscale-[60%] duration-500" alt="">
        </div>
        <div class=" w-full flex flex-col items-start space-y-1">
            <h2 class=" text-primary text-3xl font-medium">{{ person.name }}</h2>
            <span class=" text-xl font-normal text-primary">{{ person.title }}</span>
            <p class=" text-black text-xl font-normal max-w-[10.938rem]">
                {{ person.info }}
            </p>
        </div>
    </div>
</template>



<script setup>
    const props = defineProps({
        person:{
            type:Object,
        }
    })
</script>