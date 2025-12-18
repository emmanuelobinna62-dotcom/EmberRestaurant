
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const menulinks = document.querySelectorAll('.menu-link')

function toggleMenu() {
  menu.classList.toggle('hidden');

  hamburger.classList.toggle ('fa-bars');
  hamburger.classList.toggle ('fa-xmark');
  
}

function closeMenu() {
  menu.classList.add('hidden');

  hamburger.classList.toggle ('fa-bars');
  hamburger.classList.toggle ('fa-xmark')
}



hamburger.addEventListener('click',toggleMenu);

menulinks.forEach (link => {
  link.addEventListener ('click',closeMenu);
})

