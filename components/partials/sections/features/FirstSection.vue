<template>
    <section class=" main-container pt-20 pb-28 space-y-32">
        <div class=" w-full flex flex-col items-start space-y-4">
            <div class=" flex items-center space-x-2">
                <Star class=" w-[2rem] h-[2.125rem] text-primary" />
                <span class=" text-5xl font-bold text-tertiary">Features</span>
                <Star class=" w-[2rem] h-[2.125rem] text-primary" />
            </div>
            <p class=" text-[5rem] text-tertiary font-light leading-[5rem]">
                Wie nytu Ihnen hilft
            </p>
        </div>
        <div class=" flex justify-between  w-full items-start ">
            <div class=" pl-20 pt-16">
                <img src="/images/features.svg" class=" w-full h-full max-w-[14.688rem] max-h-[14.938rem] object-cover" alt="">
            </div>
            <div class=" max-w-[31.875rem] w-full">
                <p class=" text-tertiary font-normal text-xl">
                    Nytu ist die perfekte Ergänzung für Ihre Website – mit nur wenigen Klicks ist alles organisch integriert und einsatzbereit. Bleiben Sie jederzeit direkt und persönlich mit Ihrer Zielgruppe in Kontakt und erreichen Sie diese so präzise wie möglich – egal ob für einen kleinen Anlass oder einen grossen Event. Mit der einfachen Integration von Logo, Farben, Bildern und Schriften verleihen Sie Ihrem Event ohne Aufwand einen individuellen Look. Ihre Daten sind bei nytu in sicheren Händen, denn sie werden unter Einhaltung der DSGVO nach den höchsten Sicherheitsstandards in der Schweiz gespeichert.
                    <br> <br>
                    Dank der intelligenten Adress-Synchronisierung sind alle Adressen stets auf dem neuesten Stand und Zahlungen können bequem per QR-Rechnungen, Kreditkarten, TWINT und weiteren Plattformen abgewickelt werden. Auch der Verkauf von Tickets ist mit nytu ein Kinderspiel – modulare Preise und die Gestaltung der Eintrittskarten machen es einfach. Mit dem integrierten Tracking-System behalten Sie jederzeit den Überblick über Buchungen, Anmeldestatus und Einnahmen. Und für die Eintrittskontrolle integrieren Sie ganz einfach einen QR-Code in Ihr Design.
                    <br> <br>
                    Für eine fliessende Kommunikation implementieren Sie ganz bequem die gewünschte Sprache. Mit nytu können Sie Ihren Prozess einfach und effizient strukturieren und dank automatisierter Workflows Zeit sparen. 
                </p>
            </div>
        </div>
    </section>
</template>


<script setup>
 import Star from "~/components/UI/Icons/Star.vue"

</script>