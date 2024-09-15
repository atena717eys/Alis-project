const mainNav = document.querySelector('.mainNav')
document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
        mainNav.classList.add('bg-white')
    } else {
        mainNav.classList.remove('bg-white')
    }
})
const hamMenu = document.querySelector('.ham-menu')
const listNavbar = document.querySelector('.list-navbar')
const hamLine = [...document.querySelectorAll('.ham-line')]

hamMenu.addEventListener('click', () => {
    listNavbar.classList.toggle('show-menu')

    hamLine[0].classList.toggle('line-rotate1')
    hamLine[1].classList.toggle('line-rotate2')
})
let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
  let swiper2 = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
  