/*
import { gsap } from '../libs/gsap/gsap.min.js'
import { ScrollTrigger } from '../libs/gsap/ScrollTrigger.min.js'
import { ScrollSmoother } from '../libs/gsap/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


let mm = gsap.matchMedia();

mm.add('(min-width: 1200px)', () => {

  const smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.2
  });

  gsap.utils.toArray('.header__menu-link').forEach(function (button, i) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let id = e.target.getAttribute('href').split('#')[1];
      let link = e.target.getAttribute('href').split('#')[0];

      if(id && window.location.pathname == link) {
        smoother.scrollTo(`#${id}`, true, 'top top');
        return false
      }

      if(id && link) {
        window.location.href = `${link}?block=${id}`;
        return false
      }

      if(!id) {
        window.location.href = link;
        return false
      }
    });
  });

  window.onload = () => {
    let urlParams = new URLSearchParams(window.location.search)
    let queryBlock = urlParams.get('block')
    let block = document.querySelector('#' + queryBlock);

    if(queryBlock && block) {
      gsap.to(smoother, {
        scrollTop: smoother.offset(block, 'top top'),
        duration: 1,
        delay: 0.5
      });
    }
  }

  // Элементы которые меняют высоту страницы при взаимодействии
  const btnMore = document.querySelector('.stack__btn-more')

  if(btnMore) {
    btnMore.addEventListener('click', () => {
      ScrollTrigger.refresh()
    })
  }

  const itemsFadeZoom = document.querySelectorAll('.gsap-fade-zoom')
  const itemsFadeUp = document.querySelectorAll('.gsap-fade-up')
  const itemsFadeDown = document.querySelectorAll('.gsap-fade-down')
  const itemsFadeLeft = document.querySelectorAll('.gsap-fade-left')
  const itemsFadeRight = document.querySelectorAll('.gsap-fade-right')
  const ItemsFadeOut = document.querySelectorAll('.gsap-fade-out')

  if(itemsFadeZoom) {
    itemsFadeZoom.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, scale: 0.8 }, {
        opacity: 1,
        scale: 1,
        force3D: false,
        scrollTrigger: {
          trigger: item,
          pin: false,
          start: 'top bottom',
          end: '+=50%',
          scrub: 1,
          //markers: true,
        }
      });
    })
  }

  if(itemsFadeUp) {
    itemsFadeUp.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, yPercent: 30 }, {
        opacity: 1,
        yPercent: 0,
        force3D: false,
        scrollTrigger: {
          trigger: item,
          pin: false,
          start: 'top bottom',
          end: '+=50%',
          scrub: 1,
          //markers: true,
        }
      });
    })
  }

  if(itemsFadeDown) {
    itemsFadeDown.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, yPercent: -30 }, {
        opacity: 1,
        yPercent: 0,
        force3D: false,
        scrollTrigger: {
          trigger: item,
          pin: false,
          start: 'top bottom',
          end: '+=50%',
          scrub: 1,
          //markers: true,
        }
      });
    })
  }

  if(itemsFadeLeft) {
    itemsFadeLeft.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, xPercent: 10 }, {
        opacity: 1,
        xPercent: 0,
        force3D: false,
        scrollTrigger: {
          trigger: item,
          pin: false,
          start: 'top bottom',
          end: '+=50%',
          scrub: 1,
          //markers: true,
        }
      });
    })
  }

  if(itemsFadeRight) {
    itemsFadeRight.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, xPercent: -10 }, {
        opacity: 1,
        xPercent: 0,
        force3D: false,
        scrollTrigger: {
          trigger: item,
          pin: false,
          start: 'top bottom',
          end: '+=50%',
          scrub: 1,
          //markers: true,
        }
      });
    })
  }

  if(ItemsFadeOut) {
    ItemsFadeOut.forEach((item) => {
      gsap.fromTo(item, { opacity: 1, scale: 1}, {
        scale: 0.8,
        opacity: 0, 
        duration: 3,
        scrollTrigger: {
          trigger: item.querySelector('.gsap-fade-out-marker'),
          pin: false,
          start: 'top +=45%',
          end: 'bottom -=40%',
          scrub: 1,
          //markers: true,
        }
      })
    })
  }

})
*/