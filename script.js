const menu = document.querySelector('.menu');
menu.addEventListener('click', itClicked);
const nav = document.querySelector("nav");
const navLogo= document.querySelector(".logo");
const navMenu= document.querySelector(".menu");
const main = document.querySelector("main")
const footer = document.querySelector("footer");
const displayNav = document.querySelector('#detail-nav');
const links = document.querySelectorAll('#detail-nav ul li a');

console.log(links)
let exit = document.createElement('div');

function itClicked(){
    /* remove others */
    main.style.display = 'none';
    footer.style.display = 'none';
    navLogo.style.display = 'none';
    navMenu.style.display = 'none';
    
    displayNav.classList.replace('detail-nav','display-nav')  
    nav.classList.add('for-nav');
    
    /*     Add Exit icon        */
    exit.classList.add('for-exit');
    nav.appendChild(exit);  
    
    const exitIcon = document.querySelector('.for-exit')
    exitIcon.addEventListener('click', itClosed);

    links.forEach(ls=>{
        ls.addEventListener('click', itClosed);
    })
}

function itClosed(){
    main.style.display = 'unset';
    footer.style.display = 'unset';
    navLogo.style.display = 'unset';
    navMenu.style.display = 'unset';
 
    displayNav.classList.replace('display-nav','detail-nav')  
    nav.classList.remove('for-nav');
    nav.removeChild(exit);
}