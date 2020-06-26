var sliderControls = document.querySelectorAll(".slider-control");
var sliderItems = document.querySelectorAll(".slider-item");

sliderControls.forEach(function(sliderControl, i) {
  if (sliderControls && sliderControls.length) {}
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
