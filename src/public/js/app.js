
//Nav Skroll

const navScroll = ()=>{
    let mainUbication = window.pageYOffset;
    window.onscroll = () =>{
        let scroll = window.pageYOffset;
        if(mainUbication >= scroll){
            document.getElementById('navbar').style.top = '0';
        }else{
            document.getElementById('navbar').style.top = '-100px';
        }
        mainUbication = scroll;
    }
}

navScroll();


//Nav Animation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle Nav
    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }

        });

        //Burger Animation
        burger.classList.toggle('toggle');

    });

}


//TIPOS DE OBJETOS A PLANTAR EN ADDNOTE ANIMATION

const cardPlant = () => {
    document.getElementById('terminar la explicacion de plantar un arbol');
}

// //Animation
// const animation = () => {
//     let card = document.querySelectorAll(`.card`);
//     let containerAnimation = document.querySelector(".container");

//     //Items
//     let abilities = document.querySelectorAll(".abilities");

//     let img = document.querySelectorAll(".img-pokemon img");


//     //Moving Animation Event
//     for (let i = 0; i < card.length; i++) {
//         card[i].addEventListener("mousemove", (e) => {
//             let yAxis = ((window.innerWidth / 2 - e.pageX) / 20);
//             let xAxis = ((window.innerHeight / 2 - e.pageY)) / 20;
//             card[i].style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
//         });

//         //Animate In
//         card[i].addEventListener("mouseenter", (e) => {
//             card[i].style.transition = "none";
//             abilities[i].style.background = "#ff000096";
//             //Popout
//             abilities[i].style.transform = "translateZ(150px)";
//             img[i].style.transform = "translateZ(200px)";
//         });

//         //Animate Out
//         card[i].addEventListener("mouseleave", (e) => {
//             card[i].style.transition = "all 0.5s ease";
//             card[i].style.transform = `rotateY(0) rotateX(0)`;
//             abilities[i].style.background = " #b9b9b996";
//             //Popback
//             abilities[i].style.transform = "translateZ(0)"
//             img[i].style.transform = "translateZ(10px)";
//         });
//     }

// }
// animation();


navSlide();

cardPlant();