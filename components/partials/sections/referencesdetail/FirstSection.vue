<template>
    <section class=" w-full main-container pt-10 md:pt-20">
        <div class=" w-full flex flex-col items-start space-y-10">
                <h1 v-animate class=" text-3xl md:text-[4.7rem] lg:text-[5rem] text-tertiary font-normal">The Zurich OpenAir</h1>
                <div v-animate class=" w-full">
                    <Video @click="showVideo = true">
                        <img src="/images/events.svg" alt="">
                        <DateTicket datetext="Oktober 2022" class=" absolute top-0 right-2 md:right-4 w-[4.0625rem] h-[4.0625rem] md:w-[8.593rem] md:h-[8.818rem] text-sm md:text-2xl" />
                    </Video>
                        
                </div>
                <p v-animate class=" text-black text-base md:text-xl font-normal max-w-[44.125rem] mx-auto pt-10">
                    Im malerischen Zürich, Schweiz, erfüllt eine harmonische Symphonie die Luft und lädt zu einem bezaubernden Erlebnis ein: Melodia: Das Zürich OpenAir. Inmitten grüner Wiesen und den majestätischen Alpen erwacht Melodia wie ein surrealer Traum. Renommierte Künstler aus aller Welt vereinen sich, um die Sinne mit ihrer Musik zu verzaubern. Von Orchestern bis zu Pop und Rock bieten vielfältige Klänge für jeden Geschmack ein musikalisches Fest. Kunstinstallationen und kulinarische Köstlichkeiten umgeben die Festivalatmosphäre und schaffen eine einzigartige Erfahrung. Melodia lädt Musikliebhaber und neugierige Besucher ein, gemeinsam Momente der Einheit und Freude zu erleben. Seien Sie Teil dieses außergewöhnlichen Musikevents, das die Grenzen des Gewöhnlichen überschreitet und unvergessliche Erinnerungen schafft. Melodia: Das Zürich OpenAir - eine Feier der Musik, Natur und kreativen Leidenschaft.
                </p>
                <div v-animate class=" w-full max-h-[31.25rem] h-full">
                        <img src="/images/events2.svg" class=" w-full h-full object-cover" alt="">
                </div>
                <div class="max-w-[44.125rem] mx-auto pt-10 flex flex-col w-full items-start space-y-10">
                    <h1 v-animate class=" text-black text-[1.375rem] md:text-5xl font-bold">KPIs</h1>
                    <div v-animate class=" w-full space-y-2">
                        <span class=" text-primary text-lg md:text-2xl font-bold">Zielgruppe</span>
                        <p class=" text-base md:text-xl text-black font-normal">
                            Musikbegeisterte, leidenschaftliche Festivalbesucher, Kunst- und Kulturinteressierte, Menschen auf der Suche nach einzigartigen Erlebnissen, sowohl Einheimische als auch internationale Besucher. 
                        </p>
                    </div>
                    <div v-animate class=" w-full space-y-2">
                        <span class=" text-primary text-lg md:text-2xl font-bold">Teilnehmerzahl</span>
                        <p class=" text-base md:text-xl text-black font-normal">
                            Mit einer Kapazität von über 20.000 Teilnehmern strebt Melodia an, eine vielfältige Menge anzuziehen und eine lebendige und inklusive Atmosphäre zu schaffen. 
                        </p>
                    </div>
                    <div v-animate class=" w-full space-y-2">
                        <span class=" text-primary text-lg md:text-2xl font-bold">Tickets</span>
                        <p class=" text-base md:text-xl text-black font-normal">
                            Ja, es waren Tickets erhältlich, um den Teilnehmern ihren Platz bei diesem außergewöhnlichen Musikfest zu sichern. 
                        </p>
                    </div>
                    <div v-animate class=" w-full space-y-2">
                        <span class=" text-primary text-lg md:text-2xl font-bold">Ziel des Events</span>
                        <p class=" text-base md:text-xl text-black font-normal">
                            Das Zürich OpenAir ist es, ein intensives und unvergessliches Erlebnis zu schaffen, bei dem Musik, Natur und Kunst aufeinandertreffen. Das Event strebt danach, eine vielfältige Auswahl an renommierten Künstlern zu präsentieren, um ein Gefühl der Einheit, des kulturellen Austauschs und der Freude unter den Teilnehmern zu fördern. Durch seine bezaubernde Atmosphäre will Melodia Grenzen überwinden und den Besuchern bleibende Erinnerungen und ein tiefes Gefühl der Erfüllung vermitteln.
                        </p>
                    </div>
                </div>
        </div>
        <VideoModal :show="showVideo" @close="showVideo = false" :src="videoSrc"/>
    </section>
</template>

<script setup>
import VideoModal from '@/components/UI/VideoModal.vue'

 import Video from "@/components/UI/Video.vue"
 import DateTicket from "@/components/UI/DateTicket.vue"
 const videoSrc = ref('/images/home/multichannel_marketing.svg')
 const showVideo = ref(false)
</script>