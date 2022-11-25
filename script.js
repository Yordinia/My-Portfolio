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
/* for scrolling underlines in desktop */
const sections = document.querySelectorAll(".first-page, .about, footer");
const navs = document.querySelectorAll(".detail-nav ul li");

console.log(navs);
console.log(sections);

window.addEventListener('scroll', scrollTO);

function scrollTO(){
    var current;
    sections.forEach(section=>{
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    console.log(pageYOffset)
    if(pageYOffset >= ((sectionTop - sectionHeight) / 3)){
    current = section.getAttribute('id');
    }
    })
    for(let i='0'; i<navs.length; i++){
        if(current===i){
            console.log(current===i, current, i)
        li.style.textDecoration = "underline overline";
       }
    }
    navs.forEach(li=>{
       
    })
}

// end of scroll here  */
// alert(section1+" "+ section2 +" "+section3);  */

