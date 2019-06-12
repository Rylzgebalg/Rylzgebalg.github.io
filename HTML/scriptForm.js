//Elemente im Formular auftauchen und verschwinden lassen

var triggerCard = false; //Kann auch true sein, ist hier aber false
var triggerDice = false;//weil Elemente anfangs ausgeblendet sind

function displayCard(){
  if(!triggerCard){
    document.getElementById("cardForm").style.display = "block";
    triggerCard = !triggerCard;
  } else {
    document.getElementById("cardForm").style.display = "none";
    triggerCard = !triggerCard;
  }
}


function displayDice(){
  if(!triggerDice){
    document.getElementById("diceForm").style.display = "block";
    triggerDice = !triggerDice;
  } else {
    document.getElementById("diceForm").style.display = "none";
    triggerDice = !triggerDice;
  }
}
//Gallerie ändern

function showCardGallery(myID) {
  //alert("lul");
  switch(myID){
    case "galCard":
      document.getElementById("galCard").style.borderTop = "1px black solid";
      document.getElementById("galCard").style.borderRight = "1px black solid";
      document.getElementById("galCard").style.borderBottom = "1px white solid";
      document.getElementById("galCard").style.color = "black";
      document.getElementById("galDice").style.borderTop = "1px grey solid";
      document.getElementById("galDice").style.borderRight = "1px grey solid";
      document.getElementById("galDice").style.borderBottom = "1px grey solid";
      document.getElementById("galDice").style.color = "grey";
      document.getElementById("d1").style.display = "none";
      document.getElementById("d2").style.display = "none";
      document.getElementById("d3").style.display = "none";
      document.getElementById("d4").style.display = "none";
      document.getElementById("d5").style.display = "none";
      document.getElementById("c").style.display = "block";
      break;
    case "galDice":
      document.getElementById("galCard").style.borderTop = "1px grey solid";
      document.getElementById("galCard").style.borderRight = "1px grey solid";
      document.getElementById("galCard").style.borderBottom = "1px grey solid";
      document.getElementById("galCard").style.color = "grey";
      document.getElementById("galDice").style.borderTop = "1px black solid";
      document.getElementById("galDice").style.borderRight = "1px black solid";
      document.getElementById("galDice").style.borderBottom = "1px white solid";
      document.getElementById("galDice").style.color = "black";
      document.getElementById("d1").style.display = "block";
      document.getElementById("d2").style.display = "block";
      document.getElementById("d3").style.display = "block";
      document.getElementById("d4").style.display = "block";
      document.getElementById("d5").style.display = "block";
      document.getElementById("c").style.display = "none";
      break;
  }
}


//Methoden zum Zurücksetzen
function resetForm(){
  if(triggerCard){
    displayCard();
  }
  if(triggerDice){
    displayDice();
  }
  resetPrices();
}

function resetPrices(){
  document.getElementById("costS").innerHTML = "0.00";
  document.getElementById("costC").innerHTML = "0.00";
  var sides = ["4","6","8","10","12","20"];
  document.getElementById("costD").innerHTML = "0.00 ";
  for(i=0; i <= 5; i++){
    document.getElementById("pd"+sides[i]).innerHTML = "0.00 €";
  }
}


//Preisberechnung
var i;

function totalPrice() {
  if(checkNegative()) {return;}
  var totPrice = calcCard() + calcDice();
  //var dicePrice = calcDice();
  totPrice = totPrice.toFixed(2);
  document.getElementById("costS").innerHTML = totPrice;
}

function calcCard() {
  var sum =0;
  var pricePerCard = 0.2;
  var deckNumber;
  var n = 0; //Gibt an wie viele Farben ausgewählt werden
  //32er oder 52er
  if(document.getElementById("32").checked) {
    deckNumber = 32;
  }else{
    deckNumber = 52;
  }

  //Farben
  for(i = 1 ; i <= 4; i++){
    if(document.getElementById(i.toString()).checked){
      n += 1;
    }
  }
  sum = n/4 *pricePerCard * deckNumber;
  sum = sum*document.getElementById("anzahl").value;
  sum = Math.round(100*sum)/100;
  var sum2 = sum.toFixed(2);
  document.getElementById("costC").innerHTML = sum2;
  return sum;
}



function calcDice(){
  //Preis: 1+0.05*Seiten + Material
  var flatPrice = 1; //Grundpreis Würfel
  var perSide = 0.05; //Aufpreis pro Seite
  var sum = 0;
  var priceIndiv = 0;
  var sides = ["4","6","8","10","12","20"];

  // Preis pro Würfelart wird in dieser Schleife berechnet und ausgegeben
  for(i=0; i <= 5; i++){
    var quantity = document.getElementById("quantity"+sides[i]).value;
    var sideCount = document.getElementById("sd"+sides[i]).innerHTML;
    var matCost = document.getElementById("md"+sides[i]).value;
    var priceIndiv2;
    matCost = parseFloat(matCost);
    priceIndiv = quantity*(flatPrice + matCost + perSide* sideCount);
    priceIndiv = Math.round(100*priceIndiv)/100;
    priceIndiv2 = priceIndiv.toFixed(2);
    document.getElementById("pd"+sides[i]).innerHTML = priceIndiv2.toString()+" €";
    sum += priceIndiv;
  }
  var sum2 = sum.toFixed(2);
  document.getElementById("costD").innerHTML = sum2;
  return sum;
}


function checkNegative() { //Soll negative Eingaben abfangen
  //Karten
  if (document.getElementById("anzahl").value < 0){
    alert("Negative Produktzahlen sind unzulässig.")
    return true;
  }
  //würfel
  var sides = ["4","6","8","10","12","20"];
  for(i=0; i <= 5; i++){
    if(document.getElementById("quantity"+sides[i]).value < 0){
      alert("Negative Produktzahlen sind unzulässig.")
      return true;
    }
  }
}
