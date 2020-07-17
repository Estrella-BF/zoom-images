// This function will show the image in the lightbox
var zoomImg = function () {
  // Create evil image clone
  var clone = this.cloneNode();
  clone.classList.remove("imagenC");

  // Put evil clone into lightbox
  var lb = document.getElementById("img-zoom");
  lb.innerHTML = "";
  lb.appendChild(clone);

  // Show lightbox
  lb = document.getElementById("img-box");
  lb.classList.add("show");
};

window.addEventListener("load", function(){
  // Attach on click events to all .imagenC images
  var images = document.getElementsByClassName("imagenC");
  if (images.length>0) {
    for (var img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  // Click event to hide the lightbox
  document.getElementById("img-box").addEventListener("click", function(){
    this.classList.remove("show");
  })
});