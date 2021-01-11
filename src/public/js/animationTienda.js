const animation = ()=>{
    let card = document.querySelectorAll(`.card`);
    let containerAnimation = document.querySelector(".container");
    
    //Items
    let abilities = document.querySelectorAll(".abilities");

    let img = document.querySelectorAll(".img-pokemon img");
    
    
    //Moving Animation Event
    card.addEventListener("mousemove",(e)=>{
        let yAxis = ((window.innerWidth / 2 - e.pageX )/ 20);
        let xAxis = ((window.innerHeight / 2 - e.pageY)) / 20;
        card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
    });
    
    //Animate In
    card.addEventListener("mouseenter",(e)=>{
        card.style.transition="none";
        abilities[box].style.background= "#ff000096";
        //Popout
            abilities[box].style.transform = "translateZ(150px)";
        if(box == 0){
            
            img[box].style.transform = "translateZ(200px) rotateY(180deg)";
        }else{
            img[box].style.transform = "translateZ(200px)";
        }
    });
    
    //Animate Out
    card.addEventListener("mouseleave",(e) =>{
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0) rotateX(0)`;
        abilities[box].style.background= " #b9b9b996";
        //Popback
        abilities[box].style.transform = "translateZ(0)"
        if(box == 0){
            img[box].style.transform = "translateZ(10px) rotateY(180deg)";
        }else{
            img[box].style.transform = "translateZ(10px)";
        }
       
    });
}
animation();
