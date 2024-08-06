export function usePopup() {

  let body = document.body

  const showPopup = (name) => {
    let popup = document.querySelector(`.popup[data-popup="${name}"]`)

    popup.classList.add('popup--show')

    popup.scrollTo({
      top: 0,
      left: 0
    })
    
    body.classList.add('scroll-disabled')
  }
  
  const closePopup = () => {
    let popupList = document.querySelectorAll('.popup')

    popupList.forEach((item) => {
      item.classList.add('popup--hide')
      body.classList.remove('scroll-disabled')
    })

    setTimeout(() => {
      popupList.forEach((item) => {
        item.classList.remove('popup--show')
        item.classList.remove('popup--hide')
      })
    }, 150);
  }

  return {
    showPopup,
    closePopup
  }
}