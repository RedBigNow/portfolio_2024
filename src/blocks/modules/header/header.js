import { useMenu } from '../../../assets/js/use/useMenu'
const { openMenu, closeMenu } = useMenu()

const navbar = document.querySelector('.header__navbar')
const burger = document.querySelector('.header__burger')

navbar.addEventListener('click', () => {
  if(burger.classList.contains('header__burger--active')) {
    closeMenu()
    burger.classList.remove('header__burger--active')
  } else {
    openMenu()
    burger.classList.add('header__burger--active')
  }
})

// Показывать/скрывать шапку при скролле
let lastScroll = 0;
const defaultOffset = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header--out');

window.addEventListener('scroll', () => {

  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('header--out');
  }
  else if(scrollPosition() < lastScroll && containHide()){
    header.classList.remove('header--out');
  }

  if (scrollPosition() != 0) {
    header.classList.add('header--sticky')
  } else {
    header.classList.remove('header--sticky')
  }

  lastScroll = scrollPosition();
})