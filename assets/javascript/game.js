var wins = 0;
var loses = 0;
var counter = 0;
var numbersSum = 0;
var pictureNumbers = [];
randomNum = 0;


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

};

var i = function() {
    if( numbersSum === randomNum) {
        alert('you won ');
        wins++;
        
    
    
    }
    else if(numbersSum > randomNum){
    alert('You Lost')
    loses++
    }
    }

var randomNum = Math.floor(Math.random() *50)
console.log(randomNum)

var displayRandomNum = function() {
    document.getElementById('num').innerHTML = 'Random Number: ' + randomNum;
    console.log(randomNum)
}

var score = function () {
    document.getElementById('score').innerHTML = 'Your Total Score: ' + numbersSum;
};

var reset = function () {
var numbersSum = 0;
score();
start();
displayRandomNum();

} 

$(document).ready(function() { });

reset();
i();
// S

$('#counter1').on('click',function() {
    numbersSum += pictureNumbers[0];
    document.getElementById('score').textContent = 'Your Total Score: ' + numbersSum;
    

$
    
    console.log(pictureNumbers[0])
    // click()
    // click function is called here to compute or make calculations based on the value that was placed on the button
    
});

$('#counter2').on('click',function() {
    numbersSum += pictureNumbers[1]
    document.getElementById('score').textContent = 'Your Total Score: ' + numbersSum;
    

    
    console.log(pictureNumbers[1])
// use click function here
    
});
 $('#counter3').on('click',function() {
    numbersSum += pictureNumbers[2]
    document.getElementById('score').textContent = 'Your Total Score: ' + numbersSum;
    console.log(pictureNumbers[2])

    // use click function here
});


$('#main-img').on('click',function() {
    alert('Danger Zone!')
    
});
