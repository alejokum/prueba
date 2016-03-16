window.onload = function() {

  var placeholders = document.querySelectorAll('.placeholder'),
    i;

  for (i = 0; i < placeholders.length; i++) {
    blurryLoad(placeholders[i]);
  }
}

function blurryLoad(element) {
  var small = element.querySelector('.img-small');

  // 1: load small image and show it
  var img = new Image();
  img.src = small.src;
  img.onload = function() {
    small.classList.add('loaded');
  };

  // 2: load large image
  var imgLarge = new Image();
  imgLarge.src = element.dataset.large;
  imgLarge.onload = function() {
    imgLarge.classList.add('loaded');
  };
  element.appendChild(imgLarge);
}
