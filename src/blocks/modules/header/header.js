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