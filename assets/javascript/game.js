var wins = 0;
var loses = 0;
var counter = 0;
var numbersClick = [];
var pictureNumbers = []
$(document).ready(function() { 

    var random1 =  Math.floor(Math.random()*10);
 pictureNumbers.push(random1)
 console.log(pictureNumbers);

  var random2 =  Math.floor(Math.random()*10);
 pictureNumbers.push(random2)
 console.log(pictureNumbers);

 var random3 =  Math.floor(Math.random()*10);
 pictureNumbers.push(random3)
 console.log(pictureNumbers);
});



$('#counter1').on('click',function() {
    
    console.log(pictureNumbers[0])

    
});

 
 





 