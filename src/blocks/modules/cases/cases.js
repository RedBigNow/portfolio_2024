import { gsap } from '../../../assets/js/libs/gsap/gsap.min.js'
import { ScrollTrigger } from '../../../assets/js/libs/gsap/ScrollTrigger.min.js'
import { ScrollSmoother } from '../../../assets/js/libs/gsap/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const bgAnimate = document.querySelectorAll('.cases__item-bg')

let mm = gsap.matchMedia()

mm.add('(min-width: 1200px)', () => {
  if(bgAnimate) {
    bgAnimate.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, yPercent: 60},
        {
          opacity: 1,
          yPercent: 0,
          duration: 2,
          scrollTrigger: {
            trigger: item.parentNode,
            pin: false,
            start: 'top +=100%',
            end: 'bottom +=90%',
            scrub: 1,
            //markers: true
          }
        }
      )
    })
  }
})