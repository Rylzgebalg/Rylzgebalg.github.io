var sides;
var count;
var i;
var ruleCheck =1;


//Hinweise anzeigen und verschwinden lassen
function rules(){
  if (ruleCheck>0){
    document.getElementById("ruleBlock").style.visibility = "visible";
    document.getElementById("ruleSet").style.borderLeft = "1px grey solid";
    document.getElementById("ruleButton").innerHTML = "- Hinweise";
    ruleCheck *= -1;
  }else{
    document.getElementById("ruleBlock").style.visibility = "hidden";
    document.getElementById("ruleSet").style.border = "1px white solid";
    document.getElementById("ruleButton").innerHTML = "+ Hinweise";
    ruleCheck *= -1;

  }
}

//Würfeln
function rollDice(){
 setSides();
 setCount();
 if(sides && count && parseInt(sides)&&parseInt(count)){
   var dice=0;
   var numbers = [];
   var throww=0;
   for(i=1; i<= count; i++){
     throww = Math.ceil(parseInt(sides) * Math.random());
     dice = dice + throww;
     numbers.push(throww);
   }
   document.getElementById("diceAdded").style.display = "block";
   document.getElementById("ho").innerHTML = dice;
   if (numbers.length <= 50){
     document.getElementById("allNumbers").style.display = "inline";
     document.getElementById("he").innerHTML = numbers;
   }else{
     document.getElementById("allNumbers").style.display = "none";
   }
 }
}

function setSides(){
  sides=Math.abs(document.getElementById("sides").value);
}

function setCount(){
  count=Math.abs(document.getElementById("count").value);
}
