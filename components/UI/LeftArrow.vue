<template>
    <button class="left-arrow w-12 h-12 flex items-center justify-center text-2xl border border-opacity-30 text-primary border-primary  text-opacity-30
                hover:text-white hover:bg-primary highlight transition-all duration-150 ease-linear hover:border-primary">
        <!-- <span>&#8592</span> -->
        <svg class="w-4 h-5" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0.369102 3.95406C0.173841 4.14933 0.173841 4.46591 0.369103 4.66117L3.55108 7.84315C3.74635 8.03841 4.06293 8.03841 4.25819 7.84315C4.45345 7.64789 4.45345 7.33131 4.25819 7.13605L1.42976 4.30762L4.25819 1.47919C4.45345 1.28393 4.45345 0.967346 4.25819 0.772084C4.06293 0.576822 3.74635 0.576822 3.55108 0.772084L0.369102 3.95406ZM13.7227 3.80762L0.722656 3.80762L0.722656 4.80762L13.7227 4.80762L13.7227 3.80762Z" />
        </svg>

    </button>
</template>

<style scoped>
.left-arrow.highlight{
    @apply border-primary text-primary hover:text-white ;
}
</style>