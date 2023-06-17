<template>
    <section class=" w-full main-container py-20">
        <div class=" w-full flex flex-col items-start space-y-10">
                <h1 class=" text-[5rem] text-tertiary font-normal">The Zurich OpenAir</h1>
                <div class=" w-full">
                    <Video>
                        <img src="/images/events.svg" alt="">
                        <DateTicket datetext="Oktober 2022" class=" absolute top-0 right-4 w-[8.593rem] h-[8.818rem] text-2xl" />
                    </Video>
                        
                </div>
                <p class=" text-black text-xl font-normal max-w-[44.125rem] mx-auto pt-10">
                    Im malerischen Zürich, Schweiz, erfüllt eine harmonische Symphonie die Luft und lädt zu einem bezaubernden Erlebnis ein: Melodia: Das Zürich OpenAir. Inmitten grüner Wiesen und den majestätischen Alpen erwacht Melodia wie ein surrealer Traum. Renommierte Künstler aus aller Welt vereinen sich, um die Sinne mit ihrer Musik zu verzaubern. Von Orchestern bis zu Pop und Rock bieten vielfältige Klänge für jeden Geschmack ein musikalisches Fest. Kunstinstallationen und kulinarische Köstlichkeiten umgeben die Festivalatmosphäre und schaffen eine einzigartige Erfahrung. Melodia lädt Musikliebhaber und neugierige Besucher ein, gemeinsam Momente der Einheit und Freude zu erleben. Seien Sie Teil dieses außergewöhnlichen Musikevents, das die Grenzen des Gewöhnlichen überschreitet und unvergessliche Erinnerungen schafft. Melodia: Das Zürich OpenAir - eine Feier der Musik, Natur und kreativen Leidenschaft.
                </p>
        </div>
    </section>
</template>

<script setup>
 import Video from "@/components/UI/Video.vue"
 import DateTicket from "@/components/UI/DateTicket.vue"
</script>