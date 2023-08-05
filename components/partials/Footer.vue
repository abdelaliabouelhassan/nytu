<template>
    <footer class=" w-full bg-tertiary py-10">
        <div class="main-container ">

            <div class="flex flex-col md:hidden gap-y-9">
                <div v-animate  class="  md:pl-20 xl:pl-0 flex items-center justify-between">
                    <NuxtLink to="/"  class=" text-primary">
                        <Logo />
                    </NuxtLink>
                    <a href="" target="_blank">
                        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.627 15.7465V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.1367 15.7465V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.627 18.8157C15.627 18.0017 15.9487 17.221 16.5215 16.6454C17.0942 16.0698 17.871 15.7465 18.681 15.7465C19.491 15.7465 20.2679 16.0698 20.8406 16.6454C21.4134 17.221 21.7351 18.0017 21.7351 18.8157V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M32.5 17.5C32.5 26.3839 25.3342 33.5816 16.5 33.5816C7.66577 33.5816 0.5 26.3839 0.5 17.5C0.5 8.616 7.66577 1.41833 16.5 1.41833C25.3342 1.41833 32.5 8.616 32.5 17.5Z" stroke="#9099FF"/>
                            <path d="M12.0577 13.8235C12.4917 13.8235 12.8423 13.4701 12.8423 13.0357C12.8423 12.6013 12.4917 12.2479 12.0577 12.2479C11.6237 12.2479 11.2731 12.6013 11.2731 13.0357C11.2731 13.4701 11.6237 13.8235 12.0577 13.8235Z" fill="#9099FF" stroke="#9099FF" stroke-width="0.3"/>
                        </svg>
                    </a>
                </div>
                <p  v-animate  class=" text-base font-bold text-primary">
                    Wir sind für Sie da – Nehmen Sie mit uns unverbindlich Kontakt auf.
                </p>
                <div v-animate class="flex justify-between">
                    <p class=" text-white font-normal text-base">
                        nytu AG <br>
                        Ruheberg 16 <br>
                        9327 Tübach <br>
                        +41 71 511 74 55 <br>
                        post@nytu.ch
                    </p>
                    <div data-footer class=" flex flex-col items-start space-y-2 w-full max-w-[5.875rem]">
                    <NuxtLink :to="item.link"  :class="{'text-primary':item.active}"  class="duration-300  text-white text-base font-normal hover:text-primary	 " v-for="(item,index) in headeLinks" :key="index">
                    {{item.title}}
                    </NuxtLink >
                </div>
                </div>
                
            </div>

            <div class=" hidden  justify-between items-start  md:flex ">
                <div v-animate class="  md:pl-20 xl:pl-0">
                <NuxtLink to="/"  class=" text-primary">
                    <Logo />
                </NuxtLink>
                </div>
                <div v-animate class=" flex flex-col items-start space-y-8 w-full max-w-[16.813rem]">
                    <p class=" text-base font-bold text-primary">
                        Wir sind für Sie da – Nehmen Sie mit uns unverbindlich Kontakt auf.
                    </p>
                    <p class=" text-white font-normal text-base">
                        nytu AG <br>
                        Ruheberg 16 <br>
                        9327 Tübach <br>
                        +41 71 511 74 55 <br>
                        post@nytu.ch
                    </p>
                </div>

                <div v-animate class=" flex flex-col items-start space-y-2 w-full max-w-[5.875rem]">
                    <NuxtLink :to="item.link"  :class="{'text-primary':item.active}"  class="duration-300  text-white text-base font-normal hover:text-primary	 " v-for="(item,index) in headeLinks" :key="index">
                    {{item.title}}
                    </NuxtLink >
                </div>
                <div v-animate class=" flex flex-col items-start space-y-4">
                    <span class=" text-white text-base font-normal">Social Media</span>
                   
                    <a href="" target="_blank">
                        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.627 15.7465V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.1367 15.7465V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.627 18.8157C15.627 18.0017 15.9487 17.221 16.5215 16.6454C17.0942 16.0698 17.871 15.7465 18.681 15.7465C19.491 15.7465 20.2679 16.0698 20.8406 16.6454C21.4134 17.221 21.7351 18.0017 21.7351 18.8157V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M32.5 17.5C32.5 26.3839 25.3342 33.5816 16.5 33.5816C7.66577 33.5816 0.5 26.3839 0.5 17.5C0.5 8.616 7.66577 1.41833 16.5 1.41833C25.3342 1.41833 32.5 8.616 32.5 17.5Z" stroke="#9099FF"/>
                            <path d="M12.0577 13.8235C12.4917 13.8235 12.8423 13.4701 12.8423 13.0357C12.8423 12.6013 12.4917 12.2479 12.0577 12.2479C11.6237 12.2479 11.2731 12.6013 11.2731 13.0357C11.2731 13.4701 11.6237 13.8235 12.0577 13.8235Z" fill="#9099FF" stroke="#9099FF" stroke-width="0.3"/>
                        </svg>
                    </a>
                   
                </div>
            </div>

          
        </div>
    </footer>
</template>




<script setup>
    import Logo from "@/components/UI/Icons/Logo.vue"
     const headeLinks = ref([
        {
            title:'Einführung',
            link:'/',
            active:false,
        },
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
            title:'Testimonials',
            link:'/',
            active:false,
        },
    ]);
</script>