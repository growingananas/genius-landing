'use strict';

//makes burger work
document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger-btn__open');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.burger-btn__close');
  const body = document.body; 
  
  burger.addEventListener('click', () => {
  menu.classList.add('active');
  body.style.overflow = 'hidden'; 
  });
  
  closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  body.style.overflow = ''; 
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
    menu.classList.remove('active');
    body.style.overflow = '';
    }
  });
});

//toggles active summary in the section 'course-program'
document.addEventListener('DOMContentLoaded', function() {
let summaries = document.querySelectorAll('summary');

  summaries.forEach(function(summary) {
    summary.addEventListener('click', function() {
    // If this summary is already active, remove the active class
      if (this.classList.contains('active')) {
      this.classList.remove('active');
      } else {
      // Otherwise, add the active class
      this.classList.add('active');
      }
    });
  });
});
