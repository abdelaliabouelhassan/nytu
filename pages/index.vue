<template>
    <div class=" text-white space-y-5">
        <div v-for="n in 50" :key="n" class=" bg-red-500">
            test...
        </div>
    </div> 
</template>



<script setup>
 useSeoMeta({ // change title and description values to your needs
    title: 'Nytu - Home',
    description: 'Learn more about the events you like in your location.',
})
</script>