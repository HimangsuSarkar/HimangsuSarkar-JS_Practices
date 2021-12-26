'use strict';
const modal = document.querySelector(".modal");
const overly = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");


const closeModal = function () {
  modal.classList.add('hidden');
  overly.classList.add('hidden');
}
const openModal=function () {
    modal.classList.remove('hidden');
    overly.classList.remove('hidden');
  }
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click',openModal )


btnCloseModal.addEventListener('click', closeModal)
  
overly.addEventListener('click', closeModal);
