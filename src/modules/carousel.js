import modalCallback from './modalCallback';
const carousel = () => {
  const getNumberOfVisibleItems = () => {
    if (screen.width < 768) {
      return 1;
    }
    if (screen.width < 992) {
      return 2;
    } else {
      return 3;
    }
  };
  let curr = 0;
  let services = document.querySelector('.services-section'),
    carousel = document.querySelector('.services-carousel'),
    items = carousel.querySelectorAll('.col-sm-6');

  const showItems = () => {
    carousel = document.querySelector('.services-carousel');
    let itemList = carousel.querySelectorAll('.col-sm-6');
    itemList.forEach((item) => {
      item.remove();
    });
    let prev, next;

    if (curr < 0) {
      curr = items.length - 1;
      prev = curr - 1;
      next = 0;
    } else if (curr === 0) {
      prev = items.length - 1;
      next = curr + 1;
    } else if (curr === items.length) {
      curr = 0;
      prev = items.length - 1;
      next = curr + 1;
    } else if (curr === items.length - 1) {
      prev = curr - 1;
      next = 0;
    } else {
      next = curr + 1;
      prev = curr - 1;
    }
    let numItems = getNumberOfVisibleItems();
    if (numItems === 1) {
      carousel.append(items[curr]);
    } else if (numItems === 2) {
      carousel.append(items[curr]);
      carousel.append(items[next]);
    } else if (numItems === 3) {
      carousel.append(items[prev]);
      carousel.append(items[curr]);
      carousel.append(items[next]);
    }
  };
  showItems();
  services.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('arrow-left')) {
      curr--;
      showItems();
    } else if (target.classList.contains('arrow-right')) {
      curr++;
      showItems();
    }
  });
  window.addEventListener('resize', () => {
    showItems();
  });
};
export default carousel;
