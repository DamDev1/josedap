const navLink = document.querySelector(".nav");
const openLink = document.getElementById("toggle");
const closeLink = document.querySelector(".closeToggle");


openLink.addEventListener('click', open)

closeLink.addEventListener('click', close)

function open(){
    navLink.style.display = "block";
}

function close(){
    navLink.style.display = "none";
}