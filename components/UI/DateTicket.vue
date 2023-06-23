<template>
    <div class=" bg-primary w-[4.811rem] h-[4.938rem]  flex">
        <div class=" m-auto font-bold  text-white text-center">{{ datetext }}</div>
    </div>
</template>


<script setup>
 const props = defineProps({
    datetext:'',
 })
</script>