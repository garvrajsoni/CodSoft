const section2 = document.querySelectorAll(".About")
const card = document.querySelector('.carddiv')


const aboutsec = ()=>{
    const triggerbottom=(window.innerHeight/5)*4;
    section2.forEach((box=>{
        const boxTop=box.getBoundingClientRect().top;
            if(boxTop<triggerbottom){
                box.classList.add("abt2")
            }
            else {box.classList.remove("abt2")}
        }
            )
    )
}

window.addEventListener("scroll",aboutsec);
aboutsec();

 const playbtn = document.querySelector('.fa-play')
 const pausebtn =document.querySelector('.fa-pause')
 
 playbtn.addEventListener('click', ()=>{
    
    playbtn.style.opacity="0%";
    pausebtn.style.opacity="100%";
 
    
 })

pausebtn.addEventListener('click', ()=>{

    playbtn.style.opacity="100%";
    pausebtn.style.opacity="0%";

 })
     
 // let bool = false

// // card.addEventListener('mouseover',()=>{
// //     if (bool =false)
// //     {
// //         card.style.borderTop="solid blue 4px";
// //         bool= true
// //     }
    
// //     else{
// //         card.style.transform = "skew(10deg)";
// //         bool=false;
// //     }
// //     }

// }