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
  <a href='#portfolio' class='for-desktop-nav'></a>
  <div class="card-image"><a href='#portfolio'></a></div>
  <div class='try'>
  <h4 id='id1'>Keeping track of hundreds of components</h4>
  <ul class="languages" id='id2'>
  <li><a href="#">Ruby on rails</a></li>
  <li><a href="#">css</a></li>
  <li><a href="#">JavaScript</a></li>
  </ul>
  <p id='id3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
  <div class='to-flex' id='id4'>
  <div class="disp-project">See Live <img src='./images/seeLive.svg' width='18px' height= '18px'></div>
  <div class="disp-project">See Source <img src='./images/seeSource.svg' width= '18px'  height= '18px'></div>
  </div>
  </div>
  `;
section.classList.add('popup-style');

function closePopup() {
  evThing.forEach((element) => { element.style.display = 'unset'; });
  evThing[0].style.display = 'flex';
  document.body.classList.remove('for-body');
  document.body.removeChild(section);
}

function popup() {
  evThing.forEach((element) => { element.style.display = 'none'; });
  document.body.classList.add('for-body');
  document.body.appendChild(section);
  const exitPopup = document.querySelector('.card-image a');
  exitPopup.addEventListener('click', closePopup);
}

dispProject.forEach((buttons) => { buttons.addEventListener('click', popup); });
/* `````````` */

/*    ````````````  Validation  ````````````    */

function validateEmail() {
  const emailAddress = document.getElementById('email').value.trim();
  const regularExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* Source for the regural expression - https://www.javascripttutorial.net/javascript-dom/javascript-form/ */
  document.forms[0].onsubmit = (e) => {
    if (regularExp.test(emailAddress)) {
      document.getElementById('error-message').innerHTML = '';
    } else {
      document.getElementById('error-message').innerHTML = 'Please check the syntax of your email again';
      document.getElementById('error-message').style = 'color:blue; outline: 2px solid red';
      e.preventDefault();
    }
  };
}
document.getElementById('submit').addEventListener('click', validateEmail);