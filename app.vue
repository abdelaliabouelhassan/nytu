<template>
<NuxtLayout :name="layout">
  <NuxtPage />
</NuxtLayout >
</template>


<script setup>
import 'vue3-lottie/dist/style.css'

const layout = ref('main')

</script>