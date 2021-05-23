const toggleOpen =document.getElementById("toggleOpen");
const toggleClose = document.getElementById("toggleClose");
const navbar = document.getElementById("navbar");

navbar.style.display = "none";

toggleOpen.addEventListener("click", () =>{
    if(navbar.style.display == "none"){
        navbar.style.display = "block";
    }
})

toggleClose.addEventListener("click", () =>{
    if(navbar.style.display == "block"){
        navbar.style.display = "none";
    }
});


// const currentSlide = 0;
// const slide = document.querySelectorAll(".fade");

// function nextSlide(n){
//     slide.forEach((slide) =>{
//         slide.style.display = "none";
//     })
// };

// slide[n].style.display = "block";

// document.addEventListener("DOMContentLoaded", init(currentSlide));

// document.querySelector(".left").addEventListener('click', next);