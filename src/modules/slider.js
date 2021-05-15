//slider
const slider = () => {
  const slide = document.querySelectorAll('.item'),
    dotContainer = document.querySelector('.slick-dots'),
    slider = document.querySelector('.top-slider');
  let dot = document.querySelectorAll('.slick-dots li');
  let tables = document.querySelectorAll('.top-slider .table');

  dot.forEach((elem) => {
    elem.remove();
  });
  for (let i = 0; i < slide.length; i++) {
    const node = dot[0].cloneNode();
    node.classList.remove('slick-active');
    dotContainer.insertAdjacentElement('beforeend', node);
  }
  dot = document.querySelectorAll('.slick-dots li');

  let currentSlide = 0,
    interval;
  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(dot, currentSlide, 'slick-active');
    prevSlide(tables, currentSlide, 'active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(dot, currentSlide, 'slick-active');
    nextSlide(tables, currentSlide, 'active');
  };
  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (!target.matches('.slick-dots li')) {
      return;
    }
    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(dot, currentSlide, 'slick-active');
    prevSlide(tables, currentSlide, 'active');

    dot.forEach((elem, index) => {
      if (elem === target) {
        currentSlide = index;
      }
    });

    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(dot, currentSlide, 'slick-active');
    nextSlide(tables, currentSlide, 'active');
  });

  slider.addEventListener('mouseover', (event) => {
    if (event.target.matches('.slick-dots li')) {
      stopSlide();
    }
  });
  slider.addEventListener('mouseout', (event) => {
    if (event.target.matches('.slick-dots li')) {
      startSlide(3000);
    }
  });
  startSlide(3000);
};

export default slider;
