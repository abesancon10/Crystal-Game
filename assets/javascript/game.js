$(document).ready(function() {
  var entry = Math.floor(Math.random() * 43 + 25);

  //entry is randomly generated
  //entry should remain between 25 and 68
  //entry appears as text in #entryNumber

  //create variables the images that are random numbers

  var ran1 = Math.floor(Math.random() * 13 + 1);
  var ran2 = Math.floor(Math.random() * 13 + 1);
  var ran3 = Math.floor(Math.random() * 13 + 1);
  var ran4 = Math.floor(Math.random() * 13 + 1);
  console.log(ran1);
  console.log(ran2);
  console.log(ran3);
  console.log(ran4);

  //set up variables for the images to be randomly generated between 1-14

  //set the variables for the finalTotal, wins, and losses

  var total = 0;
  var wins = 0;
  var losses = 0;

  //append the the variables wins and losses to the #numberWins and #numberLosses
  $("#entryNumber").text(entry);
  $("#finalTotal").text(total);
  //create reset function: needs reset for entry, ran1-4, and total
  //reset the .text for #entryNumber and #finalTotal
  function reset() {
    entry = Math.floor(Math.random() * 43 + 25);
    $("#entryNumber").text(entry);
    ran1 = Math.floor(Math.random() * 13 + 1);
    ran2 = Math.floor(Math.random() * 13 + 1);
    ran3 = Math.floor(Math.random() * 13 + 1);
    ran4 = Math.floor(Math.random() * 13 + 1);
    $("#finalTotal").text((total = 0));
    $("#winLose").text(" ");
  }
  //create the function for if the player wins
  function hooray() {
    wins++;
    $("#numberWins").text(wins);
    //$("#winLose").text("YOU WIN!"); SPLASH text for when player wins: need to set time interval
    reset();
  }
  //create the function for if the player loses
  function ohno() {
    losses++;
    $("#numberLosses").text(losses);
    //$("#winLose").text("YOU LOSE!"); SPLASH TEXT for when player loses: need to set time interval
    reset();
  }
  //'hooray' and 'ohno' functions add 1 to 'wins' and 'losses', and appends it to the DOM
  //set up function to add ran1-4 to the total
  //set up the conditions for win and loss
  $("#afghan").on("click", function() {
    total = total + ran1;
    console.log("the afghan hounds are here: " + ran1);
    $("#finalTotal").text(total);
    if (total == entry) {
      hooray();
    } else if (total > entry) {
      ohno();
    }
  });
  $("#saluki").on("click", function() {
    total = total + ran2;
    console.log("the salukis are here: " + ran2);
    $("#finalTotal").text(total);
    if (total == entry) {
      hooray();
    } else if (total > entry) {
      ohno();
    }
  });
  $("#sheltie").on("click", function() {
    total = total + ran3;
    console.log("the shelties are here: " + ran3);
    $("#finalTotal").text(total);
    if (total == entry) {
      hooray();
    } else if (total > entry) {
      ohno();
    }
  });
  $("#crested").on("click", function() {
    total = total + ran4;
    console.log("the cresteds are here: " + ran4);
    $("#finalTotal").text(total);
    if (total == entry) {
      hooray();
    } else if (total > entry) {
      ohno();
    }
  });
});
//total is added onto the DOM under #finalTotal
//each function for the picture div id's add to the #finalTotal when clicked
//picture div id's have the functions for the if the player wins and loses ('hooray' and 'ohno' functions)
