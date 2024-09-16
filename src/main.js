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

  if (summaries.length > 0) {
    summaries[0].classList.add('active');
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
      if (detailsElements.length > 0) {
        detailsElements[0].setAttribute('open', '');
      }
  
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

//added country code dropdown for the contact form


document.addEventListener("DOMContentLoaded", function() {
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
initialCountry: "ua",
geoIpLookup: function(callback) {
fetch('https://ipinfo.io/json', { headers: { 'Accept': 'application/json' }})
.then(response => response.json())
.then(data => callback(data.country))
.catch(() => callback('us'));
},
utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

  //added validation for the contact form

const form = document.getElementById('bookingForm');
const inputs = form.querySelectorAll('required');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.checkValidity()) {
      input.classList.remove('error');
    } else {
      input.classList.add('error');
    }
  });
});

// Prevent non-numeric input for phone number
phoneInputField.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, '');
});

form.addEventListener('submit', (e) => {
let valid = true;
inputs.forEach(input => {
  if (!input.checkValidity()) {
    input.classList.add('error');
    valid = false;
  }
});
  if (!valid) {
    e.preventDefault();
    alert('Please fill out all fields correctly.');
  }
});

});



