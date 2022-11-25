const menu = document.querySelector('.menu');
menu.addEventListener('click', itClicked);


function itClicked(){
    const nav = document.querySelector("nav");
    const navLogo= document.querySelector(".logo");
    const navMenu= document.querySelector(".menu");
    
    const main = document.querySelector("main")
    const footer = document.querySelector("footer");
    const displayNav = document.querySelector('#detail-nav');
    
    /* remove others */
    main.style.display = 'none';
    footer.style.display = 'none';
    navLogo.style.display = 'none';
    navMenu.style.display = 'none';
    
    displayNav.classList.replace('detail-nav','display-nav')  
    nav.classList.add('for-nav');
    
    /*     Add Exit icon        */
    let exit = document.createElement('div');
    exit.classList.add('for-exit');
    nav.appendChild(exit);    
}
