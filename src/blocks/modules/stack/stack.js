const stackList = document.querySelectorAll('.stack__item')
const btnMore = document.querySelector('.stack__btn-more')

if(btnMore) {
  btnMore.addEventListener('click', () => {
    if(btnMore.classList.contains('stack__btn-more--active')) {
      for(let i = 0; i < stackList.length; i++) {
        if(i > 8) {
          stackList[i].classList.add('hide')
        }
      }
      btnMore.classList.remove('stack__btn-more--active')
      btnMore.innerHTML = 'Посмотреть все <i class="icon-right icon-arrow-down"></i>'
  
      return false
    }
  
    for(let i = 0; i < stackList.length; i++) {
      stackList[i].classList.remove('hide')
    }
  
    btnMore.classList.add('stack__btn-more--active')
    btnMore.innerHTML = 'Скрыть <i class="icon-right icon-arrow-down"></i>'
  
  })
}