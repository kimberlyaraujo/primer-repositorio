
window.addEventListener("DOMContentLoaded",() =>{

    let input=document.querySelector(".main_input");
    let text=document.querySelector(".main_text");

    //keydoewn tiene un retraso de una letra, se puede usar keyup para que sea fluida
input.addEventListener("keydown", (e) => {
    let search=input.value;
    if(search.trim()!="" && e.code =="Enter"){
            let regExp= new RegExp(search, "gi");
           text.innerHTML=text.textContent.replace(regExp," <span class='text_search'>$&</span>")   
}
});

});
//se puede usar para analizar apuntes cambiando el texto de index
//prueba 5 errorrees conflictos 

