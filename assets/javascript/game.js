var wins = 0;
var losses = 0;
var counter = 0;
var numbersSum = 0;
var pictureNumbers = [];
var randomNum = 0;
var audio = new Audio('assets/Audio/TOP GUN -DANGER ZONE.mp3');

// var audioElement = document.createElement("audio");
// audioElement.setAttribute(src ="https://soundcloud.com/kennyloggins/danger-zone");
var start = function() {
    var random1 =  Math.floor(Math.random()*10) ;
 pictureNumbers.push(random1)
 console.log(pictureNumbers);

  var random2 =  Math.floor(Math.random()*10);
 pictureNumbers.push(random2)
 console.log(pictureNumbers);

 var random3 =  Math.floor(Math.random()*10);
 pictureNumbers.push(random3)
 console.log(pictureNumbers);
  randomNum = Math.floor(Math.random() *50)
};

var ifYouWon = function() {
    if( numbersSum === randomNum) {
        alert('you won ');
        wins++;
        $('#wins').html('Wins: ' + wins);
        reset();
        
    
    
    }
    else if(numbersSum > randomNum){
    alert('You Lost')
   
    
    losses++
    $('#losses').html('Losses: '+ losses);
    reset();
    }
    }


console.log(randomNum)

    $('#losses').html('Losses: '+ wins)


var displayRandomNum = function() {
    document.getElementById('num').innerHTML = 'Random Number: ' + randomNum;
    console.log(randomNum)
}

var score = function () {
    document.getElementById('score').innerHTML = 'Your Total Score: ' + numbersSum;
};

var reset = function () {
 numbersSum = 0;
score();
start();
displayRandomNum();

} 
console.log(randomNum)
$(document).ready(function() { });

reset();
console.log(randomNum)
// S

$('#counter1').on('click',function() {
    numbersSum += pictureNumbers[0];
   
    $("#score").html("Your Total Score: " + numbersSum);
    ifYouWon();

    
    console.log(pictureNumbers[0])
    // click()
    // click function is called here to compute or make calculations based on the value that was placed on the button
    
});

$('#counter2').on('click',function() {
    numbersSum += pictureNumbers[1]
    document.getElementById('score').textContent = 'Your Total Score: ' + numbersSum;
    ifYouWon();
    
    
    console.log(pictureNumbers[1])
// use click function here
    
});
 $('#counter3').on('click',function() {
    numbersSum += pictureNumbers[2]
    document.getElementById('score').textContent = 'Your Total Score: ' + numbersSum;
    console.log(pictureNumbers[2])
    ifYouWon();
    
    // use click function here
});

var isPlaying = false;
$('#main-img').on('click',function() {
    $('#top-gun').attr('src','https://media.tenor.com/images/150cdc742f991ed4873751980c68e5a0/tenor.gif')
$("#main-img").attr("src","https://media1.tenor.com/images/541a821436d75b4276572239342c57ae/tenor.gif?itemid=5448070");
setTimeout(function(){
    $('#top-gun').attr('src','https://s-media-cache-ak0.pinimg.com/originals/b3/4a/93/b34a9357fe63c72d93a130d2ac7b425f.gif')}
          ,7000)
    setTimeout(function(){
        $('#main-img').attr('src','http://i342.photobucket.com/albums/o403/pos3000/Gifs/archer-dolphin1.gif')}
        ,9000)
    
          http://i342.photobucket.com/albums/o403/pos3000/Gifs/archer-dolphin1.gif
    if(isPlaying){
        audio.pause();
        isPlaying=false;
    }
    else{
        audio.play();
        isPlaying=true;
        // setTimeout(function(){
        //     hotdog.play()},2000)
    }
    $('#danger').html('You Have Entered The Danger Zone!');
    setTimeout(function(){
      $('#top-gun').attr('src','https://i.kinja-img.com/gawker-media/image/upload/s--8LMMVKsv--/c_scale,f_auto,fl_progressive,q_80,w_800/l2nthbcqmjl8qrhfcble.gif')}
            ,3000)
           
});

