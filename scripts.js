const swiper = new Swiper(".swiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 1.5,
	coverflowEffect: {
	  rotate: 50,
	  stretch: 0,
	  depth: 100,
	  modifier: 1,
	  slideShadows: true,
	},
	pagination: {
	  el: ".swiper-pagination",
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
			}
		}
});

const navbar__toggle = document.querySelector('.navbar__toggle')
const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

navbar__toggle.addEventListener('click', () => {
	navbar.classList.toggle('navbar--active')
	menu.classList.toggle('menu--open')
	body.classList.toggle('overflow--hidden')
})