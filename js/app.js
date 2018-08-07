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
  storeArr[j].sellCookies();
}

// function that calculates the cookies sold per hour as well as tracks the total
function makeSales(){
  // declares the necessary variables
  var stores = document.getElementById('stores');
  var unorderedList = document.createElement('ul');

  // // sets the text and appends it
  stores.appendChild(createElement('h2', 'Location: ' + this.location));
  stores.appendChild(unorderedList);

  // declare varible for sum
  var sum = 0;

  // loops this through 15 hours
  for (var i = 0; i < 15; i++){
    var amtSold = Math.floor((Math.random()*(this.maxCus - this.minCus) + this.minCus) * this.avg);
    sum += amtSold;
    
  // appends the amount of cookies bought at a specific time into an li
  unorderedList.appendChild(createDisplay(amtSold, i));
  }

  //  // creates and appends the total amount of cookies bought.
   unorderedList.appendChild(createElement('li', `Total cookies bought: ${sum}`));
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

  return createElement('li', `${time} ${amPM}: ${amtSold}`);
}

// helper function that creates elements and content
function createElement(tag, content){
  var createdElement = document.createElement(tag);
  createdElement.textContent = content;

  // returns the created element
  return createdElement;
}