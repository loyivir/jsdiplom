import smoothScroll from './smoothScroll';
const scrollTop = () => {
  const logo = document.querySelector('.logo > a');
  logo.addEventListener('click', (event) => {
    smoothScroll(event, logo);
  });
  const up = document.querySelector('.up');
  up.style.display = 'none';
  up.addEventListener('click', (event) => {
    smoothScroll(event, logo);
  });
  const getElementOffset = (element) => {
    return element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
  };
  window.addEventListener('scroll', function () {
    if (window.scrollY >= getElementOffset(document.getElementById('services'))) {
      up.style.display = 'block';
    } else {
      up.style.display = 'none';
    }
  });
};

export default scrollTop;
