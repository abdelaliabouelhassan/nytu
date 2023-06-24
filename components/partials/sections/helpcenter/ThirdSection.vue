<template>
    <section class=" main-container pt-20 pb-10 md:pb-28 space-y-10 md:space-y-20">
        <div class=" w-full flex flex-col items-start space-y-4">
            <div class=" flex items-center space-x-2">
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
                <span class=" text-xl md:text-5xl font-bold text-tertiary">Hilfe-Center</span>
                <Star class="  w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-primary" />
            </div>
            <p class=" text-3xl md:text-5xl text-tertiary font-light md:leading-[5rem]">
                Wir lassen keine Fragen offen
            </p>
        </div>
         <div class=" flex justify-end ">
            <div class=" max-w-[18.5rem] md:max-w-[31.875rem] w-full">
                <p class=" text-black font-normal text-base md:text-xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>

        <div class=" flex flex-col w-full items-start space-y-10">
            <span class=" text-[1.35rem] md:text-[2.5rem] text-tertiary font-bold">Downloads</span>
           <div class=" w-full space-y-2 border-t border-[#D9D9D9]">
             <div class=" w-full flex justify-between items-center py-4 border-b  border-[#D9D9D9]" v-for="n in 5" :key="n">
                <span class=" text-lg md:text-xl text-black font-normal">Download XYZ</span>
                <button>
                        <Download />
                </button>
            </div>
           </div>
           <div class=" w-full flex">
            <button class=" m-auto flex flex-col items-center space-y-4 text-base md:text-xl text-primary font-bold">
                <span>Mehr anzeigen</span>
                <svg width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M36.5869 1.5L19.0869 19L1.58691 1.5" stroke="#9099FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
           </div>
        </div>

          <div class=" flex flex-col w-full items-start space-y-10">
            <span class=" text-[1.375rem] md:text-[2.5rem] text-tertiary font-bold">FAQ</span>
          <div v-accordion class="accordion flex flex-col gap-y-5 w-full ">
                <div class="accordion-item  border-b-2 border-[#D9D9D9]" v-for="(item,index) in updates" :key="index">
                    <div class="accordion-header  py-2 bg-white text-primary  rounded-md flex items-center justify-between">
                        <div class=" text-base md:text-xl text-black font-normal "> 
                            {{ item.title }}
                        </div>

                        <svg class="chevron -rotate-180 " width="37" height="19" viewBox="0 0 37 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M35.7744 0.5L18.5869 18L1.39941 0.499998" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>


                    </div>
                    <div class="accordion-content pt-4">
                        <div class=" w-full">
                        <div class=" text-base md:text-xl text-black font-medium w-full pb-5 "> 
                            {{ item.content }}
                        </div>
                      
                       

                        </div>
                    </div>
                </div>
       </div>
           <div class=" w-full flex">
            <button class=" m-auto flex flex-col items-center space-y-4 text-base md:text-xl text-primary font-bold">
                <span>Mehr anzeigen</span>
                <svg width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M36.5869 1.5L19.0869 19L1.58691 1.5" stroke="#9099FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
           </div>
        </div>
        
    </section>
</template>


<script setup>
 import Star from "@/components/UI/Icons/Star.vue"
 import Download from "@/components/UI/Icons/Download.vue"

 const updates = ref([
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
 ])
</script>
