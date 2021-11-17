var button = document.getElementById("button"),
 buttonText = document.getElementById("buttontext"),
 c = document.querySelector('#button'),
 root = document.documentElement;

/* Phrase Changer Code */
/* You can edit the phrases and images here.*/

button.onclick = (function(){
  
  var phrases = ["🎉😊😊😊🎁", "Happy Birthday!", "Keep up the good work", "Hope you like it ^^"],
  
bImages = ["./img/img1.jpg", "./img/img2.jpg","./img/img3.jpg","./img/img4.jpg"];
  
 var count = 0;
 var imageCount = 0;
  return function(){
  root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
  buttonText.textContent = phrases[++imageCount % phrases.length];
  };
}());


/* if(count>7){
  do: release balloons/confetti/or something cool;
}
*/