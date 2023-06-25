<template>
    <div class=" main-container space-y-10">
            <div class="  flex flex-col items-center md:items-start space-y-6">
               <h1 class=" text-tertiary text-2xl md:text-5xl font-bold md:font-medium">Demo planen</h1>
               <p class=" text-base md:text-xl text-center md:text-start font-normal text-tertiary">
                Sie wollen sehen, was NYTU alles kann? <br>
                Wir zeigen es Ihnen. Mit einer kompakten und anschaulichen Schulung.
               </p>
            </div>

            <form  action="" method="post" class=" w-full grid md:grid-cols-2 gap-x-8 gap-y-5">
                <input type="text" class=" w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Name" required>
                <input type="text" class=" w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Vorname" required   >
                <input type="text" class=" w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Firma">
                <input type="text" class=" w-full h-[3.25rem] border border-tertiary bg-transparent text-tertiary text-base md:text-xl placeholder-tertiary pl-4 md:pl-8 outline-none pr-4" placeholder="Telefon">
                <div class=" grid grid-cols-2 gap-x-8 gap-y-5 md:pt-4">
                    <div class="control-group">
                        <label class="control control-radio text-base md:text-xl font-normal text-tertiary">
                            per Telefon
                                <input type="radio" name="per" checked="checked" />
                            <div class="control_indicator"></div>
                        </label>
                    </div>
                    <div class="control-group">
                        <label class="control control-radio text-base md:text-xl font-normal text-tertiary">
                               per E-Mail
                                <input type="radio" name="per" checked="checked" />
                            <div class="control_indicator"></div>
                        </label>
                    </div>
                </div>
                <div class=" w-full">
                    <button type="submit" class=" w-full bg-tertiary h-[3.25rem] text-center text-[#85F26C] font-bold text-base md:text-xl">
                        Anfrage senden
                    </button>
                </div>
            </form>
        </div>
</template>



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