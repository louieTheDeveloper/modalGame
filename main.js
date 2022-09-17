'use strict';

const showmodalEl = document.querySelectorAll('.show-modal');
const closeModalEl = document.querySelector('.close-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

for (let i = 0; i < showmodalEl.length; i++) {
  showmodalEl[i].addEventListener('click', openModal);
}
closeModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modalEl.classList.contains('hidden')) {
      closeModal();
    }
  }
});
