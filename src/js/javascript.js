                
                    //animation for lineDrawing block
var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    delay: function(el, i) { return i*250},
  });
  
          //changes visibility for about-me-photo

document.addEventListener("DOMContentLoaded", function() {

  if(window.innerWidth <= 450) {
    console.log(window.innerWidth);

    var photo = document.querySelector(".about-me-photo");

    var photoSmile = document.querySelector(".about-me-photo-image_smile");

    photo.addEventListener("click", function() {

      photoSmile.classList.toggle("about-me-photo-image_visible")

    })
  }

})


