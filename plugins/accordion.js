
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('accordion', {
      mounted (el) {
        const headers = el.querySelectorAll('.accordion-header');
        headers.forEach(header => {
            const item = header.parentNode;
            const chevron = header.querySelector('.chevron');

            //initialze height at first so that the animations will be smooth on the first time
            item.classList.add('active')
            const content = item.querySelector('.accordion-content');
            content.style.height = content.scrollHeight + 'px';
            content.style.height = 0;
            item.classList.remove('active')

            header.addEventListener('click', () => {
                item.classList.toggle('active');

                if (item.classList.contains('active')) {
                content.style.height = content.scrollHeight + 'px';
                chevron.classList.add('rotate-0')
                } else {
                content.style.height = 0;
                chevron.classList.remove('rotate-0')

                }
            });
        });
      },
      getSSRProps (binding, vnode) {
        // you can provide SSR-specific props here
        return {}
      }
    })


})
