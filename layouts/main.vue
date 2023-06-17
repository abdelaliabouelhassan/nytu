<template>
    <div class=" w-full bg-white h-full">
        <Header />
        <!-- Body -->
        <div class=" pt-16 flex items-start w-full h-full">
             <div class=" w-full  max-w-[4rem] relative">
                <div :class="{' bg-primary text-white': routeName == 'contact' || routeName == 'register','bg-white text-black':routeName != 'contact' && routeName != 'register' }" class=" fixed  max-w-[4rem]  w-full border-b   border-r border-[#D9D9D9] flex  h-full overflow-hidden">
                    <div class="  flex items-center space-x-14 m-[-5.5rem] rotate-90">
                        <NuxtLink to="/register" class="flex items-center space-x-2 -space-y-2  group ">
                            <span class="-rotate-180 group-hover:text-opacity-75 font-normal  text-base duration-300 ">Anmelden</span>
                            <Edit class="-rotate-90  " :class="{' text-white': routeName == 'contact' || routeName == 'register',' text-tertiary':routeName != 'contact' && routeName != 'register' }"/>
                        </NuxtLink>
                         <NuxtLink to="/contact" class="flex items-center space-x-2 space-y-1 group">
                            <span class="-rotate-180  group-hover:text-opacity-75 font-normal  text-base duration-300 ">Kontakt</span>
                            <img :src="PhoneMw" alt="phone" class="-rotate-90" v-if="routeName == 'contact' || routeName == 'register'">
                            <img :src="PhoneM" alt="phone" class="-rotate-90" v-else>

                        </NuxtLink>
                    </div>
                </div>
             </div>
             <!-- Contnet -->
             <div class=" w-full h-full">
                <slot />
             </div>

             <!-- END Contnet -->
        </div>
        <!-- End Body -->
        <Footer />
    </div>
</template>


<script setup>
    import Header from "@/components/partials/Header.vue"
    import Footer from "@/components/partials/Footer.vue"
    import Edit from "@/components/UI/Icons/Edit.vue"
    import PhoneM from "@/assets/icons/PhoneM.png"
    import PhoneMw from "@/assets/icons/PhoneMw.png"

    const route = useRoute();
    const routeName = computed(() => {
      return route.name
    })
</script>
