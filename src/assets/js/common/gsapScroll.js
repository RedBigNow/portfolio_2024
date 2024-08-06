import { gsap } from '../libs/gsap/gsap.min.js'
import { ScrollTrigger } from '../libs/gsap/ScrollTrigger.min.js'
import { ScrollSmoother } from '../libs/gsap/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.25
});