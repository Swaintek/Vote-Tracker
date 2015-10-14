//Declare a picture array to store images
var picArr = ['img/kid.jpg', 'img/afro 2.jpg','img/diana-ross-afro.jpg', 'img/mullet.jpg', 'img/Farrah_Fawcett.jpg', 'img/pompador.jpg','img/rachel.jpeg']
//Declare empty picture array that will store results from the for loop
var pictures = [];
//Declare a function to track score for selected image
var Pic = function (imgsrc){
  this.imgsrc = imgsrc;  //properties of the object
  this.score = 0;
};

for( var i=0; i<picArr.length; i++){
  var newPic = new Pic(picArr[i]);  //Incremented score of the selected image
  // is stored in the newPic variable
  pictures.push(newPic); //Populate the picture array with result
}

var randomIndex1; //Create two random numbers to be used as indices in picArr
var randomIndex2;

//calculate a random number that corresponds to a random image in the array
function getRandomNum() {
  return Math.floor(Math.random() * picArr.length);
}

//
function addImages() {
  var pic1 = document.getElementById('pic1');
  var pic2 = document.getElementById('pic2');

  //remove image prior to adding another image.

  if (pic1.firstChild) {
    pic1.removeChild(pic1.firstChild);
  }

  randomIndex1 = getRandomNum();
  var photo1 = document.createElement('img');
  photo1.setAttribute('src', picArr[randomIndex1]);
  pic1.appendChild(photo1);//Append img tags to elements on webpage

  //prevents the same picture from appearing twice.

  if (pic2.firstChild) {
    pic2.removeChild(pic2.firstChild);
  }

  //Created a while loop to prevent identical pictures from appearing 
  //at the same time.
  
  randomIndex2 = getRandomNum();
    while(randomIndex1 === randomIndex2){  
      randomIndex2 = getRandomNum()
    }
  var photo2 = document.createElement('img')
  photo2.setAttribute('src', picArr[randomIndex2]);
  pic2.appendChild(photo2);
}


var pic1Button = document.getElementById('pic1');
  pic1Button.addEventListener('click', function() {
    pictures[randomIndex1].score += 1;  //increment the score for random image
    console.log(picArr[randomIndex1]);  //Display result
    addImages();
  }
);

var pic2Button = document.getElementById('pic2');
  pic2Button.addEventListener('click', function() {
    pictures[randomIndex2].score += 1;
    console.log(picArr[randomIndex2]);
    addImages();
  }
);

//Added button functionality for user to select image
var picButton = document.getElementById('picButton');
picButton.addEventListener('click', addImages);

