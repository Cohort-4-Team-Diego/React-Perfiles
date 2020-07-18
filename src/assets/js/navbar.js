const mobile = window.matchMedia('screen and (max-width: 767px)')
const burgerButton = document.querySelector('.burger-button')
const teamNav = document.querySelector('.team-nav')
const contactNav = document.querySelector('.contact-nav')

const ulNavbar = document.querySelector('.ulNavbar')

mobile.addListener(validation)

function validation(event){
    if(event.matches){
        burgerButton.addEventListener('click', hideShow)
        teamNav.addEventListener('click', hideShow)
        contactNav.addEventListener('click', hideShow)
    } else {
        burgerButton.removeEventListener('click', hideShow)
        teamNav.removeEventListener('click', hideShow)
        contactNav.removeEventListener('click', hideShow)
    }
}

validation(mobile)

function hideShow() {
    if (ulNavbar.classList.contains('active')) {
        ulNavbar.classList.remove('active')
    } else {
        ulNavbar.classList.add('active')
    }
}