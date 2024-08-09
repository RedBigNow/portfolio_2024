import { gsap } from '../../../assets/js/libs/gsap/gsap.min.js'
import { ScrollTrigger } from '../../../assets/js/libs/gsap/ScrollTrigger.min.js'
import { ScrollSmoother } from '../../../assets/js/libs/gsap/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const ItemsAnimate = document.querySelectorAll('.experience__info')

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

        gsap.fromTo('.experience__bg', { opacity: 0, scale: 0.5 }, {
          opacity: 1,
          scale: 1,
          force3D: false,
          scrollTrigger: {
            trigger: item.parentNode,
            pin: false,
            start: 'top +=80%',
            end: 'bottom +=60%',
            scrub: 1,
            //markers: true
          }
        })
      })
    })  
  }
})