const openModalbuttons = document.querySelectorAll('[data-modal-target]')
const closeModalbutton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalbuttons.forEach(div => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  }
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  });

}

closeModalbutton.forEach(div => {
  button.addEventListener('click', () => {
    const modal = button.closeset('.modal')
    openModal(modal)
  }
});

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
