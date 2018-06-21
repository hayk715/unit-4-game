

$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  
  $('#randomNumber').text(Random);
  
  var number1= Math.floor(Math.random()*11+1)
  var number2= Math.floor(Math.random()*11+1)
  var number3= Math.floor(Math.random()*11+1)
  var number4= Math.floor(Math.random()*11+1)
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
 
$('#numberOfWins').text(wins);
$('#numberOfLosses').text(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      number1= Math.floor(Math.random()*11+1);
      number2= Math.floor(Math.random()*11+1);
      number3= Math.floor(Math.random()*11+1);
      number4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#totalScore').text(userTotal);
      } 

function winGame(){
alert("You won!");
  wins++; 
  $('#numberOfWins').text(wins);
  reset();
}

function loseGame(){
alert ("You lose!");
  losses++;
  $('#numberOfLosses').text(losses);
  reset()
}

  $('#one').on ('click', function(){
    userTotal = userTotal + number1;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal); 
          
        if (userTotal == Random){
          winGame();
        }
        else if ( userTotal > Random){
          loseGame();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + number2;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal); 
        if (userTotal == Random){
          winGame();
        }
        else if ( userTotal > Random){
          loseGame();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + number3;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal);

          if (userTotal == Random){
          winGame();
        }
        else if ( userTotal > Random){
          loseGame();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + number4;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal); 
      
          if (userTotal == Random){
          winGame();
        }
        else if ( userTotal > Random){
          loseGame();
        }
  });   
}); 