<template>
    <div class=" w-full h-[4rem] bg-white border-b border-[#D9D9D9] flex justify-between fixed ">
       <div class=" flex items-center space-x-10 w-full h-full">
        <NuxtLink to="/"  class=" duration-500  max-w-[10rem] hover:bg-primary w-full h-full flex text-primary hover:text-white border-r border-[#D9D9D9]">
             <Logo class=" m-auto"/>
        </NuxtLink >
        <div class=" flex items-center space-x-5 ">
            <NuxtLink :to="item.link"  :class="{'text-primary':item.active}"  class="duration-300  text-black text-base font-normal hover:text-primary	 " v-for="(item,index) in headeLinks" :key="index">
              {{item.title}}
            </NuxtLink >
        </div>
       </div>
       <div class=" max-w-[10rem] w-full h-full">
        <NuxtLink  to="/demo-planen" class=" bg-secondary w-full h-full flex border-l border-[#D9D9D9] group">
           <div class="  flex items-center m-auto space-x-2 group-hover:text-white text-[#1C0544] duration-300 ">
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class=" fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6.5L0.75 12.1292L0.750001 0.870834L9 6.5Z" />
                </svg>
                <span class="  font-bold text-base"> Demo starten</span>
           </div>
        </NuxtLink>
       </div>
      
    </div>
</template>


<script setup>
    import Logo from "@/components/UI/Icons/Logo.vue"
    const route = useRoute();
    const headeLinks = ref([
        {
            title:'Features',
            link:'/features',
            active:false,
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
            link:'/references',
            active:false,
        },
        {
            title:'Nytu hub',
            link:'/help-center',
            active:false,
        },
    ]);

    const routeName = computed(() => {
      return route.name
    })


    watch(routeName, () => {
        SetActive();
    })


    const SetActive = () => {
        headeLinks.value.forEach(element => {
            if(element.link === route.path){
                element.active = true
            }else{
                element.active = false
            }
        })
    }

    onMounted(()=> {
        headeLinks.value.forEach(element => {
            if(element.link === route.path){
                element.active = true
            }
        })
    })
</script>