<template>
    <section id="tutorials" class=" main-container  md:pt-20 pb-10 md:pb-28 space-y-10 md:space-y-20">
        
        <div class=" flex flex-col w-full items-start space-y-10">
            <span v-animate class=" text-[1.375rem] md:text-[2.5rem] text-tertiary font-bold">Tutorials</span>
            <div class=" w-full grid grid-cols-2 md:grid-cols-3 gap-8">
                <div v-animate class=" w-full bg-primary flex h-[17.125rem]" v-for=" n in 9" :key="n" >
                    <div class=" m-auto flex flex-col items-center space-y-4">
                        <span class=" text-center text-xl md:text-2xl font-bold text-white max-w-[7.9685rem] md:max-w-[10rem]">Tutorial Lorem Ipsum</span>
                        <svg width="81" height="78" viewBox="0 0 81 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_693_4331)">
                            <path d="M78.7536 10.3954H69.4202V5.62792C69.4202 2.9981 67.6267 0.860474 65.4202 0.860474H62.7536C60.5471 0.860474 58.7536 2.9981 58.7536 5.62792V10.3954H37.4202V5.62792C37.4202 2.9981 35.6267 0.860474 33.4202 0.860474H30.7536C28.5471 0.860474 26.7536 2.9981 26.7536 5.62792V10.3954H19.3479C19.1178 9.92497 18.8557 9.47638 18.5235 9.08045C17.5147 7.87815 16.1768 7.21706 14.7536 7.21706C11.8126 7.21706 9.42025 10.0684 9.42025 13.5737V15.1029C5.93682 17.1715 3.53225 21.0417 2.91815 25.5622C2.82063 25.7819 2.75358 26.0217 2.75358 26.2868C2.75358 26.4394 2.7932 26.5756 2.82672 26.7154C2.80082 27.1005 2.75358 27.4819 2.75358 27.876V39.9299L0.477009 42.6432C0.227105 42.9411 0.0869141 43.3461 0.0869141 43.7674V50.124C0.0869141 51.0012 0.684247 51.7132 1.42025 51.7132H8.22101C8.75282 54.8225 10.8115 57.2743 13.4202 57.91V75.5504C13.4202 76.4276 14.0176 77.1395 14.7536 77.1395H78.7536C79.4896 77.1395 80.0869 76.4276 80.0869 75.5504V11.9845C80.0869 11.1073 79.4896 10.3954 78.7536 10.3954ZM61.4202 5.62792C61.4202 4.75252 62.0191 4.03877 62.7536 4.03877H65.4202C66.1547 4.03877 66.7536 4.75252 66.7536 5.62792V10.3954H61.4202V5.62792ZM29.4202 5.62792C29.4202 4.75252 30.0191 4.03877 30.7536 4.03877H33.4202C34.1547 4.03877 34.7536 4.75252 34.7536 5.62792V10.3954H29.4202V5.62792ZM12.0869 13.5737C12.0869 11.821 13.2831 10.3954 14.7536 10.3954C15.4637 10.3954 16.1326 10.7259 16.637 11.3289C17.1414 11.93 17.4202 12.7273 17.4202 13.5737V13.9242C17.3639 13.9096 17.306 13.9042 17.2496 13.8897C17.0058 13.8279 16.7604 13.7843 16.5121 13.7426C16.3444 13.7135 16.1799 13.6754 16.0107 13.6554C15.6816 13.6154 15.3494 13.5973 15.0172 13.59C14.7719 13.5845 14.5265 13.5936 14.2797 13.6063C14.0465 13.6172 13.8149 13.6245 13.5818 13.6517C13.3669 13.6772 13.1566 13.7208 12.9433 13.7589C12.7391 13.7952 12.5364 13.8315 12.3338 13.8824C12.2515 13.9024 12.1692 13.9096 12.0869 13.9314V13.5755V13.5737ZM5.42025 27.876H14.7536C15.4896 27.876 16.0869 27.164 16.0869 26.2868C16.0869 25.4096 15.4896 24.6977 14.7536 24.6977H5.81187C6.60425 21.5085 8.56387 18.8605 11.2458 17.562C12.9646 16.7465 14.8267 16.5594 16.5623 16.959C16.8519 17.0262 17.1383 17.1097 17.4187 17.2096C17.6991 17.3095 17.9764 17.4239 18.2462 17.5565C19.4119 18.1268 20.4602 18.9531 21.3532 20.0029C23.1147 22.1187 24.0854 24.9138 24.0854 27.8778V34.2344H5.42025V27.8778V27.876ZM9.42025 48.5349H2.75358V44.4267L5.03015 41.7134C5.28006 41.4155 5.42025 41.0105 5.42025 40.5892V37.4109H24.0869V40.5892C24.0869 41.0105 24.2271 41.4155 24.477 41.7134L26.7536 44.4267V48.5349H9.42025ZM10.9822 51.7132H18.525C17.9749 53.5639 16.4922 54.8915 14.7536 54.8915C13.0149 54.8915 11.5322 53.5639 10.9822 51.7132ZM77.4202 73.9613H16.0869V57.91C18.6957 57.2761 20.7528 54.8225 21.2862 51.7132H28.0869C28.8229 51.7132 29.4202 51.0012 29.4202 50.124V43.7674C29.4202 43.3461 29.2801 42.9411 29.0302 42.6432L26.7536 39.9299V29.4651H77.4202V73.9613ZM77.4202 26.2868H26.6743C26.3772 23.0777 25.1886 20.0937 23.2366 17.7508C22.3056 16.6539 21.245 15.7658 20.0869 15.0774V13.5755H77.4202V26.2886V26.2868Z" fill="white"/>
                            <path d="M57.4205 54.8915H70.7538C71.4898 54.8915 72.0872 54.1795 72.0872 53.3023V37.4109C72.0872 36.5337 71.4898 35.8217 70.7538 35.8217H57.4205C56.6845 35.8217 56.0872 36.5337 56.0872 37.4109V53.3023C56.0872 54.1795 56.6845 54.8915 57.4205 54.8915ZM58.7538 39H69.4205V51.7132H58.7538V39Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_693_4331">
                            <rect width="80" height="76.2791" fill="white" transform="translate(0.0869141 0.860474)"/>
                            </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>
        </div>

        
        
    </section>
</template>


<script setup>
 import Star from "@/components/UI/Icons/Star.vue"
 import Download from "@/components/UI/Icons/Download.vue"

 const updates = ref([
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?',
        content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
 ])
</script>
