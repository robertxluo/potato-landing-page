let nav = document.getElementById('navMobileLinks');
nav.style.display = 'none';

const toggleHamburgerMenu = x => {
  x.classList.toggle('change');
  if (nav.style.display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
};
