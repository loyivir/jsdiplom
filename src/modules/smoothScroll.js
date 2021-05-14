const smoothScroll = (event, target) => {
  event.preventDefault();
  let scrollTo;
  if (target.getAttribute('href') === '#') {
    scrollTo = document.body;
  } else {
    scrollTo = document.getElementById(target.getAttribute('href').substring(1));
  }
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default smoothScroll;
