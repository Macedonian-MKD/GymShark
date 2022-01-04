const backdrop = document.querySelector('.backdrop');
const cta = document.querySelectorAll('.header__list-link--cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close-button');
let form = document.querySelectorAll('form');
const burgerMenu = document.querySelector(".header__mobile-button");
const closeBurgerMenu = document.querySelector('.close-mobile-nav');
const mobileNav = document.querySelector('.mobile-nav');
let mobileNavLinks = document.querySelectorAll('.mobile-nav a');

mobileNavLinks.forEach(function(val){
    val.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    })
})
burgerMenu.addEventListener('click',function(){
    mobileNav.classList.add('open');
})

closeBurgerMenu.addEventListener('click',function(){
    mobileNav.classList.remove('open');
})

cta.forEach(function(val){
    val.addEventListener('click', function(){
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
})

backdrop.addEventListener('click', function(){
    backdrop.classList.remove('open');
    modal.classList.remove('open');
})

closeModal.addEventListener('click', function(){
    backdrop.classList.remove('open');
    modal.classList.remove('open');
})

form.forEach(function(val){
    val.addEventListener('submit', function(e){
        e.preventDefault();
    })
})