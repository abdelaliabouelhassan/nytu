<template>
    <section class=" w-full bg-primary  py-20">
        <div class=" main-container  space-y-20">
            <div class=" w-full flex flex-col items-start space-y-4">
                <div class=" flex items-center space-x-2">
                    <Star class=" w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-white" />
                    <span class=" text-xl md:text-5xl font-bold text-white">Registrieren</span>
                    <Star class=" w-[0.8125rem] h-[0.8125rem] md:w-[2rem] md:h-[2.125rem] text-white" />
                </div>
                <p class=" text-3xl md:text-[5rem] text-white font-light md:leading-[5rem]">
                   Account erstellen & loslegen
                </p>
            </div>
            <div class=" flex justify-end ">
                <div class=" max-w-[18.5rem] md:max-w-[31.875rem] w-full">
                    <p class=" text-white font-normal text-base md:text-xl">
                        Starten Sie mit unserem Essential-Paket ohne wiederkehrende Kosten.Sie können jederzeit ein Upgrade Ihres Abonnements vornehmen, um die Plattform noch besser zu nutzen.
                        <br> <br>
                        Sie erhalten nach Ihrer Registrierung Ihren persönlichen Zugang und haben die Möglichkeit, weitere Benutzer einzuladen.
                    </p>
                </div>
            </div>

          <form action="" method="post" class=" space-y-4">
            <input type="text" class=" w-full h-[3.25rem] border border-white bg-transparent text-white text-base md:text-xl placeholder-white pl-4 md:pl-8 outline-none pr-4" placeholder="Unternehmen" required>
            <div class=" relative w-full">
                  <input type="text" class=" w-full  h-[3.25rem] border border-white bg-transparent text-white text-base md:text-xl placeholder-white pl-4 md:pl-8 outline-none pr-28 md:pr-36" placeholder="Ihre persönliche Webadresse" required>
                    <div  class=" absolute top-0 right-0 w-[6rem] md:w-[8.438rem] h-[3.25rem] bg-white flex  text-center text-primary text-base md:text-xl font-normal">
                        <span class=" m-auto">.privent.ch</span>
                    </div>
            </div>
            <div class=" w-full flex md:flex-row flex-col space-y-4 md:space-x-4 md:space-y-0 items-start md:justify-between">
                <div class=" md:max-w-[29.813rem] w-full space-y-4">
                    <input type="text" class=" w-full h-[3.25rem] border border-white bg-transparent text-white text-base md:text-xl placeholder-white pl-4 md:pl-8 outline-none pr-4" placeholder="Vorname" required>
                    <input type="text" class=" w-full h-[3.25rem] border border-white bg-transparent text-white text-base md:text-xl placeholder-white pl-4 md:pl-8 outline-none pr-4" placeholder="Name" required>
                    <input type="email" class=" w-full h-[3.25rem] border border-white bg-transparent text-white text-base md:text-xl placeholder-white pl-4 md:pl-8 outline-none pr-4" placeholder="Email" required>
                    <input type="password" class=" w-full h-[3.25rem] border border-white bg-transparent text-white text-base md:text-xl placeholder-white pl-4 md:pl-8 outline-none pr-4" placeholder="Passwort" required>
                </div>

                <div class=" flex flex-col items-end space-y-8 md:space-y-24 md:max-w-[22rem]">
                    <div class=" flex items-start space-x-2">
                      <div class="control-group">
                        <label class="control control-checkbox">
                                <input type="checkbox" checked="checked" />
                            <div class="control_indicator"></div>
                        </label>
                      </div>
                        <p class=" text-white text-xl font-normal">Ich akzeptiere die Allgemeinen Geschäftsbedingungen und bin mit dem Datenschutz einverstanden.</p>
                    </div>
                    
                    <button type="submit" class=" w-full text-center text-base md:text-xl font-bold text-white bg-tertiary md:w-[19.938rem] h-[3rem]">Anfrage senden</button>
                    
                </div>
                
            </div>
          </form>
        </div>
    </section>
</template>

<script setup>
 import Star from "~/components/UI/Icons/Star.vue"

</script>


<style scoped>
.control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 16px;
}
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
.control_indicator {
    position: absolute;
    top: 3px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #8e97ff;
    border: 1px solid #ffffff;
    border-radius: 0px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #9099ff;
}

.control input:checked ~ .control_indicator {
    background: #919aff;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #919aff;
}
.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
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
.control-checkbox .control_indicator:after {
    left: 7px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
}
</style>