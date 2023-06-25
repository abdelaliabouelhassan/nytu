<template>
    <section class=" w-full main-container  pt-10 pb-28">
        <div class=" w-full grid-cols-2 grid md:grid-cols-3 gap-x-8 gap-y-20">
            <TeamCard v-for="(person,index) in team" :key="index" :person="person" />
            <TeamCard v-for="(person,index) in team" :key="index" :person="person" />
            <TeamCard v-for="(person,index) in team" :key="index" :person="person" />
        </div>
    </section>
</template>

<script setup>
 import TeamCard from "@/components/UI/TeamCard.vue"

 const team = ref([
    {
        id:1,
        image:'/images/person1.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
    },
    {
        id:2,
        image:'/images/person2.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
    },
    {
        id:3,
        image:'/images/person1.svg',
        name:'Frank Fischer',
        title:'Ansprechpartner',
        info:'Geschäftsführung ff@nytu.ch +43 221 888814 13',
    }
 ])
</script>