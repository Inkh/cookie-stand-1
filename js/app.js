'use strict';

// the pike location object
var pikeLoc = {
  location: '1st and Pike',
  minCus: 23,
  maxCus: 65,
  avg: 6.3,
  sellCookies: makeSales
}

// the seattle airport location object
var seaAirLoc = {
  location: 'SeaTac Airport',
  minCus: 3,
  maxCus: 24,
  avg: 1.2,
  sellCookies: makeSales
}

// the seattle center location object
var seaCenLoc = {
  location: 'Seattle Center',
  minCus: 11,
  maxCus: 38,
  avg: 3.7,
  sellCookies: makeSales
}

// the capital hill location object
var capLoc = {
  location: 'Capitol Hill',
  minCus: 20,
  maxCus: 38,
  avg: 2.3,
  sellCookies: makeSales
}

// the alki location object
var alkiLoc = {
  location: 'Alki',
  minCus: 2,
  maxCus: 16,
  avg: 4.6,
  sellCookies: makeSales
}

// an array that stores the locations
var storeArr = [pikeLoc, seaAirLoc, seaCenLoc, capLoc, alkiLoc];

// loops through each store location and creates the display
for(var j = 0; j < storeArr.length; j++){
  // sells cookies for each store
  var cookiesSold = storeArr[j].sellCookies();
}

// function that calculates the cookies sold per hour as well as tracks the total
function makeSales(){
  // declares the necessary variables
  var stores = document.getElementById('stores');
  var unorderedList = document.createElement('ul');
  var heading = document.createElement('h2');

  // sets the text and appends it
  heading.textContent = 'Location: ' + this.location
  stores.appendChild(heading);

  // declare varible for sum
  var sum = 0;

  // loops this through 15 hours
  for (var i = 0; i < 15; i++){
    var amtSold = Math.round((Math.random()*(this.maxCus - this.minCus) + this.minCus) * this.avg);
    sum += amtSold;
    
  // appends the cookies at the time
  unorderedList.appendChild(createDisplay(amtSold, i));
  }

   // creates and appends the total amount of cookies bought.
   var total = document.createElement('li');
   total.textContent = `Total cookies bought: ${sum}`;
   unorderedList.appendChild(total);
 
   // appends the unordered list of every item
   stores.appendChild(unorderedList);
}

// function that creates the li element to add
function createDisplay(amtSold, k){
  // initalize variables
  var time = k + 6;
  var amPM = 'AM';

  // changes AM to PM
  if(time > 11){
    amPM = 'PM';
  }

  // changes the time back to 1 after 12
  if(time > 12){
    time = time % 12;
  }

  // creates the li elements containing the time and cookies sold
  var cookSoldLI = document.createElement('li');
  cookSoldLI.textContent = `${time} ${amPM}: ${amtSold}`;

  // returns the element created
  return cookSoldLI;
}