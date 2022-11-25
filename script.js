const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const navLogo = document.querySelector('.logo');
const navMenu = document.querySelector('.menu');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const displayNav = document.querySelector('#detail-nav');
const links = document.querySelectorAll('#detail-nav ul li a');

const exit = document.createElement('div');

function itClosed() {
  main.style.display = 'unset';
  footer.style.display = 'unset';
  navLogo.style.display = 'unset';
  navMenu.style.display = 'unset';

  displayNav.classList.replace('display-nav', 'detail-nav');
  nav.classList.remove('for-nav');
  nav.removeChild(exit);
}

function itClicked() {
  /* remove others */
  main.style.display = 'none';
  footer.style.display = 'none';
  navLogo.style.display = 'none';
  navMenu.style.display = 'none';

  displayNav.classList.replace('detail-nav', 'display-nav');
  nav.classList.add('for-nav');

  /*     Add Exit icon        */
  exit.classList.add('for-exit');
  nav.appendChild(exit);

  const exitIcon = document.querySelector('.for-exit');
  exitIcon.addEventListener('click', itClosed);

  links.forEach((ls) => {
    ls.addEventListener('click', itClosed);
  });
}

menu.addEventListener('click', itClicked);

/*       ````` POP UP `````  */

const evThing = document.querySelectorAll('nav, main, footer');
const dispProject = document.querySelectorAll('.disp-project');
const section = document.createElement('section');
section.innerHTML = `
  <div class="card-image"></div>
  <h4>Keeping track of hundreds of components</h4>
  <ul class="languages">
  <li><a href="#">Ruby on rails</a></li>
  <li><a href="#">css</a></li>
  <li><a href="#">JavaScript</a></li>
  </ul>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
  <div class='to-flex'>
  <div class="disp-project">See Live <img src='./images/seeLive.svg' width='18px' height= '18px'></div>
  <div class="disp-project">See Source <img src='./images/seeSource.svg' width= '18px'  height= '18px'></div>
  </div>
  `;

section.classList.add('popup-style');

function popup(){
  evThing.forEach(element=> element.style.display='none')
  document.body.classList.add('for-body');
  document.body.appendChild(section);
}

dispProject.forEach(buttons=> buttons.addEventListener('click', popup));


/*``````````*/