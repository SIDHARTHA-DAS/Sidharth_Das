/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
    loop:true,
    grabCursor: true,
    spaceBetween: 24,


    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop:true,
    grabCursor: true,
    spaceBetween: 34,
     
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail =(e) =>{
   e.preventDefault()

   // Check if the field has a value

   if(contactName.value === ''  || contactEmail.value ===''  || contactProject.value === ''){
      // Add and remove color
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      // Show message	
      contactMessage.textContent = 'Write all the input fields 📩'

   }else{
       // serviceID - templateID - #form - publicKey
       emailjs.sendForm('service_fliy4la', 'template_dzyv6ws', '#contact-form','YEiLLpe_FIC8rCR_6')
         .then(() =>{
          // Show message and add color
          contactMessage.classList.add('color-blue')
          contactMessage.textContent = 'Message sent ✅'

           // Remove message after five seconds
           setTimeout(() =>{
            contactMessage.textContent = ''
           }, 5000)
         }, (error) =>{
            alert('OOPS! SOMETHING HAS FAILED...', error)
         })


       // To clear the input field
       
       contactName.value = ''
       contactEmail.value = ''
       contactProject.value = ''
   }
}      
contactForm.addEventListener('submit', sendEmail)        

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

// Check the stored dark mode state and apply it
const storedDarkMode = localStorage.getItem('darkmode');

if (storedDarkMode === 'enabled') {
    body.classList.add('darkmode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
} else {
    body.classList.remove('darkmode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    // Store the current state in localStorage
    if (body.classList.contains('darkmode')) {
        localStorage.setItem('darkmode', 'enabled');
    } else {
        localStorage.setItem('darkmode', 'disabled');
    }

    if (body.classList.contains('darkmode')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500);
});




// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'sun'

// Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun'

// We validate if the user previously chose a topic
// if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  // document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  // themeButton.classList[selectedIcon === 'moon' ? 'add' : 'remove'](iconTheme)
// }

// Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    // document.body.classList.toggle(darkTheme)
    // themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}                     

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance:'60px',
//   duration: 1500,
//   delay:100,
  //reset: true /**Animations repeat */
// })

// sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
// sr.reveal(`.home__info div`, {delay: 200, origin: 'bottom', interval: 100})
// sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left'})
// sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right'})
// sr.reveal(`.qualification__content, .achivments__card `, { interval:100})
