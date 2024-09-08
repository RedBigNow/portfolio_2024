/*
import { gsap } from '../../../assets/js/libs/gsap/gsap.min.js'
import { ScrollTrigger } from '../../../assets/js/libs/gsap/ScrollTrigger.min.js'
import { ScrollSmoother } from '../../../assets/js/libs/gsap/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const sidebar = document.querySelector('.case-detail__sidebar')

let mm = gsap.matchMedia();

mm.add('(min-width: 1200px)', () => {
  if(sidebar) {
    ScrollTrigger.create({
      trigger: sidebar,
      start: 'top 120px',
      end: 'max',
      pin: true,
      pinSpacing: false,
      //markers: true
    })
  }
})
*/