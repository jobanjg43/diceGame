var diceBoxPlayer1 = document.querySelector(".player1 > .dice");
var diceHolesPlayer1 = document.querySelectorAll(".player1 >.dice > .diceHole");
var player1Name = "Player1";
var player1WinCountOutput = document.getElementById("player1WinCount");
var player1WinCounter = 0;


var diceBoxPlayer2 = document.querySelector(".player2 > .dice");
var diceHolesPlayer2 = document.querySelectorAll(".player2 >.dice > .diceHole");
var player2Name = "Player2";
var player2WinCountOutput = document.getElementById("player2WinCount");
var player2WinCounter = 0;


var title = document.querySelector(".title");


var player1Score ;
var player2Score ; 

function genRandomNumber ()
{
    var randNum = Math.random(); // this will generate random number between 0-99999~
    var diceNumber = Math.floor((randNum * 6) + 1); // this will make random number between 1-6
    return diceNumber
}

//following will go through array of diceHole and remove default visible calls from all
function resetDice (diceNumber){
    diceBoxPlayer1.setAttribute("class", "dice")
    diceBoxPlayer1.classList.add(diceNumber)
    diceBoxPlayer2.setAttribute("class", "dice")
    diceBoxPlayer2.classList.add(diceNumber)
    for (var a = 0; a <=5 ; a++)
        {
           diceHolesPlayer1[a].setAttribute("class" , "diceHole");
           diceHolesPlayer1[a].classList.add("dice1"+(a+1));
           diceHolesPlayer2[a].setAttribute("class" , "diceHole");
           diceHolesPlayer2[a].classList.add("dice1"+(a+1));
         }
}

function enableHoles (n){
    for(var i = 0 ; i < n ; i++)
    {
        diceHolesPlayer1[i].classList.add("visible");
        
    }
}
function resetDicePlayer2 (diceNumber){
    diceBoxPlayer2.setAttribute("class", "dice")
    diceBoxPlayer2.classList.add(diceNumber)
    for (var a = 0; a <=5 ; a++)
        {
           diceHolesPlayer2[a].setAttribute("class" , "diceHole");
           diceHolesPlayer2[a].classList.add("dice1"+(a+1));
         }
}

function enableHolesPlayer2 (p)
{
    for(var i = 0 ; i < p ; i++)
    {
       
        diceHolesPlayer2[i].classList.add("visible");
    }  
}

function player1 ()
{
    var player1Number = genRandomNumber();
    console.log("Player 1 number : " + player1Number);
    player1Score = player1Number; 

    switch (player1Number){
        case 1 :
            console.log("case 1");
            resetDice("dice1"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHoles(player1Number);
            break;
        case 2 :
            console.log("case 2");
            resetDice("dice2"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHoles(player1Number);
            break;

         case 3 :
            resetDice("dice3"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHoles(player1Number);
            console.log("case 3");
            break;
        case 4 :
            console.log("case 4");
            resetDice("dice4"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHoles(player1Number);
            break;
        case 5 :
            console.log("case 5");
            resetDice("dice5"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHoles(player1Number);
            break;
        case 6 :
            
            console.log("case 6");
            resetDice("dice6"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHoles(player1Number);
            
    }

}
function player2 ()
{
    var player2Number = genRandomNumber();
    console.log("Player2 number is: " + player2Number);
    player2Score = player2Number ;

    switch (player2Number){
        case 1 :
            console.log("case 21");
            resetDicePlayer2("dice1"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHolesPlayer2(player2Number);
            break;
        case 2 :
            console.log("case 22");
            resetDicePlayer2("dice2"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHolesPlayer2(player2Number);
            break;

         case 3 :
            resetDicePlayer2("dice3"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
            enableHolesPlayer2(player2Number);
            console.log("case 23");
            break;
        case 4 :
            console.log("case 24");
            resetDicePlayer2("dice4"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
           enableHolesPlayer2(player2Number);
            break;
        case 5 :
            console.log("case 25");
            resetDicePlayer2("dice5"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
           enableHolesPlayer2(player2Number);
            break;
        case 6 :
            
            console.log("case 26");
            resetDicePlayer2("dice6"); 
           //following for loop will set the visible calls on all up untill dice number (from random number)
           enableHolesPlayer2(player2Number);
            
    }

}
function winner ()
{
    //fetch playernames 
    player1Name = document.querySelector(".player1 > p").innerHTML;
    player2Name = document.querySelector(".player2 > p").innerHTML;
    console.log("User names :"+player1Name+ " & " +player2Name);
    if (player1Score > player2Score)
    {
        title.innerHTML = player1Name + " is the winner!" ;
        player1WinCounter ++ ;
        player1WinCountOutput.innerHTML = player1WinCounter;
        player1WinCountOutput.classList.add("visible");
    }
    else if (player2Score > player1Score)
    {
        title.innerHTML = player2Name + " is the winner!" ;
        player2WinCounter ++ ;
        player2WinCountOutput.innerHTML = player2WinCounter;
        player2WinCountOutput.classList.add("visible");
    }
    else 
    {
        title.innerHTML = "Match is draw! " ;
    }
}
function play ()
{
    player1();
    player2();
    winner();
}