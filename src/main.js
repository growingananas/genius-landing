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
  
  // Function to close all <details> elements
  function closeAllDetails() {
    detailsElements.forEach(function(details) {
      details.removeAttribute('open');
    });
  }
  
  // Add click event listener to each <summary>
    detailsElements.forEach(function(details) {
    details.querySelector('summary').addEventListener('click', function(event) {
    // Prevent the default toggle behavior
    event.preventDefault();
    
    // If the clicked <details> is not already open
    if (!details.hasAttribute('open')) {
    // Close all <details>
    closeAllDetails();
    // Open the clicked <details>
    details.setAttribute('open', '');
    } else {
    // If it's already open, close it
    details.removeAttribute('open');
    }
    });
  });
});
