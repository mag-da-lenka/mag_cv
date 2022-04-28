console.table(`hello Hello`)



setTimeout(() => {
    alert("The mobile layout is currently being rebuilt, please view the page on your laptop.")
}, 2666);





// 04 
// mobile nav

const openMobileNav = () => { document.getElementById("mobileNav").style.height = "100%"; }
const closeMobileNav = () => { document.getElementById("mobileNav").style.height = "0%"; }



// 05
// HOLOGRAPHIC BODY 

// start a holographic body
const holoBody = document.getElementById("holo_fun");

// get mouse X position in mili
const handleMouseMove = (event) => {

    console.log(`1) new_move: `)

    const positionX_value = event.clientX;
    console.log(`2) positionX_value: `, positionX_value); //  2) positionX_value:  522

    const clientWidth_value = document.documentElement.clientWidth;
    console.log(`3) clientWidth_value: `, clientWidth_value) //  3) clientWidth_value:  1536

    const calculated_value_mili = positionX_value / clientWidth_value;
    console.log(`4) calculated_value_mili: `, calculated_value_mili.toFixed(3)) //  4) calculated_value_mili:  0.340

    updateHolographicBackground(calculated_value_mili);
}

// mouse X position in %
const updateHolographicBackground = (O_xxx) => {

    const percentage_value = O_xxx * 100; // 5) percentage_value:  0.000 (initial)
    console.log(`5) percentage_value: `, percentage_value.toFixed(3)) // 5) percentage_value:  33.984

    holoBody.style.backgroundPosition = percentage_value + "%";
}


// 01
// slideshow 

const slideIndex = [1, 1];
const slideId = ["mySlides1", "mySlides2"]

const plusSlides = (num, idNum) => {
    showSlides(slideIndex[idNum] += num, idNum);
}

const showSlides = (num, idNum) => {
    let i;
    let slides = document.getElementsByClassName(slideId[idNum]);
    if (num > slides.length) { slideIndex[idNum] = 1 }
    if (num < 1) { slideIndex[idNum] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[idNum] - 1].style.display = "block";
}

showSlides(1, 0);
showSlides(1, 1);





// 02 
// accordion

const acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "vw";
        }

    });

}





// 03
// automatic slideshow

let autoSlideIndex = 0;

const showAutoSlides = () => {

    let index;
    let autoSlides = document.getElementsByClassName("auto_slides");
    let autoDots = document.getElementsByClassName("auto_dots");

    for (index = 0; index < autoSlides.length; index++) {
        autoSlides[index].style.display = "none";
    }

    autoSlideIndex++;

    if (autoSlideIndex > autoSlides.length) { autoSlideIndex = 1 }

    for (index = 0; index < autoDots.length; index++) {
        autoDots[index].className = autoDots[index].className.replace("auto_active", "");
    }

    autoSlides[autoSlideIndex - 1].style.display = "block";

    autoDots[autoSlideIndex - 1].className += " auto_active";

    setTimeout(showAutoSlides, 2666);
}

showAutoSlides();






// LIGHTBOX 

function openSlide_lightbox() { document.getElementById("overlay_lightbox_full_id").style.display = "block"; }
function closeSlide_lightbox() { document.getElementById("overlay_lightbox_full_id").style.display = "none"; }

var slideIdx = 1;
runSlideShow(slideIdx);

function nextSlide_lightboxPlease(n) { runSlideShow(slideIdx += n); }
function currentSlide(n) { runSlideShow(slideIdx = n); }

function runSlideShow(n) {

    let idx;
    let slides_lb = document.getElementsByClassName("slideDiv");
    let dots_lb = document.getElementsByClassName("smallPicDot");
    let description_lb = document.getElementById("slideDescr");

    if (n > slides_lb.length) { slideIdx = 1 }
    if (n < 1) { slideIdx = slides_lb.length }
    for (idx = 0; idx < slides_lb.length; idx++) { slides_lb[idx].style.display = "none"; }
    for (idx = 0; idx < dots_lb.length; idx++) {
        dots_lb[idx].className = dots_lb[idx].className.replace(" activeSmallPicDot", "");
    }

    slides_lb[slideIdx - 1].style.display = "block";
    dots_lb[slideIdx - 1].className += " activeSmallPicDot";
    description_lb.innerHTML = dots_lb[slideIdx - 1].alt;
}





// const handleDeviceOrientation = (event) => {

//     const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
//     console.log(`z_value: `, z)

//     const rotation_value = z / 360;
//     console.log(`rotation_value: `, rotation_value)

//     updateHolographicBackground(rotation_value);
// }


// window.addEventListener("deviceorientation", handleDeviceOrientation, true);

// ------------------------------------------------------------------------------------------------------------------------------------------


















// let dots1 = document.getElementById("dots1");
// let moreText1 = document.getElementById("more1");
// let btnText1 = document.getElementById("moreLess_btn1");
// let dots2 = document.getElementById("dots2");
// let moreText2 = document.getElementById("more2");
// let btnText2 = document.getElementById("moreLess_btn2");
// let dots3 = document.getElementById("dots3");
// let moreText3 = document.getElementById("more3");
// let btnText3 = document.getElementById("moreLess_btn3");

// let dotsArray = [dots1, dots2, dots3]
// let moreTextArray = [moreText1, moreText2, moreText3]
// let btnTextArray = [btnText1, btnText2, btnText3]

// const snippets = [
//     {
//         "dotsName": "dots1",
//         "textName": "moreText1",
//         "btnTextName": "btnText1"
//     },
//     {
//         "dotsName": "dots2",
//         "textName": "moreText2",
//         "btnTextName": "btnText2"
//     },
//     {
//         "dotsName": "dots3",
//         "textName": "moreText3",
//         "btnTextName": "btnText3"
//     }
// ];
// // console.log("\nadvanced ARRAY methods");
// // console.log("snippets", snippets);

// let dots = snippets.forEach((aSnippet) => aSnippet.dotsName);
// console.log(dots);
// let btnText = snippets.forEach((aSnippet) => aSnippet.btnTextName);
// let moreText = snippets.forEach((aSnippet) => aSnippet.textName);

// function showHide() {

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "▼";
//         moreText.style.display = "none";

//     }

//     else {
//         dots.style.display = "none";
//         btnText.innerHTML = "▲";
//         moreText.style.display = "inline";
//     }
// }


// snippets.forEach((aSnippet) => console.log("aSnippet.dotsName from .forEach: ", aSnippet.dotsName))
// snippets.forEach((aSnippet) => console.log("aSnippet.textName from .forEach: ", aSnippet.textName))
// snippets.forEach((aSnippet) => console.log("aSnippet.btnTextName from .forEach: ", aSnippet.btnTextName))