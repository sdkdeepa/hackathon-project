const scrollToTopButton = document.getElementById('scrollToTopBtn')

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  links.forEach(link => {
    link.classList.toggle('fade')
  })
})
