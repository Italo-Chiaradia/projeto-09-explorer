export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal-wrapper .title'),
  buttonClose: document.querySelector('.close'),
  open() {
    this.wrapper.classList.add('open');
  },
  close() {
    this.wrapper.classList.remove('open');
  }
}
Modal.buttonClose.addEventListener('click', () => {
  Modal.close();
})
window.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    Modal.close();
  }
})