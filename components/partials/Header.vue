<template>
    <div class=" w-full h-[4rem] bg-white border-b border-[#D9D9D9] flex justify-between fixed">
       <div class=" flex items-center space-x-10 w-full h-full">
        <NuxtLink to="/"  class=" max-w-[10rem] hover:bg-primary  w-full h-full flex text-primary hover:text-white border-r border-[#D9D9D9]">
             <Logo class=" m-auto"/>
        </NuxtLink >
        <div class=" flex items-center space-x-5 ">
            <NuxtLink :to="item.link" :class="{'text-primary':item.active}"  class=" text-black text-base font-normal hover:text-primary	 " v-for="(item,index) in headeLinks" :key="index">
              {{item.title}}
            </NuxtLink >
        </div>
       </div>
       <div class=" max-w-[10rem] w-full h-full">
        <button class=" bg-secondary w-full h-full flex border-l border-[#D9D9D9]">
           <div class="  flex items-center m-auto space-x-2 items-center">
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6.5L0.75 12.1292L0.750001 0.870834L9 6.5Z" fill="#1C0544"/>
                </svg>
                <span class=" text-[#1C0544] font-bold text-base"> Demo starten</span>
           </div>
        </button>
       </div>
    </div>
</template>


<script setup>
    import Logo from "@/components/UI/Icons/Logo.vue"
    const headeLinks = ref([
        {
            title:'Features',
            link:'/features',
            active:true,
        },
        {
            title:'This is Us',
            link:'/about-us',
            active:false,
        },
        {
            title:'Pricing',
            link:'/pricing',
            active:false,
        },
        {
            title:'Referenzen',
            link:'/referenzen',
            active:false,
        },
        {
            title:'Nytu hub',
            link:'/nytu-hub',
            active:false,
        },
    ]);
</script>