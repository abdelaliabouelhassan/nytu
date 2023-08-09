<template>
    <div class="event-card flex relative text-white" @mouseenter="toggleDescription" @mouseleave="toggleDescription">
        <!--  -->
        <img draggable="false" class="w-full object-contain" :src="event.image" :alt="event.title">
        <div class="absolute top-0 right-3 flex items-center justify-center text-center bg-primary font-bold w-24 h-24">
            {{event.date}}
        </div>
        <div class="black-gradient h-full w-full absolute top-0 left-0"></div>
        <div class="absolute bottom-11 left-5 flex flex-col gap-y-4 max-w-[80%] ">
            <div class=" text-[1.68569rem] md:text-3xl font-bold ">{{event.title}}</div>
            <!-- opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 ease-linear -->
            <div ref="description" class="description md:text-base text-sm overflow-hidden">{{event.description}}</div>
            <nuxt-link :to="'/references-details/'+event.id">
                <div class="flex items-center gap-x-2 text-primary font-bold">
                   <div class=" md:text-base text-sm">Mehr</div> 
                   <svg class="w-4 h-5"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  fill="currentColor" d="M13.6289 4.66117C13.8242 4.46591 13.8242 4.14933 13.6289 3.95406L10.447 0.772083C10.2517 0.576821 9.93512 0.576821 9.73986 0.772083C9.54459 0.967345 9.54459 1.28393 9.73986 1.47919L12.5683 4.30762L9.73986 7.13604C9.54459 7.33131 9.54459 7.64789 9.73986 7.84315C9.93512 8.03841 10.2517 8.03841 10.447 7.84315L13.6289 4.66117ZM0.275391 4.80762H13.2754V3.80762H0.275391V4.80762Z"/>
                    </svg>
                </div>
            </nuxt-link>
        </div>

        
    </div>
</template>

<script setup>
const description = ref(null)
const props = defineProps({
    event:Object
})

function toggleDescription() {
    description.value.classList.toggle('show')
    if (description.value.classList.contains('show')) {
        description.value.style.height = description.value.scrollHeight + 'px';
    } else {
        description.value.style.height = 0;
    }
}
onMounted(() => {
    description.value.style.height = description.value.scrollHeight + 'px';
    description.value.style.height = 0;
    description.value.classList.remove('active')

})
</script>

<style scoped>
    .black-gradient{
        background: linear-gradient(to bottom, #0000 75%  , #000);
    }
    .event-card .description {
        height: 0;
        transition: height 0.3s ease;
    }
    .event-card .description.show {
        height: auto;
        transition: height 0.3s ease;
    }
</style>