var sliderIndex = 1;
showSlider(sliderIndex);

// next slider

function addSlider(n){
    showSlider(showSlider += n);
}

// Thumbnail image controls

function currentSlider(n){
    showSlider(showSlider = n);
}

function showSlider(n) {
    var i;
    var slider = document.getElementById("slider");
    if(n > slider.length){
        sliderIndex = 1
    }if(n < 1) {
        sliderIndex = slider.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}