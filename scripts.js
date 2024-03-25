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


const dark_mode = document.querySelectorAll('.icon__dark_mode')

document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

dark_mode.forEach(item => item.addEventListener('click', () => {
    const wasDarkMode = document.body.classList.toggle('dark-mode');
    // Aggiorna il localStorage con il nuovo stato
    localStorage.setItem('darkMode', wasDarkMode);
}));


const watch = document.querySelectorAll('.watch')
const intersection_observer = new IntersectionObserver( (items) =>{
	items.forEach( item => {
		
		if( item.isIntersecting){
			item.target.classList.add('in-view')
		}
		else{
			item.target.classList.remove('in-view')
		}
	})
}, { threshold: 0.1} )

watch.forEach( el => intersection_observer.observe(el))


const search = document.querySelector('.navbar__icons__search')
const search_icon = document.querySelector('.navbar__icons__search i')
search_icon.addEventListener('click', () =>{
	search.classList.toggle('navbar__icons__search--active')
})