const buttonModal = document.querySelector('.button-modal');
const modal = document.querySelector('.modal-wrapper');
buttonModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-close");
})
