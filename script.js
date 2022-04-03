
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } else {
    reveals[i].classList.remove("active");
    }
    }
    }
    window.addEventListener("scroll", reveal);

function openNav() {
document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
document.getElementById("myNav").style.height = "0%";
}

function tak(){
var x = document.getElementById("tak");
if (x.style.opacity !== 0) {
x.style.opacity = 0;
}
}



function taks(){
var x = document.getElementById("taks");
if (x.style.opacity !== 0) {
x.style.opacity = 0;
}
}










