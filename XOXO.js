function tictacfunc()
{
var a1 = document.getElementById('a1').value;
var a2 = document.getElementById('a2').value;
var a3 = document.getElementById('a3').value;
var b1 = document.getElementById('b1').value;
var b2 = document.getElementById('b2').value;
var b3 = document.getElementById('b3').value;
var c1 = document.getElementById('c1').value;
var c2 = document.getElementById('c2').value;
var c3 = document.getElementById('c3').value;

//The following very cumbersome and I am sure there is a better way, but it was good practice :) //
//This code checks if there are three X in a row and alerts if X wins.//
//This also disables further play to end the game.//
if (a1 == 'X' && a2 == 'X' && a3 == 'X')
{
document.getElementById('winner').innerHTML = "PLAYER ONE WON";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player One Wins!');
}
else if (b1 == 'X' && b2 == 'X' && b3 == 'X')
{
document.getElementById('winner').innerHTML = "PLAYER ONE WON";
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player One Wins!');
}
else if (c1 == 'X' && c2 == 'X' && c3 == 'X')
{document.getElementById('winner').innerHTML = "PLAYER ONE WON";

document.getElementById("a1").disabled = true;
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
window.alert('Player One Wins!');
}
else if (a1 == 'X' && b1 == 'X' && c1 == 'X')
{
document.getElementById('winner').innerHTML = "PLAYER ONE WON";
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player One Wins!');
}
else if (a2 == 'X' && b2 == 'X' && c2 == 'X')
{
document.getElementById('winner').innerHTML = "PLAYER ONE WON";
document.getElementById("a1").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player One Wins!');
}
else if (a3 == 'X' && b3 == 'X' && c3 == 'X')
{
document.getElementById('winner').innerHTML = "PLAYER ONE WON";
document.getElementById("a1").disabled = true;
document.getElementById("a2").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
window.alert('Player One Wins!');
}
else if (a1 == 'X' && b2 == 'X' && c3 == 'X')
{
document.getElementById('winner').innerHTML = "PLAYER ONE WON";
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
window.alert('Player One Wins!');
}
else if (a3 == 'X' && b2 == 'X' && c1 == 'X')
{
document.getElementById('winner').innerHTML = "PLAYER ONE WON";
document.getElementById("a1").disabled = true;
document.getElementById("a2").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player One Wins!');
}


//This code checks if there are three X in a row and alerts if X wins.//
if (a1 == '0' && a2 == '0' && a3 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player Two Wins!');
}
else if (b1 == '0' && b2 == '0' && b3 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("a1").disabled = true;
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player Two Wins!');
}
else if (c1 == '0' && c2 == '0' && c3 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("a1").disabled = true;
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
window.alert('Player Two Wins!');
}
else if (a1 == '0' && b1 == '0' && c1 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player Two Wins!');
}
else if (a2 == '0' && b2 == '0' && c2 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("a1").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player Two Wins!');
}
else if (a3 == '0' && b3 == '0' && c3 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("a1").disabled = true;
document.getElementById("a2").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
window.alert('Player Two Wins!');
}
else if (a1 == '0' && b2 == '0' && c3 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("a2").disabled = true;
document.getElementById("a3").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c1").disabled = true;
document.getElementById("c2").disabled = true;
window.alert('Player Two Wins!');
}
else if (a3 == '0' && b2 == '0' && c1 == '0')
{
document.getElementById('winner').innerHTML = "PLAYER TWO WON";
document.getElementById("a1").disabled = true;
document.getElementById("a2").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("c2").disabled = true;
document.getElementById("c3").disabled = true;
window.alert('Player Two Wins!');
}

//This code checks if tie and alerts tie://
else if ((a1 == 'X' || a1 == '0') && (a2 == 'X' || a2 == '0') && (a3 == 'X' || a3 == '0') &&
(b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') &&
(c1 == 'X' || c1 == '0') && (c2 == 'X' || c2 == '0') && (c3 == 'X' || c3 == '0')) 
{
    document.getElementById('winner').innerHTML = "CAT'S GAME: NO WINNER";
    window.alert('Tie Game!');
}

else 
{
    if (flag == 1) 
    {
        document.getElementById('turn').innerHTML = "Player X Turn";
    }
    else 
    {
        document.getElementById('turn').innerHTML = "Player 0 Turn";
}
}
}


//This code will add a cross or a nought, depending on turn and disable the box.//
flag = 1;
function myfunc_3() 
{
   if (flag == 1) 
   {
       document.getElementById("a1").value = "X";
       document.getElementById("a1").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("a1").value = "0";
       document.getElementById("a1").disabled = true;
       flag = 1;
   }
}

function myfunc_4() 
{
   if (flag == 1) 
   {
       document.getElementById("a2").value = "X";
       document.getElementById("a2").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("a2").value = "0";
       document.getElementById("a2").disabled = true;
       flag = 1;
   }
}

function myfunc_5() 
{
   if (flag == 1) 
   {
       document.getElementById("a3").value = "X";
       document.getElementById("a3").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("a3").value = "0";
       document.getElementById("a3").disabled = true;
       flag = 1;
   }
}

function myfunc_6() 
{
   if (flag == 1) 
   {
       document.getElementById("b1").value = "X";
       document.getElementById("b1").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("b1").value = "0";
       document.getElementById("b1").disabled = true;
       flag = 1;
   }
}

function myfunc_7() 
{
   if (flag == 1) 
   {
       document.getElementById("b2").value = "X";
       document.getElementById("b2").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("b2").value = "0";
       document.getElementById("b2").disabled = true;
       flag = 1;
   }
}

function myfunc_8() {
   if (flag == 1) {
       document.getElementById("b3").value = "X";
       document.getElementById("b3").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("b3").value = "0";
       document.getElementById("b3").disabled = true;
       flag = 1;
   }
}

function myfunc_9() 
{
   if (flag == 1) 
   {
       document.getElementById("c1").value = "X";
       document.getElementById("c1").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("c1").value = "0";
       document.getElementById("c1").disabled = true;
       flag = 1;
   }
}

function myfunc_10() 
{
   if (flag == 1) 
   {
       document.getElementById("c2").value = "X";
       document.getElementById("c2").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("c2").value = "0";
       document.getElementById("c2").disabled = true;
       flag = 1;
   }
}

function myfunc_11() 
{
   if (flag == 1) 
   {
       document.getElementById("c3").value = "X";
       document.getElementById("c3").disabled = true;
       flag = 0;
   }
   else 
   {
       document.getElementById("c3").value = "0";
       document.getElementById("c3").disabled = true;
       flag = 1;
   }
}

//Here is the button to reset the game://
function buttfunc() 
{
    document.getElementById('a1').value = '';
    document.getElementById("a2").value = '';
    document.getElementById("a3").value = '';
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("c1").value = '';
    document.getElementById("c2").value = '';
    document.getElementById("c3").value = ''; 
    document.getElementById('winner').innerHTML = "";
 }