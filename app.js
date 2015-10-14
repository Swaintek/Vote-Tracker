var picArr = [];
    picArr.push('img/kid.jpg', 'img/afro 2.jpg','img/diana-ross-afro.jpg', 'img/mullet.jpg', 'img/Farrah_Fawcett.jpg', 'img/pompador.jpg','img/rachel.jpeg');
  
//calculate a random number that corresponds to a random image in the array
  function getRandomImage() {
    var num = Math.floor(Math.random() * picArr.length);
    return picArr[num];
  }


function addImages() {
  var pic1 = document.getElementById('pic1');
  var pic2 = document.getElementById('pic2');

  //remove image prior to adding another image.

  if (pic1.firstChild) {
    pic1.removeChild(pic1.firstChild);
  }


  var photo1 = document.createElement('img');
  photo1.setAttribute('src', getRandomImage());
  pic1.appendChild(photo1);

  //prevents the same picture from appearing twice.

  if (pic2.firstChild) {
    pic2.removeChild(pic2.firstChild);
  }

  var photo2 = document.createElement('img')
  photo2.setAttribute('src', getRandomImage());
  pic2.appendChild(photo2);

  pic1.addEventListener('click', vote);
  pic2.addEventListener('click', vote);
}

var vote = function(){
  alert('user');
}
//Called the function so the page is not blank when it loads

addImages();

//Added button functionality for user to select image
var picButton = document.getElementById('picButton');
picButton.addEventListener('click', addImages);


  
