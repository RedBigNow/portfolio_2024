export function useMenu() {

  let menu = document.querySelector('.header__nav'),
    body = document.body

  const openMenu = () => {
    menu.classList.toggle('header__nav--show')
    body.classList.toggle('scroll-disabled')
  }
  
  const closeMenu = () => {
    menu.classList.remove('header__nav--show')
    body.classList.remove('scroll-disabled')
  }

  return {
    menu,
    openMenu,
    closeMenu
  }
}