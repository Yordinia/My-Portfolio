const { even } = require("prelude-ls");

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

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector('form');

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	event.preventDefault();
  console.log('click',event.type)
	// let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	// let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);

	// if (nameValid && emailValid) {
	// 	event.submit();
	// }
});

