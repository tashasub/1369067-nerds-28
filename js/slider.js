var sliderControls = document.querySelectorAll(".slider-control");
var sliderItems = document.querySelectorAll(".slider-item");

// for (var i = 0; i < sliderControls.length; i++) {
//   sliderControls[i].addEventListener("click", function(e) {
//     var currentSlide = e.target.dataset.slide;
//
//   sliderItems[i].classList.remove("slide-current")
//
//
//
//     sliderItems[currentSlide].classList.add("slide-current")
//   });
// }

// for (var i = 0; i < sliderControls.length; i++) {
//   sliderControls[i].addEventListener("click", function(e) {
//     sliderControls[i].addEventListener("click", function(e)

sliderControls.forEach(function(sliderControl, i) {
  sliderControl.addEventListener("click", function() {

    sliderControls.forEach(function(sliderItemRemove) {
      sliderItemRemove.classList.remove("current");
    });
   sliderControl.classList.add("current");

   sliderItems.forEach(function(sliderItem) {
     sliderItem.classList.remove("slide-current");
   });


    sliderItems[i].classList.add("slide-current");
  });
});
