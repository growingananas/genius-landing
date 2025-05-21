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


let phoneInput;

//added country code dropdown for the contact form
document.addEventListener("DOMContentLoaded", function() {
const phoneInputField = document.querySelector("#phone");
  phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "ua",
  useFullscreenPopup: false,
  //  dropdownContainer: document.querySelector(".phone-input-container"),
  geoIpLookup: function(callback) {
  fetch('https://ipinfo.io/json', { headers: { 'Accept': 'application/json' }})
  .then(response => response.json())
  .then(data => callback(data.country))
  .catch(() => callback('us'));
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });
});

//added validation for the contact form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('bookingForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const tel = document.getElementById('phone');

  const errors = {
    name: "",
    email: "",
    tel: ""
  };

  function showError(field, message) {
    errors[field] = message;
    document.getElementById(`${field}-error`).textContent = message;
    const input = document.getElementById(field);
    if (message) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }

  function validateName() {
    const value = name.value.trim(); {
      if (value.length < 2) {
        showError("name", "Ім’я повинно містити щонайменше 2 символи.");
      } else {
        showError("name", "");
      }
    }
  }

  function validateEmail() {
    const value = email.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(value)) {
      showError("email", "Будь ласка, введіть дійсну адресу електронної пошти.");
    } else {
      showError("email", "");
    }
  }

   function validatePhone() {
      if (!phoneInput.isValidNumber()) {
        showError("phone", "Введіть дійсний міжнародний номер телефону.");
      } else {
        showError("phone", "");
      }
  }

  name.addEventListener("input", validateName);
  email.addEventListener("input", validateEmail);
  tel.addEventListener("input", validatePhone);

  form.addEventListener("submit", function (e) {
    validateName();
    validateEmail();
    validatePhone();

     const hasErrors = Object.values(errors).some(error => error !== '');

      if (hasErrors) {
      e.preventDefault();
    }
  });
});
