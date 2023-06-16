<template>
    <section class=" main-container pt-20 pb-28 space-y-20">
        <div class=" w-full flex flex-col items-start space-y-4">
            <div class=" flex items-center space-x-2">
                <Star class=" w-[2rem] h-[2.125rem] text-primary" />
                <span class=" text-5xl font-bold text-tertiary">Updates</span>
                <Star class=" w-[2rem] h-[2.125rem] text-primary" />
            </div>
            <p class=" text-5xl text-tertiary font-light leading-[5rem]">
                Immer auf dem neuesten Stand
            </p>
        </div>
        <div v-accordion class="accordion flex flex-col gap-y-5 w-full ">
                <div class="accordion-item py-10 border-b-2 border-[#D9D9D9]" v-for="(item,index) in updates" :key="index">
                    <div class="accordion-header  py-2 bg-white text-primary  rounded-md flex items-center justify-between">
                      <div class=" text-[5rem] font-normal"> {{ item.version }} </div>
                        <div class=" text-xl text-black font-normal max-w-[29.563rem]"> 
                            {{ item.title }}
                        </div>
                      
                        <svg class="chevron -rotate-180 " width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 18.75L19 1.25L36.5 18.75" stroke="#9099FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                    <div class="accordion-content">
                        <div class=" w-full flex items-center justify-between">
                           <div class=" text-[5rem] font-normal invisible"> V5.6 </div>
                        <div class=" text-xl text-black font-bold w-full max-w-[29.563rem]"> 
                            <div class=" w-full flex  space-x-2 space-y-6" v-for="(content,index) in item.content" :key="index">
                                <span class=" text-5xl ">.</span>
                                <span>{{ content }}</span>
                            </div>
                        </div>
                      
                        <svg class="chevron -rotate-180 invisible " width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 18.75L19 1.25L36.5 18.75" stroke="#9099FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </div>
                    </div>
                </div>
       </div>
    </section>
</template>


<script setup>
 import Star from "@/components/UI/Icons/Star.vue"
 const updates = ref([
    {
        id:1,
        version:'V5.6',
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        content:[
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet'
        ]
    },
     {
        id:1,
        version:'V5.5',
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        content:[
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet'
        ]
    },
     {
        id:1,
        version:'V5.4',
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        content:[
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet'
        ]
    },
     {
        id:1,
        version:'V5.3',
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        content:[
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet'
        ]
    },
    {
        id:1,
        version:'V5.2',
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        content:[
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet'
        ]
    }
 ])
</script>