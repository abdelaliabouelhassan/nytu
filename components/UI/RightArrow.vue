<template>
    <button class="right-arrow w-12 h-12 flex items-center justify-center text-2xl border border-opacity-30 text-primary border-primary  text-opacity-30 
                hover:text-white hover:bg-primary highlight transition-all duration-150 ease-linear">
        <!-- <span>&#8594</span> -->
        <svg class="w-4 h-5"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  fill="currentColor" d="M13.6289 4.66117C13.8242 4.46591 13.8242 4.14933 13.6289 3.95406L10.447 0.772083C10.2517 0.576821 9.93512 0.576821 9.73986 0.772083C9.54459 0.967345 9.54459 1.28393 9.73986 1.47919L12.5683 4.30762L9.73986 7.13604C9.54459 7.33131 9.54459 7.64789 9.73986 7.84315C9.93512 8.03841 10.2517 8.03841 10.447 7.84315L13.6289 4.66117ZM0.275391 4.80762H13.2754V3.80762H0.275391V4.80762Z"/>
        </svg>

       
    </button>
</template>

<style scoped>
.right-arrow.highlight{
    @apply border-primary text-primary hover:text-white;
}
</style>