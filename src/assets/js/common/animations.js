let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.remove('is-animate')
      entry.target.classList.add(entry.target.dataset.animate)
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(callback, options)

const targets = document.querySelectorAll('.is-animate')

document.addEventListener('DOMContentLoaded', function () {

  if (window.innerWidth >= 1000) {
    targets.forEach(target => {
      observer.observe(target)
    })
  } else {
    targets.forEach(target => {
      target.classList.remove('is-animate')
      target.removeAttribute('data-animate')
    })
  }

});