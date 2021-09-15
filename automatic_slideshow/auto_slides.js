// automatic slideshow

let autoSlideIndex = 0;

function showAutoSlides() {

    let index;
    let autoSlides = document.getElementsByClassName("auto_slides");
    let autoDots = document.getElementsByClassName("auto_dots");

    for (index = 0; index < autoSlides.length; index++) {
        autoSlides[index].style.display = "none";
    }

    autoSlideIndex++;

    if (autoSlideIndex > autoSlides.length) { autoSlideIndex = 1 }

    for (index = 0; index < autoDots.length; index++) {
        autoDots[index].className = autoDots[index].className.replace(" auto_active", "");
    }

    autoSlides[autoSlideIndex - 1].style.display = "block";

    autoDots[autoSlideIndex - 1].className += " auto_active";

    setTimeout(showAutoSlides, 666 / 2);
}

showAutoSlides();
