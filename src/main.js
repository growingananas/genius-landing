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

  function removeActiveClasses() {
    summaries.forEach(function(summary) {
    summary.classList.remove('active');
    });
  }
  

  summaries.forEach(function(summary) {
    summary.addEventListener('click', function() {
    // Remove active class from all summaries
    removeActiveClasses();
    
    // Add active class to the clicked summary
    this.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let detailsElements = document.querySelectorAll('details');
  
  function closeAllDetails() {
    detailsElements.forEach(function(details) {
      details.removeAttribute('open');
    });
  }
  
    detailsElements.forEach(function(details) {
      details.querySelector('summary').addEventListener('click', function(event) {

      event.preventDefault();
  
      if (!details.hasAttribute('open')) {
        closeAllDetails();
        details.setAttribute('open', '');
      } else {
        details.removeAttribute('open');
      }
    });
  });
});
