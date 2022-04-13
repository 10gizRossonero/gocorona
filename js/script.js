'use strict'

const iconMenu = document.querySelector('.icon-menu');

const headerMenu = document.querySelector('.header__menu');

iconMenu.addEventListener('click', function(event){
    iconMenu.classList.toggle('_active')
    headerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
});