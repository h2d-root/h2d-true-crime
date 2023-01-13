var i = 0;
var images = ['../img/slider/ali.png','../img/slider/civici.png','../img/slider/diyatlov.png','../img/slider/kolici.png','../img/slider/zodiak.png'];

function sliderImage(){

  	document.slide.src = images[i];

  if (i < images.length -1) {
      i++;
  }else{
    i = 0;
  }
  setTimeout("sliderImage()", 5000);
}
window.onload = sliderImage;