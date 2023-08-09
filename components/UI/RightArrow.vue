<template>
<div>
    <div class="custom-slide-arrows splide__arrows flex items-center gap-x-2" style="position: relative">
        <button class="splide__arrow splide__arrow--next w-12 h-12 flex items-center justify-center text-2xl text-primary border-primary  
                    hover:text-white hover:bg-primary highlight transition-all duration-150 ease-linear">
            <svg class="w-4 h-5"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  fill="currentColor" d="M13.6289 4.66117C13.8242 4.46591 13.8242 4.14933 13.6289 3.95406L10.447 0.772083C10.2517 0.576821 9.93512 0.576821 9.73986 0.772083C9.54459 0.967345 9.54459 1.28393 9.73986 1.47919L12.5683 4.30762L9.73986 7.13604C9.54459 7.33131 9.54459 7.64789 9.73986 7.84315C9.93512 8.03841 10.2517 8.03841 10.447 7.84315L13.6289 4.66117ZM0.275391 4.80762H13.2754V3.80762H0.275391V4.80762Z"/>
            </svg>
        </button>
    </div>
</div>
</template>

<style scoped>

.splide__arrow{
    position: relative;
    left: 0;
    right: 0;
    padding: 12px;
    background: white;
    width: auto;
    height: auto;
    transform: translateY(0);
    border: 1px solid rgb(144 153 255);
    
    border-radius: 0;
}
.splide__arrow:hover{
background: rgb(144 153 255);
}
.splide__arrow--next svg {
        transform: scaleX(1) !important;
}

.splide__arrow svg {
    fill: none;
    height: 1.25rem;
    width: 1rem;
}
</style>