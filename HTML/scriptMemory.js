//Funktionen für den Regelknopf

function rules(){
  if (ruleCheck>0){
    document.getElementById("ruleBlock").style.visibility = "visible";
    document.getElementById("ruleSet").style.borderLeft = "1px grey solid";
    document.getElementById("ruleButton").innerHTML = "- Regeln";
    ruleCheck *= -1;
  }else{
    document.getElementById("ruleBlock").style.visibility = "hidden";
    document.getElementById("ruleSet").style.border = "1px white solid";
    document.getElementById("ruleButton").innerHTML = "+ Regeln";
    ruleCheck *= -1;

  }
}


// Funktionen für das Spiel

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function setCardBack() {
  cardBack = document.getElementById("1").src
}

function switchInput() {
  allowInput = !allowInput;
}


function resetGame(){
  for(i=1 ; i<=cards.length ; i++){
    document.getElementById(i.toString()).src= "images/back.png";
  }
  numbers = shuffle(numbers);
  comp1 = -1;
  comp2 = -1;
  pos1 = -1;
  pos2 = -1;
  pairs = 0;
  turns = 0;
  document.getElementById("score").innerHTML = 0;
}

function solve() {
  for(i=1 ; i<=16 ; i++){
    document.getElementById(i.toString()).src = cards[numbers[i-1]];
  }
}

function win() {
  solve();
  pairs = 8;
  checkWin();
}


function pic(myID){
  var source = document.getElementById(myID).src;
  //if (trigger ==1){cardBack = document.getElementById(myID).src; trigger =0;}
  if((source != cardBack) || !allowInput){
    return;
  }
  var x = parseInt(document.getElementById(myID).id)-1;
  document.getElementById(myID).src = cards[numbers[x]];
  if (comp1 < 0){
      comp1 = numbers[x];
      pos1 = x+1; //= myID
  } else{
     comp2 = numbers[x];
     pos2=x+1; // = myID
     switchInput();
     setTimeout(checkPair,time,comp1,comp2);
     setTimeout(switchInput,time);
  }
}


function checkPair(a,b){
  var c = a-b;
  turns++;
  document.getElementById("score").innerHTML = turns;
  if(Math.abs(c)==8){
    //alert("Pair!");
    pairs = pairs+1;
    checkWin();
  } else {
    //alert("No Pair!");
    flipCard(pos1);
    flipCard(pos2);
  }
  comp1 = -1;
  comp2 = -1;
  pos1 = -1;
  pos2 = -1;

}

function flipCard(x){
  document.getElementById(x.toString()).src = "images/back.png";
}

function checkWin() {
  if (pairs == cards.length/2) {alert("Gewonnen in "+turns.toString()+" Zügen!");}
}

var cards = ["images/sun.png","images/tree.png"
,"images/river.png","images/cloud.png","images/moon.png"
,"images/rock.png","images/sand.png","images/star.png",
"images/sun.png","images/tree.png"
,"images/river.png","images/cloud.png","images/moon.png"
,"images/rock.png","images/sand.png","images/star.png"];

var numbers = [];
var i = 0;
var comp1 = -1;
var comp2 = -1;
var pos1 = -1;
var pos2 = -2;
var pairs = 0;
var turns = 0;
var time = 500;
var ruleCheck =1;
var allowInput = true;



for(i=0;i<cards.length;i++){
  numbers[i] = i;
}
numbers=shuffle(numbers);
var cardBack;
