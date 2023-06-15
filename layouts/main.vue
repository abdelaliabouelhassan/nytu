<template>
    <div class=" w-full bg-white h-full">
        <Header />
        <!-- Body -->
        <div class=" pt-16 flex items-start w-full h-full">
             <div class=" w-full  max-w-[4rem] relative">
                <div class=" fixed bg-white max-w-[4rem]  w-full  border-r border-[#D9D9D9] flex  h-full overflow-hidden">
                    <div class=" m-auto flex items-center space-x-14 m-[-5.5rem] rotate-90">
                        <NuxtLink to="/anmelden" class="flex items-center space-x-2 -space-y-2  font-normal text-black text-base">
                            <span class="-rotate-180 ">Anmelden</span>
                            <Edit class="-rotate-90"/>
                        </NuxtLink>
                         <NuxtLink to="/kontakt" class="flex items-center space-x-2 space-y-1 font-normal text-black text-base">
                            <span class="-rotate-180  ">Kontakt</span>
                            <PhoneM class="-rotate-90"/>
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
    </div>
</template>


<script setup>
    import Header from "@/components/partials/Header.vue"
    import Edit from "@/components/UI/Icons/Edit.vue"
    import PhoneM from "@/components/UI/Icons/PhoneM.vue"
</script>
