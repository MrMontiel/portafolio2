// Nav - activar la clase "activate".

let contentNav = document.getElementById("contentNav");
let linkNav = contentNav.getElementsByClassName("linkNav");

for(let i = 0; i<linkNav.length; i++){
    linkNav[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("activate");
        if(current.length > 0){
            current[0].className = current[0].className.replace(" activate", "");
        }
        this.className += " activate"
    })
}