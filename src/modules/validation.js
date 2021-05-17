const validation = () => {
  const toNormalCase = (elem) => {
    const text = elem.value;
    elem.value = text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
  };

  const validateName = (elem) => {
    const text = elem.value;
    elem.value = text.replace(/[^ А-Яа-я]+/g, '');
  };

  const validatePhone = (elem) => {
    const text = elem.value;
    elem.value = text.replace(/[^+\d)(]+/g, '');
  };
  const validateInputs = (input) => {
    let text = input.value;
    text = text.replace(/^[ -]+|[ -]+$/g, '');
    text = text.replace(/(-+)/g, '-');
    text = text.replace(/( +)/g, ' ');
    input.value = text;
  };
  document.body.addEventListener('input', (event) => {
    const target = event.target;
    if (target.tagName !== 'INPUT') {
      return;
    }

    if (target.classList.contains('calc-item') && !target.classList.contains('calc-type')) {
      const text = target.value;
      target.value = text.replace(/\D+/g, '');
    }
    if (target.getAttribute('name') === 'fio') {
      validateName(target);
    }

    if (target.getAttribute('name') === 'tel') {
      validatePhone(target);
    }
  });
  document.body.addEventListener('focusout', (event) => {
    const target = event.target;
    if (target.tagName !== 'INPUT') {
      return;
    }
    validateInputs(target);
    if (target.getAttribute('name') === 'text') {
      toNormalCase(target);
    }
  });
};

export default validation;
