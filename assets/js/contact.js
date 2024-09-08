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