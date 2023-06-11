import * as THREE from 'three';  

console.log('scriipt running three -', THREE, THREE.Scene)

//  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

//  const scene = THREE.Scene();
//  const camera = new THREE.ProspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1 , 1000)
 
//  const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')})
//  renderer.setPixelRatio( window.devicePixelRatio) // set pixed ratio
//  renderer.setSize(window.innerWidth, widow.innerHeight  ) // make it full screen canvas
//  camera.position.setZ(30) // camera is positioned in the middle of the scene, give better prespective by moving it along the Z axis
//  renderer.render(scene, camera) 

//  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//  const material = new THREE.MeshStandardMaterial({color: 0xFF6347})

// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus)


// // lighting
// const pointLight = new THREE.PointLight(0xffffff)
// pointLight.position.set(5,5,5) // to move it away from center

// const ambientLight = new THREE.AmbientLight(0Xffffff) // is more like a floodlignt that lights up everything
// scene.add(pointLight, ambientLight)
// // PointLightHelper shows us the position of a point light
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200,50)
// scene.add(lightHelper,gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

// function addStar() {
//     const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//     const meterial = new THREE.MeshStanderdMaterial({color: 0xffffff})
//     const star = new THREE.Mesh(geometry, material)

//     // randomly posision
//     // use randFloatSpread gets us random number bn -x to x
//     const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100 ));
//     star.position.set(x,y,z);
//     scene.add(star)
// }

// Array(200).fill().forEach(addStar)

// const spaceTexture = new THREE.TextureLoader().load('images/bground.png');
// scene.background = spaceTexture; // set background property

// const firstPage = document.querySelector('.first-page');

// firstPage.position.z = 30;
// firstPage.position.setX(-10)

// function moveCamera(){
//   //calculate where the user is currently scrolled to
//   // getBoundingClientRect will give us the dimentions of our view port .top .left .right .bottom
//   // top is always negative
//   const t = document.body.getBoundingClientRect().top;

//   // rotation
//   firstPage.rotation.x += 0.05;
//   firstPage.rotation.y += 0.075;
//   firstPage.rotation.z += 0.05;

//   // camera position
//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;

// }
// document.body.onscroll = moveCamera;// fires when user scrolls

// /// animate
// function animate(){
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   controls.update();

//   renderer.render(scene, camera) 
// }
// animate();
//  /*




// // looks pretty cool, but lets make this better by adding a backgroud to outer space

// // load image using TextureLoader that u can pass a call back function here to be notified when the image is done loading (useful if u wanna show learning bar, if ur scene relys on a lot of static assets)

// // To set properties (textures) to individual materials
// // Texture Mapping 2D > map them to > 3D
// const jeffTexture = new THREE.TextureLoader().load('jeff.png')
// const jeff = new THREE.Mesh(
//     new THREE.BoxGeometry(3,3,3),
//     new THREE.MeshBasicMaterial({map: jeffTexture})
// )
// then,  scene.add(jeff)

// // combine multiple maps to create more interesting objects
// // moon, create the illusionn of crators and mountains
// const moonTexture = new THREE.TextureLoader().load('moon.png')
// const normalTexture = new THREE.TextureLoader().load('normal.png')

// const moon = new THREE.Mesh(
//     new THREE.SphereGeometry(3,32,32),
//     new THREE.MeshStandardMaterial({map: moonTexture,
//     normalMap: normalTexture
//     })
// )
// then,  scene.add(moon)

// //finally

// > To animate while scrolling

// > first 
// > add HTML files (main should have a position absolute) 
// // position moon to be further down z ( the DXN we'll be scrolling)
// ; //assign .z= OR .setX

// // to see it >  renderer.render (scene, camera) 
// // to setup recursive to call the render


// // CSS Grid to make this layout really easy to build

// main {
//     display: grid;
//     grid-template-columns: repeat(12, 1fr)
// }
// header {
//     grid-column: 2/ span 5; // 2/7
// }
// child {
//     grid-column: 2/8;
// }

// // Bottom line - easy to position elements how ever you like
// */


// /* `````````` */
// const menu = document.querySelector('.menu');
// const nav = document.querySelector('nav');
// const navLogo = document.querySelector('.logo');
// const navMenu = document.querySelector('.menu');
// const main = document.querySelector('main');
// const footer = document.querySelector('footer');
// const displayNav = document.querySelector('#detail-nav');
// const links = document.querySelectorAll('#detail-nav ul li a');

// const exit = document.createElement('div');

// function itClosed() {
//   main.style.display = 'unset';
//   footer.style.display = 'unset';
//   navLogo.style.display = 'unset';
//   navMenu.style.display = 'unset';

//   displayNav.classList.replace('display-nav', 'detail-nav');
//   nav.classList.remove('for-nav');
//   nav.removeChild(exit);
// }

// function itClicked() {
//   /* remove others */
//   main.style.display = 'none';
//   footer.style.display = 'none';
//   navLogo.style.display = 'none';
//   navMenu.style.display = 'none';

//   displayNav.classList.replace('detail-nav', 'display-nav');
//   nav.classList.add('for-nav');

//   /*     Add Exit icon        */
//   exit.classList.add('for-exit');
//   nav.appendChild(exit);

//   const exitIcon = document.querySelector('.for-exit');
//   exitIcon.addEventListener('click', itClosed);

//   links.forEach((ls) => {
//     ls.addEventListener('click', itClosed);
//   });
// }

// menu.addEventListener('click', itClicked);

// /*       ````` POP UP `````  */

// const evThing = document.querySelectorAll('nav, main, footer');
// const dispProject = document.querySelectorAll('.disp-project');
// const section = document.createElement('section');
// section.innerHTML = `
//   <a href='#portfolio' class='for-desktop-nav'></a>
//   <div class="card-image"><a href='#portfolio'></a></div>
//   <div class='try'>
//   <h4 id='id1'>Keeping track of hundreds of components</h4>
//   <ul class="languages" id='id2'>
//   <li><a href="#">Ruby on rails</a></li>
//   <li><a href="#">css</a></li>
//   <li><a href="#">JavaScript</a></li>
//   </ul>
//   <p id='id3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
//   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
//   <div class='to-flex' id='id4'>
//   <div class="disp-project">See Live <img src='./images/seeLive.svg' width='18px' height= '18px'></div>
//   <div class="disp-project">See Source <img src='./images/seeSource.svg' width= '18px'  height= '18px'></div>
//   </div>
//   </div>
//   `;
// section.classList.add('popup-style');

// function closePopup() {
//   evThing.forEach((element) => { element.style.display = 'unset'; });
//   evThing[0].style.display = 'flex';
//   document.body.classList.remove('for-body');
//   document.body.removeChild(section);
// }

// function popup() {
//   evThing.forEach((element) => { element.style.display = 'none'; });
//   document.body.classList.add('for-body');
//   document.body.appendChild(section);
//   const exitPopup = document.querySelector('.card-image a');
//   exitPopup.addEventListener('click', closePopup);
// }

// dispProject.forEach((buttons) => { buttons.addEventListener('click', popup); });

// document.addEventListener('submit', e=>{
//   e.target.reset();
// })
// /* `````````` */

