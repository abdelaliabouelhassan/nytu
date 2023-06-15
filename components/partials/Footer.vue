<template>
    <footer class=" w-full bg-tertiary py-10">
        <div class=" main-container flex justify-between items-start ">
            <div>
            <NuxtLink to="/"  class=" text-primary">
                <Logo />
            </NuxtLink>
            </div>
            <div class=" flex flex-col items-start space-y-8 w-full max-w-[16.813rem]">
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

            <div class=" flex flex-col items-start space-y-2 w-full max-w-[5.875rem]">
                <NuxtLink :to="item.link"  :class="{'text-primary':item.active}"  class="duration-300  text-white text-base font-normal hover:text-primary	 " v-for="(item,index) in headeLinks" :key="index">
                  {{item.title}}
                </NuxtLink >
            </div>
            <div class=" flex flex-col items-start space-y-4">
                <span class=" text-white text-base font-normal">Social Media</span>
                <a href="" target="_blank">
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9146 22.9592V14.1287C15.9146 11.982 16.4027 10.2041 19.8199 10.2041M13.9619 15.1099H19.8199" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.5 16.5816C32.5 25.4656 25.3342 32.6633 16.5 32.6633C7.66577 32.6633 0.5 25.4656 0.5 16.5816C0.5 7.69766 7.66577 0.5 16.5 0.5C25.3342 0.5 32.5 7.69766 32.5 16.5816Z" stroke="#9099FF"/>
                    </svg>
                </a>
                <a href="" target="_blank">
                   <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.627 15.7465V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.1367 15.7465V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.627 18.8157C15.627 18.0017 15.9487 17.221 16.5215 16.6454C17.0942 16.0698 17.871 15.7465 18.681 15.7465C19.491 15.7465 20.2679 16.0698 20.8406 16.6454C21.4134 17.221 21.7351 18.0017 21.7351 18.8157V22.7618" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.5 17.5C32.5 26.3839 25.3342 33.5816 16.5 33.5816C7.66577 33.5816 0.5 26.3839 0.5 17.5C0.5 8.616 7.66577 1.41833 16.5 1.41833C25.3342 1.41833 32.5 8.616 32.5 17.5Z" stroke="#9099FF"/>
                        <path d="M12.0577 13.8235C12.4917 13.8235 12.8423 13.4701 12.8423 13.0357C12.8423 12.6013 12.4917 12.2479 12.0577 12.2479C11.6237 12.2479 11.2731 12.6013 11.2731 13.0357C11.2731 13.4701 11.6237 13.8235 12.0577 13.8235Z" fill="#9099FF" stroke="#9099FF" stroke-width="0.3"/>
                    </svg>
                </a>
                <a href="" target="_blank">
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4999 21.0057C18.4714 21.0057 20.0696 19.3996 20.0696 17.4183C20.0696 15.4371 18.4714 13.8309 16.4999 13.8309C14.5284 13.8309 12.9302 15.4371 12.9302 17.4183C12.9302 19.3996 14.5284 21.0057 16.4999 21.0057Z" stroke="#9099FF" stroke-miterlimit="10"/>
                        <path d="M20.4266 9.16736H12.5732C10.2074 9.16736 8.28955 11.0947 8.28955 13.4722V21.3644C8.28955 23.7419 10.2074 25.6693 12.5732 25.6693H20.4266C22.7924 25.6693 24.7102 23.7419 24.7102 21.3644V13.4722C24.7102 11.0947 22.7924 9.16736 20.4266 9.16736Z" stroke="#9099FF" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.1405 13.8309C21.7319 13.8309 22.2114 13.3491 22.2114 12.7547C22.2114 12.1603 21.7319 11.6785 21.1405 11.6785C20.549 11.6785 20.0696 12.1603 20.0696 12.7547C20.0696 13.3491 20.549 13.8309 21.1405 13.8309Z" fill="#9099FF"/>
                        <path d="M32.5 17.4183C32.5 26.3023 25.3342 33.4999 16.5 33.4999C7.66577 33.4999 0.5 26.3023 0.5 17.4183C0.5 8.53433 7.66577 1.33667 16.5 1.33667C25.3342 1.33667 32.5 8.53433 32.5 17.4183Z" stroke="#9099FF"/>
                    </svg>
                </a>
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