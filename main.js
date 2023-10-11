window.addEventListener('scroll', function () {
  const header = document.getElementById('header')
  const sticky = header.offsetTop

  if (window.pageYOffset > sticky) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
})

const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
  hamburger.classList.toggle('active') // Add this line
})

const closeNav = document.getElementById('close-nav')

closeNav.addEventListener('click', () => {
  mobileNav.classList.remove('active')
  hamburger.classList.remove('active')
})
