window.addEventListener("load", ()=> {

let title=document.querySelector(".main_title");
let  text= "¡Bienvenido al curso!";
let start=0;
let end=1;
let write= ()=>{
setInterval(() => {
    
title.innerText =text.slice(start,end);
end++;

if(end> text.length){
    end=1;
}

}, 100);
};
write()


})