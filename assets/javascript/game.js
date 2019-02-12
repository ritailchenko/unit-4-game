$( document ).ready(function() {


var counter = 0;
var randNum = "";
var wins = 0;
var loses = 0;
randNum = Math.floor(Math.random() * (120 - 19) +19);

$("#random-number").html(randNum);


$(".crystal-image").on("click", function(){

   counter += Math.floor(Math.random() * (12 - 1) + 1);
 $("#total-score").html(counter);
   

   if (counter === randNum) {
       wins ++;
       $("#exclamationwin").show();
       counter = 0;
   
   } else if (counter > randNum) {
    loses ++;
    counter = 0;
    $("#exclamationwin").hide();
    randNum = Math.floor(Math.random() * (120 - 19) +19);
    $("#random-number").html(randNum);

   }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
});

});




