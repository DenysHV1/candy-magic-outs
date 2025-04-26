const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header-nav-mobile');
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });
};

export default mobileMenu;
