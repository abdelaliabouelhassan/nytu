<template>
    <!-- video -->
    <div class="flex justify-center items-center relative z-0">
        <div class="z-0">
            <slot />
        </div>
        <!-- play button -->
        <button class="w-[7.75rem] h-[7.75rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Play class="w-full h-full"/>
        </button>
        
    </div>
</template>

<script setup>
import Play from '@/components/UI/Icons/Play.vue'
</script>