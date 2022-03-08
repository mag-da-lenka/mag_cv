// const openSlide_lightbox = () => { document.getElementById("overlay_lightbox_full_id").style.display = "block"; }
// const closeSlide_lightbox = () => { document.getElementById("overlay_lightbox_full_id").style.display = "none"; }

// let slideIdx = 1;
// runSlideShow(slideIdx);

// const nextSlide_lightboxPlease = (n) => { runSlideShow(slideIdx += n); }
// const currentSlide = (n) => { runSlideShow(slideIdx = n); }

// function runSlideShow(n) {

//   let idx;
//   let slides_lb = document.getElementsByClassName("slideDiv");
//   let dots_lb = document.getElementsByClassName("smallPicDot");
//   let description_lb = document.getElementById("slideDescr");

//   if (n > slides_lb.length) { slideIdx = 1 }
//   if (n < 1) { slideIdx = slides_lb.length }
//   for (idx = 0; idx < slides_lb.length; idx++) { slides_lb[idx].style.display = "none"; }
//   for (idx = 0; idx < dots_lb.length; idx++) {
//     dots_lb[idx].className = dots_lb[idx].className.replace(" activeSmallPicDot", "");
//   }

//   slides_lb[slideIdx - 1].style.display = "block";
//   dots_lb[slideIdx - 1].className += " activeSmallPicDot";
//   description_lb.innerHTML = dots_lb[slideIdx - 1].alt;
// }





// LIGHTBOX  without arrow functions

function openSlide_lightbox() { document.getElementById("overlay_lightbox_full_id").style.display = "block"; }
function closeSlide_lightbox() { document.getElementById("overlay_lightbox_full_id").style.display = "none"; }

let slideIdx = 1;
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