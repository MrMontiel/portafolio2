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


// Scroll - btnTop
const btnTop = document.getElementById("btn");

window.onscroll = () => {
    scrollFunction();
};

const scrollFunction = () => {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
};

const topFuction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// nav
let nav = document.getElementById("nav").innerHTML
let openNav = document.getElementById("openNav");

openNav.innerHTML = nav