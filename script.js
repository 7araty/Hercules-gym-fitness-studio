'use strict'
// Toggle menu-btn
const menubtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
const closebtn = document.getElementById('close-icon');
const signupForm = document.getElementById('form'); 
const formClosebtn = document.getElementById('form-close-icon'); 
const overlay = document.querySelector('[data-overlay]');

menubtn.addEventListener('click', () => {
  // show menu  and hide signup form
  menuList.classList.add('active');
  overlay.classList.add('active');
  signupForm.classList.remove('active');
  
});

closebtn.addEventListener('click', () => {
  // Hide menu
  menuList.classList.remove('active');
  overlay.classList.remove('active');
});

// Toggle sign-up btn
const signupbtn = document.getElementById('sign-up-btn');

signupbtn.addEventListener('click', function(){
  // Toggle signup form visibility and hide menu
  signupForm.classList.add('active');
  overlay.classList.add('active');
  menuList.classList.remove('active');
});

formClosebtn.addEventListener('click', () => {
    // Hide sign-up form
    signupForm.classList.remove('active');
    overlay.classList.remove('active');
  });


// Modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// Modal function
const modalCloseFunc = function () {
    modal.classList.add('closed');
}

// Modal EventListeners
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


// Sends messages onto google sheets
const scriptUrl = 'https://script.google.com/macros/s/AKfycbz_9vUcKhVlSipD-ykskLbkfc9EA7BIQdwszLKY9IOAkL2lYt8eG_V2uYtkTNY0hlv6/exec'
const form = document.forms['contact-form']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUrl, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = 'Message sent successfully'
            setTimeout(function(){
                msg.innerHTML = ''
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})