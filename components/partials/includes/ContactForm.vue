<template>
    <div class="w-full main-container space-y-10">
            <div class="  flex flex-col items-center md:items-start space-y-6">
                <h1 v-animate class=" text-5xl text-primary font-bold text-center" v-if="show">Vielen Dank!</h1>
                <h1 v-animate   class=" text-tertiary text-2xl md:text-5xl font-bold md:font-medium">Demo planen</h1>
               <p v-animate class=" text-base md:text-xl text-center md:text-start font-normal text-tertiary">
                Sie wollen sehen, was NYTU alles kann? <br>
                Wir zeigen es Ihnen. Mit einer kompakten und anschaulichen Schulung.
               </p>
            </div>

            <form  v-animate @submit.prevent="contactUs" action="" method="post" class=" w-full flex  flex-col  gap-y-5">
                <div class="flex flex-col gap-x-8  gap-y-5 md:flex-row">
                    <input type="text" class=" focus:border-primary w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Name" required>
                    <input type="text" class=" focus:border-primary w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Vorname" required   >
                </div>
                <div class="flex flex-col gap-x-8  gap-y-5 md:flex-row">
                    <input type="text" class=" focus:border-primary w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Firma">
                    <input type="email" class=" focus:border-primary w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Mail">
                </div>

                <div class="flex flex-col gap-x-8  gap-y-5 md:flex-row">
                    <div class="w-full md:w-1/2 flex flex-col gap-y-5 md:order-2">
                        <input type="tel" class=" focus:border-primary w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Telefon">
                        <div class="hidden md:block w-full">
                            <button  type="submit" class=" w-full hover:bg-primary transition-all duration-300 hover:text-tertiary bg-tertiary h-[3.25rem] text-center text-[#85F26C] font-bold text-base md:text-xl">
                                Anfrage senden
                            </button>
                        </div>
                    </div>
                    <textarea  class="resize-none w-full md:w-1/2 md:order-1 focus:border-primary  h-[7.75rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl pt-2 placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Remarks"></textarea>
                    <div class="md:hidden w-full">
                        <button  type="submit" class=" w-full hover:bg-primary transition-all duration-300 hover:text-tertiary bg-tertiary h-[3.25rem] text-center text-[#85F26C] font-bold text-base md:text-xl">
                            Anfrage senden
                        </button>
                    </div>
                </div>
            </form>
        </div>
</template>


<script setup>
 const show = ref(false)

 const contactUs = () => {
     show.value = true
 }
</script>


<style scoped>
.control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
}
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

@media (min-width: 768px) {
.control_indicator {
    
    top: 5px;
}
}

@media (min-width: 75px) {
.control_indicator {
    
    top: 2px;
}
}
.control_indicator {
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
    background: #85F26C;
    border: 1px solid #000000;
    border-radius: undefinedpx;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #85F26C;
}

.control input:checked ~ .control_indicator {
    background: #85F26C;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #85F26C;
}
.control input:disabled ~ .control_indicator {
    background: #85F26C;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-radio .control_indicator {
    border-radius: 50%;
}

.control-radio .control_indicator:after {
    left: 2px;
    top: 2px;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #1d0547;
    transition: background 250ms;
}
.control-radio input:disabled ~ .control_indicator:after {
    background: #7b7b7b;
}
</style>