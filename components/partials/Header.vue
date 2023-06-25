<template>
    <header :class="{'bg-white border-primary':!open,' bg-primary border-white ':open}" class="  w-full h-[4rem] z-40 md:bg-white border-b  md:border-[#D9D9D9] flex justify-between fixed ">
       <div class=" flex items-center space-x-10 w-full h-full">
        <NuxtLink to="/"  :class="{'text-primary':!open,' text-white':open}" class=" duration-500  max-w-[10rem] hover:bg-primary w-full h-full flex md:text-primary hover:text-white md:border-r border-[#D9D9D9]">
             <Logo class=" m-auto"/>
        </NuxtLink >
        <div class="  items-center space-x-4 lg:space-x-5 hidden md:flex ">
            <NuxtLink :to="item.link"  :class="{'text-primary':item.active}"  class="duration-300  text-black text-base font-normal hover:text-primary	 " v-for="(item,index) in headeLinks" :key="index">
              {{item.title}}
            </NuxtLink >
        </div>
       </div>
      <div class=" flex items-center space-x-4 md:space-x-0 ">
        <div class=" max-w-[10rem] w-full h-full">
            <NuxtLink  to="/demo-planen" class=" md:bg-secondary px-0 md:px-4 w-full h-full flex md:border-l md:border-[#D9D9D9] group">
            <div :class="{'text-primary':!open,' text-white':open}" class="  flex items-center m-auto space-x-2 md:group-hover:text-white  md:text-[#1C0544] duration-300 ">
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class=" fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6.5L0.75 12.1292L0.750001 0.870834L9 6.5Z" />
                    </svg>
                    <span class="  font-bold text-sm md:text-base whitespace-nowrap"> Demo starten</span>
            </div>
            </NuxtLink>
        </div>
        <button :class="{'border-primary':!open,' border-white ':open}" class=" flex md:hidden w-20 h-full  border-l " @click="open = !open">
            <Burger class=" m-auto" v-if="!open"/>
            <X class=" m-auto" v-else/>
        </button>
      </div>
        <div class="flex items-center lg:order-2 md:hidden">
                <aside id="default-sidebar" :class="{'translate-x-0':open,'-translate-x-full rtl:translate-x-full':!open}" class="fixed py-4 bg-primary top-16 left-0 rtl:right-0 z-40 w-full h-screen transition-transform  " aria-label="Sidebar">
                    <div class="h-full  overflow-y-auto px-4  space-y-8    ">
                         <div class="  items-start flex-col space-y-4 lg:space-x-5  flex ">
                            <NuxtLink :to="item.link"  @click="open = false;" :class="{'text-black':item.active}"  class="duration-300  text-white font-bold text-lg  hover:text-black	 " v-for="(item,index) in mobileHeadeLinks" :key="index">
                            {{item.title}}
                            </NuxtLink >
                         </div>
                         <div class=" flex space-x-5 items-center">
                            <a href="" target="_blank">
                              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9231 28.2376V17.5868C19.9231 14.9974 20.5119 12.853 24.6335 12.853M17.5679 18.7702H24.6335" stroke="white" stroke-width="1.20615" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M39.9279 20.5452C39.9279 31.2606 31.2849 39.9421 20.6295 39.9421C9.97411 39.9421 1.3311 31.2606 1.3311 20.5452C1.3311 9.82973 9.97411 1.14824 20.6295 1.14824C31.2849 1.14824 39.9279 9.82973 39.9279 20.5452Z" stroke="white" stroke-width="1.20615"/>
                             </svg>

                            </a>
                            <a href=""  target="_blank">
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.0906 18.4299V26.8915" stroke="white" stroke-width="1.20615" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.8809 18.4299V26.8915" stroke="white" stroke-width="1.20615" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.0906 22.1319C19.0906 21.15 19.4787 20.2084 20.1695 19.5142C20.8603 18.82 21.7973 18.4299 22.7743 18.4299C23.7512 18.4299 24.6882 18.82 25.379 19.5142C26.0699 20.2084 26.458 21.15 26.458 22.1319V26.8915" stroke="white" stroke-width="1.20615" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M39.4416 20.5453C39.4416 31.2607 30.7986 39.9422 20.1432 39.9422C9.48778 39.9422 0.844776 31.2607 0.844776 20.5453C0.844776 9.82985 9.48778 1.14836 20.1432 1.14836C30.7986 1.14836 39.4416 9.82985 39.4416 20.5453Z" stroke="white" stroke-width="1.20615"/>
                                    <path d="M14.7852 16.1109C15.3087 16.1109 15.7316 15.6846 15.7316 15.1607C15.7316 14.6368 15.3087 14.2106 14.7852 14.2106C14.2617 14.2106 13.8389 14.6368 13.8389 15.1607C13.8389 15.6846 14.2617 16.1109 14.7852 16.1109Z" fill="white" stroke="white" stroke-width="0.361846"/>
                                </svg>
                            </a>
                           <a href="" target="_blank">
                             <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.6569 24.8721C23.0349 24.8721 24.9626 22.9349 24.9626 20.5452C24.9626 18.1555 23.0349 16.2183 20.6569 16.2183C18.279 16.2183 16.3513 18.1555 16.3513 20.5452C16.3513 22.9349 18.279 24.8721 20.6569 24.8721Z" stroke="white" stroke-width="1.20615" stroke-miterlimit="10"/>
                                <path d="M25.3932 10.5934H15.9209C13.0674 10.5934 10.7542 12.9181 10.7542 15.7857V25.3049C10.7542 28.1725 13.0674 30.4972 15.9209 30.4972H25.3932C28.2468 30.4972 30.56 28.1725 30.56 25.3049V15.7857C30.56 12.9181 28.2468 10.5934 25.3932 10.5934Z" stroke="white" stroke-width="1.20615" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M26.2543 16.2182C26.9677 16.2182 27.546 15.6371 27.546 14.9201C27.546 14.2032 26.9677 13.6221 26.2543 13.6221C25.541 13.6221 24.9626 14.2032 24.9626 14.9201C24.9626 15.6371 25.541 16.2182 26.2543 16.2182Z" fill="white"/>
                                <path d="M39.9555 20.5453C39.9555 31.2607 31.3125 39.9422 20.6571 39.9422C10.0017 39.9422 1.35869 31.2607 1.35869 20.5453C1.35869 9.82985 10.0017 1.14836 20.6571 1.14836C31.3125 1.14836 39.9555 9.82985 39.9555 20.5453Z" stroke="white" stroke-width="1.20615"/>
                             </svg>
                            </a>
                         </div>
                         <div>
                            <p class=" text-base font-normal text-white">
                                nytu AG <br>
                                Ruheberg 16 <br>
                                9327 Tübach <br>
                                +41 71 511 74 55 <br>
                                post@nytu.ch
                            </p>
                         </div>
                    </div>
                </aside>
         </div>
    </header>
</template>


<script setup>
    import Logo from "@/components/UI/Icons/Logo.vue"
    import Burger from "@/components/UI/Icons/Burger.vue" 
    import X  from "@/components/UI/Icons/X.vue";
    const open = ref(false)

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


   const mobileHeadeLinks = ref([
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
            title:'Hilfe-Center',
            link:'/help-center',
            active:false,
        },
         {
            title:'Anmelden',
            link:'/register',
            active:false,
        },
         {
            title:'Kontakt',
            link:'/contact',
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