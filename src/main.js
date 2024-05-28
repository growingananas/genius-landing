'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-btn__open');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.burger-btn__close');
  
  burger.addEventListener('click', () => {
  menu.classList.add('active');
  });
  
  closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  });
});