//popup
const showModal = (modal) => {
  if (screen.width < 768) {
    modal.style.display = 'block';
    modal.style.opacity = '1';

    return;
  }
  const start = Date.now();
  modal.style.display = 'block';
  const requestId = setInterval(() => {
    const timePassed = Date.now() - start;
    let opacity = `${(timePassed / 3).toFixed(0)}`;
    modal.style.opacity = opacity > 1 ? 1 : opacity;
    if (timePassed >= 1000) {
      clearInterval(requestId);
      return;
    }
  }, 10);
};
const hideModal = (modal) => {
  modal.style.display = 'none';
  modal.style.opacity = '0';
};
const modalCallback = () => {
  const popup = document.querySelector('.modal-callback');
  const overlay = document.querySelector('.modal-overlay');
  const response = document.querySelector('#responseMessage');

  hideModal(popup);
  hideModal(overlay);

  document.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('callback-btn') || target.classList.contains('button-services')) {
      showModal(popup);
      showModal(overlay);
    } else if (window.getComputedStyle(target, ':before').content === '"Оформить заявку"') {
      showModal(popup);
      showModal(overlay);
    } else if (target.closest('.modal-close')) {
      hideModal(popup);
      hideModal(overlay);
    } else if (target.classList.contains('fancyClose') || target.closest('.fancyClose')) {
      event.preventDefault();
      hideModal(response);
      hideModal(overlay);
    } else if (
      !target.closest('#responseMessage') &&
      response.style.display === 'block' &&
      response.querySelector('.fancyClose').style.display !== 'none'
    ) {
      hideModal(response);
      hideModal(overlay);
    } else if (!target.closest('.modal-callback') && popup.style.display === 'block') {
      hideModal(popup);
      hideModal(overlay);
    }
  });
};
export { showModal, hideModal, modalCallback };
