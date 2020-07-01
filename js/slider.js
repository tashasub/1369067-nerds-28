var sliderControls = document.querySelectorAll(".slider-control");
var sliderItems = document.querySelectorAll(".slider-item");

if (sliderControls && sliderControls.length) {

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
}
