const hamburgerBtn = document.querySelector('.dropbtn');

const toggleMenu = (e) => {
  e.stopPropagation();
  const navList  =  document.querySelector('.nav-list');
  navList.classList.toggle('open');
  const toggleBtn = e.target;
  toggleBtn.classList.toggle('fa-times');
  toggleBtn.style.fontSize = '25px'
}

hamburgerBtn.addEventListener('click', toggleMenu);