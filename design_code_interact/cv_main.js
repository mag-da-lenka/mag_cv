console.log(`hello Hello`)

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
        autoDots[index].className = autoDots[index].className.replace(" auto_active", "");
    }

    autoSlides[autoSlideIndex - 1].style.display = "block";

    autoDots[autoSlideIndex - 1].className += " auto_active";

    setTimeout(showAutoSlides, 666 * 1.666);
}

showAutoSlides();






// 04 
// mobile nav

const openMobileNav =
    () => { document.getElementById("mobileNav").style.height = "100%"; }
    
const closeMobileNav =
    () => { document.getElementById("mobileNav").style.height = "0%"; }








































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

