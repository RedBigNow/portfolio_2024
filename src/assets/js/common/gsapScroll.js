import { gsap } from '../libs/gsap/gsap.min.js'
import { ScrollTrigger } from '../libs/gsap/ScrollTrigger.min.js'
import { ScrollSmoother } from '../libs/gsap/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


let mm = gsap.matchMedia();

mm.add('(min-width: 1200px)', () => {

  let smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.2
  });

  gsap.utils.toArray('.header__menu-link').forEach(function (button, i) {
    button.addEventListener('click', (e) => {
      var id = e.target.getAttribute('href');
      smoother.scrollTo(id, true, 'top top');
      e.preventDefault();
    });
  });

  // to view navigate to -  https://cdpn.io/pen/debug/XWVvMGr#section3
  window.onload = () => {

    let urlHash = window.location.href.split('#')[1];

    let scrollElem = document.querySelector('#' + urlHash);

    if (urlHash && scrollElem) {
      gsap.to(smoother, {
        scrollTop: smoother.offset(scrollElem, 'top top'),
        duration: 1,
        delay: 0.5
      });
    }
  };

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