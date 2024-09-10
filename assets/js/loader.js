/*=============== Pre loader ===============*/
// var tl = gsap.timeline()

// tl.from(".loader h3" ,{
//   x:40,
//   opacity:0,
//   duration:2,
//   stagger:0.2
// })

// tl.to(".loader h3",{
//   opacity:0,
//   x:-10,
//   duration:1,
//   stagger:0.1
// })

// tl.to(".loader",{
//   opacity:0
// })

// tl.to(".loader",{
//   display:"none"
// })

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