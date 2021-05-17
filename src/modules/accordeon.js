const accordeon = () => {
  let accordeon = document.querySelector('.accordeon'),
    items = accordeon.querySelectorAll('.element');

  let updateItems = (elem) => {
    items.forEach((item) => {
      let elemContent = item.querySelector('.element-content');
      if (item !== elem) {
        item.classList.remove('active');
        elemContent.style.display = 'none';
      } else {
        item.classList.add('active');
        elemContent.style.display = 'block';
      }
    });
  };
  accordeon.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('.title')) {
      updateItems(target.closest('.element'));
    } else if (target.closest('.title')) {
      updateItems(target.closest('.element'));
    }
  });
};
export default accordeon;
