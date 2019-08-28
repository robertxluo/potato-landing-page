let nav = document.getElementById('navMobileLinks');
nav.style.display = 'none';
let windowWidth = window.innerWidth;
let hamburgerButton = document.querySelector('.mobile-menu');

const toggleHamburgerMenu = hamburgerButton => {
  hamburgerButton.classList.toggle('change');
  if (nav.style.display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
};

document.getElementsByTagName('body')[0].onresize = function() {
  checkWindowWidth();
};

const checkWindowWidth = () => {
  windowWidth = window.innerWidth;

  if (hamburgerButton.classList.contains('change')) {
    nav.style.display = 'block';
  }

  if (windowWidth > 1024) {
    nav.style.display = 'none';
  }
};
