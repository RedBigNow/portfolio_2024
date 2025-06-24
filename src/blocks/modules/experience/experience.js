import { gsap } from '../../../assets/js/libs/gsap/gsap.min.js'
import { ScrollTrigger } from '../../../assets/js/libs/gsap/ScrollTrigger.min.js'
import { ScrollSmoother } from '../../../assets/js/libs/gsap/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const ItemsAnimate = document.querySelectorAll('.experience__info--animated')

let mm = gsap.matchMedia()

mm.add('(min-width: 1200px)', () => {

  if(ItemsAnimate) {

    ItemsAnimate.forEach((item, index) => {
      mm.add('(max-width: 2000px)', () => {

        const triggerBottom = index === 0 ? '130' : '100'

        gsap.fromTo(item, { opacity: 0, yPercent: 30}, {
          opacity: 1,
          yPercent: 0,
          scrollTrigger: {
            trigger: item,
            pin: false,
            start: 'top +=100%',
            end: `bottom +=${triggerBottom}%`,
            scrub: 1,
            //markers: true
          }
        })

        gsap.fromTo('.experience__bg', { opacity: 0, scale: 0.1 }, {
          opacity: 1,
          scale: 1,
          force3D: false,
          scrollTrigger: {
            trigger: item.parentNode.parentNode,
            pin: false,
            start: 'top +=80%',
            end: 'top -100px',
            scrub: 1,
            //markers: true
          }
        })
      })
    })  
  }
})

const experienceList = document.querySelectorAll('.experience__col')
const btnMore = document.querySelector('.experience__btn-more')

if(btnMore) {
  btnMore.addEventListener('click', () => {
    if(btnMore.classList.contains('experience__btn-more--active')) {
      for(let i = 0; i < experienceList.length; i++) {
        if(i > 1) {
          experienceList[i].classList.add('hide')
        }
      }
      btnMore.classList.remove('experience__btn-more--active')
      btnMore.innerHTML = 'Посмотреть все <i class="icon-right icon-arrow-down"></i>'
  
      return false
    }
  
    for(let i = 0; i < experienceList.length; i++) {
      experienceList[i].classList.remove('hide')
    }
  
    btnMore.classList.add('experience__btn-more--active')
    btnMore.innerHTML = 'Скрыть <i class="icon-right icon-arrow-down"></i>'
  
  })
}