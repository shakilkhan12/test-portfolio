const toggle = document.querySelector('.nav__toggle');
const ul = document.querySelector('.nav__wrapper__ul');
toggle.addEventListener('click', () => {
	ul.classList.toggle('nav__active');
});

// open/close modal
const modalBtn = document.getElementById('modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__wrapper__close')
// open modal
modalBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
})
// close modal
closeBtn.addEventListener('click', () => {
	modal.style.display = "none";
})

const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();
