import { showModal, hideModal } from './modalCallback';
const sendForm = () => {
  const popup = document.querySelector('#responseMessage');
  const overlay = document.querySelector('.modal-overlay');
  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Спасибо! мы скоро с вами свяжемся!',
    invalidData = 'Введите данные правильно!';
  const form1 = document.querySelector('.rf > form');

  const statusMessage = document.createElement('div');
  statusMessage.textContent = invalidData;
  statusMessage.classList.add('error');

  const postData = (body) =>
    fetch('./server.php', {
      method: 'POST',
      mode: 'same-origin',
      cache: 'default',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'client',
      body: JSON.stringify(body),
    });

  const validateForm = (form) => {
    const inputs = form.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === 'tel') {
        const value = inputs[i].value.replace(/[+()]+/g, '');

        if (value.length < 7 || value.length > 11) {
          if (inputs[i].parentNode.querySelector('.error') === null) {
            inputs[i].parentNode.appendChild(statusMessage);
          }
          return false;
        } else {
          if (inputs[i].parentNode.querySelector('.error') !== null) {
            inputs[i].parentNode.querySelector('.error').remove();
          }
        }
      } else if (inputs[i].type === 'text' && inputs[i].value.length < 2) {
        if (inputs[i].parentNode.querySelector('.error') === null) {
          inputs[i].parentNode.appendChild(statusMessage);
        }
        return false;
      } else {
        if (inputs[i].parentNode.querySelector('.error') !== null) {
          inputs[i].parentNode.querySelector('.error').remove();
        }
      }
    }
    return true;
  };
  const submitForm = (form) => {
    if (!validateForm(form)) {
      return;
    }

    const formData = new FormData(form);
    const body = {};
    for (const val of formData.entries()) {
      body[val[0]] = val[1];
    }
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
        form.reset();
        setTimeout(() => {
          const target = form.closest('.modal-callback');

          if (target) {
            hideModal(target);
            popup.querySelector('.modal-content').textContent = successMessage;
            showModal(popup);
          }
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        form.reset();
        setTimeout(() => {
          const target = form.closest('.modal-callback');

          if (target) {
            hideModal(target);

            popup.querySelector('.modal-content').textContent = errorMessage;
            showModal(popup);
          }
        }, 1000);
      });
  };
  form1.addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm(form1);
  });
  document.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('fancyClose') || target.closest('.fancyClose')) {
      hideModal(popup);
      hideModal(overlay);
    } else if (!target.closest('#responseMessage')) {
      hideModal(popup);
      hideModal(overlay);
    }
  });
};

export default sendForm;
