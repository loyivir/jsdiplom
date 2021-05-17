//popup
const modalCallback = () => {
  const popup = document.querySelector('.modal-callback');
  const overlay = document.querySelector('.modal-overlay');
  popup.style.opacity = '0%';
  overlay.style.opacity = '0%';
  const hideModal = (modal) => {
    modal.style.display = 'none';
    modal.style.opacity = '0%';
  };
  hideModal(popup);
  hideModal(overlay);
  const showModal = (modal) => {
    if (screen.width < 768) {
      modal.style.opacity = '100%';
      modal.style.display = 'block';
      return;
    }
    const start = Date.now();
    modal.style.display = 'block';
    const requestId = setInterval(() => {
      const timePassed = Date.now() - start;
      modal.style.opacity = `${(timePassed / 3).toFixed(0)}%`;
      if (timePassed >= 1000) {
        clearInterval(requestId);
        return;
      }
    }, 10);
  };
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
    } else if (!target.closest('.modal-callback')) {
      hideModal(popup);
      hideModal(overlay);
    }
  });
};

export default modalCallback;
