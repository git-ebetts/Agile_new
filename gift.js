
var open1 = ('assets/NewOpenerBlink.gif');
var open2 = ('assets/theCouple.jpg');
var open3 = ('assets/theStreets.gif');
var open4 = ('assets/newWoman.gif');
var open5 = ('assets/end.gif');

var gifArray = [open1, open2, open3, open4,open5];
var gifDiv;
var gifDiv1;



function addElement() {
  var gifDiv = document.createElement('img');
  gifDiv.setAttribute('src', gifArray[0]);
  gifDiv.setAttribute('width', '900');
  gifDiv.setAttribute('height', '600');
  gifDiv.setAttribute('id', 'gifBox');
  gifDiv.setAttribute('class', 'gifStyle');
  document.getElementById('container').appendChild(gifDiv);
}

function start() {
  console.log("STARTING!)");
addElement();
  readPointer.style.visibility="hidden";
  headBox.style.visibility="visible";

$('#instructionBox').click(function() {
$('#gifBox').attr('src', gifArray[1]);
  herStoryBox.style.visibility="visible";
  hisStoryBox.style.visibility="visible";
  instructionBox.style.visibility="hidden";
  toDellasStory.style.visibility="hidden";
  creditBox.style.visibility="hidden";
  attriBox.style.visibility="hidden";
  headBox.style.visibility="hidden";
});


//TO DELLA FROM START
$('#herStoryBox').click(function() {
$('#gifBox').attr('src', gifArray[3]);
herStoryBox.style.visibility="hidden";
hisStoryBox.style.visibility="hidden";

setTimeout(function() {
toJimsStory.style.visibility="visible";
Conclusion.style.visibility="visible";}, 10000);
});

// TO JIM FROM DELLAS STORY
$('#toJimsStory').click(function() {
$('#gifBox').attr('src', gifArray[2]);
toJimsStory.style.visibility="hidden";
Conclusion.style.visibility="hidden";
// });

setTimeout(function() {
// toDellasStory.style.visibility="visible";
Conclusion.style.visibility="visible";}, 9000);
});

// TO THE CONCLUSION
$('#Conclusion').click(function() {
$('#gifBox').attr('src', gifArray[4]);
toJimsStory.style.visibility="hidden";
toDellasStory.style.visibility="hidden";
Conclusion.style.visibility="hidden";


setTimeout(function() {
readPointer.style.visibility="visible";
creditBox.style.visibility="visible";}, 9000);
});

//POINTER TO STORY TEXT
$('#readPointer').click(function(){
window.open("http://www.online-literature.com/o_henry/1014/");
  });

//TO JIM FROM START
$('#hisStoryBox').click(function() {
$('#gifBox').attr('src', gifArray[2]);
herStoryBox.style.visibility="hidden";
hisStoryBox.style.visibility="hidden";

setTimeout(function() {
toDellasStory.style.visibility="visible";
Conclusion.style.visibility="visible";}, 9000);
});

//TO DELLA FROM JIM
$('#toDellasStory').click(function() {
$('#gifBox').attr('src', gifArray[3]);
toDellasStory.style.visibility="hidden";
Conclusion.style.visibility="hidden";

 // $('#readPointer').show();
setTimeout(function() {
Conclusion.style.visibility="visible";}, 10000);
});

$('.creditToggle').click(function() {
  $('#creditText').toggle();
 // creditText.style.visibility="visible";
});
}
window.onload = start;
