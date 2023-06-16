<template>
    <section class=" w-full bg-primary  py-20">
        <div class=" main-container  space-y-40">
            <div class=" w-full flex flex-col items-start space-y-4">
                <div class=" flex items-center space-x-2">
                    <Star class=" w-[2rem] h-[2.125rem] text-white" />
                    <span class=" text-5xl font-bold text-white">Kontakt</span>
                    <Star class=" w-[2rem] h-[2.125rem] text-white" />
                </div>
                <p class=" text-[5rem] text-white font-light leading-[5rem]">
                    Wir freuen uns von <br> Ihnen zu hören
                </p>
            </div>
            <div class=" flex justify-end ">
                <div class=" max-w-[31.875rem] w-full">
                    <p class=" text-white font-normal text-xl">
                        Für Ihre Fragen, Wünsche und Anliegen steht <br> Ihnen unser erfahrenes Team jederzeit zur <br> Verfügung. <br> <br>
                        Wir stellen sicher, dass nytu perfekt auf <br> Ihre Bedürfnisse abgestimmt ist, um Ihre Events <br> zum Erfolg zu führen.
                    </p>
                </div>
            </div>

           <div class=" w-full grid grid-cols-2">
             <div class=" flex flex-col items-start space-y-20 lg:pl-14">
                <p class=" text-5xl text-white font-medium">
                    nytu AG <br>
                    Ruheberg 16 <br>
                    9327 Tübach 
                </p>
                 <p class=" text-5xl text-white font-medium">
                    +41 71 511 74 55 <br>
                    post@nytu.ch
                </p>
                <NuxtLink to="/register">
                  <button class=" text-center text-xl font-bold text-white bg-tertiary w-[19.938rem] h-[3rem]">Jetzt kostenlos starten</button>
                </NuxtLink>
            </div>
           </div>
        </div>
    </section>
</template>

<script setup>
 import Star from "~/components/UI/Icons/Star.vue"

</script>