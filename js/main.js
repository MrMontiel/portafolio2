// Nav - activar la clase "activate".

let contentNav = document.getElementById("contentNav");
let linkNav = contentNav.getElementsByClassName("linkNav");

for(let i = 0; i<linkNav.length; i++){
    linkNav[i].addEventListener("click", function(){
        gsap.to(window, {
            duration: 0.5, 
            scrollTo:{
                y:".section" + (i + 1), 
                offsetY:70
            }
        });
        let current = document.getElementsByClassName("activate");
        if(current.length > 0){
            current[0].className = current[0].className.replace(" activate", "");
        }
        this.className += " activate"
    })
}


// Scroll - btnTop
const btnTop = document.getElementById("btn");

btnTop.addEventListener("click", ()=>{
    gsap.to(window, {duration: 1, scrollTo:{y:"#inicio", offsetY:70}});
})

window.onscroll = () => {
    scrollFunction();
};

const scrollFunction = () => {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop >30
    ) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
};

// nav
let nav = document.getElementById("nav").innerHTML
let openNav = document.getElementById("openNav");

openNav.innerHTML = nav

// Form action
const $form = document.querySelector('#formContact');

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        showSnackbar('Gracias por contactarte conmigo :)')
    }
}

let snackbar = document.getElementById("snackbar");
const showSnackbar = (msg) => {
    snackbar.innerHTML = msg;
    snackbar.classList.add("show");
    setTimeout(() => {
        snackbar.classList.remove("show");
    }, 3000);
};