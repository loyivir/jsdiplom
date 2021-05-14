import smoothScroll from './smoothScroll';
// Меню
const toggleMenu = () => {
  const menu = document.querySelector('.mobile-menu');

  const handlerMenu = () => {
    menu.classList.toggle('open');
  };
  document.body.addEventListener('click', (event) => {
    let target = event.target;

    if (
      target.classList.contains('.mob-menu-btn') ||
      target.closest('.mob-menu-btn') ||
      target.classList.contains('mobile-menu-close') ||
      target.classList.contains('callback-btn') ||
      (!target.closest('.mobile-menu') && menu.classList.contains('open'))
    ) {
      handlerMenu();
    } else if (target.closest('.mobile-menu > ul > li > a')) {
      target = target.closest('.mobile-menu > ul > li > a');
      smoothScroll(event, target);
      handlerMenu();
    } else if (target.closest('.top-menu > ul > li > a')) {
      target = target.closest('.top-menu > ul > li > a');
      smoothScroll(event, target);
      handlerMenu();
    }
  });
};

export default toggleMenu;
