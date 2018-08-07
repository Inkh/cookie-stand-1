'use strict';

// object constructore for the Store object
function Store(location, minCus, maxCus, avg){
  // sets the object's properties to what the user input
  this.location = location,
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avg = avg;
}

// creates the sell cookies method
Store.prototype.sellCookies = makeCookieSales;

// creating each store for the different locations
var pikeLoc = new Store('1st and Pike', 23, 65, 6.3);
var seaAirLoc = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenLoc = new Store('1st and Pike', 11, 38, 3.7);
var capLoc = new Store('1st and Pike', 20, 38, 2.3);
var alkiLoc = new Store('1st and Pike', 2, 16, 46);

// an array that stores the locations
var storeArr = [pikeLoc, seaAirLoc, seaCenLoc, capLoc, alkiLoc];

// loops through each store location and creates the display
for(var j = 0; j < storeArr.length; j++){
  // sells cookies for each store
  storeArr[j].sellCookies();
}

// function that calculates the cookies sold per hour as well as tracks the total
function makeCookieSales(){
  // declares the necessary variables
  var stores = document.getElementById('stores');
  var unorderedList = document.createElement('ul');

  // // sets the text and appends it
  stores.appendChild(createElement('h2', 'Location: ' + this.location));
  stores.appendChild(unorderedList);

  // declare varible for totalSold
  var totalSold = 0;

  // loops this through 15 hours
  for (var i = 0; i < 15; i++){
    var amtSold = Math.floor((Math.random()*(this.maxCus - this.minCus) + this.minCus) * this.avg);
    totalSold += amtSold;

    // appends the amount of cookies bought at a specific time into an li
    unorderedList.appendChild(createDisplay(amtSold, i));
  }

  //  // creates and appends the total amount of cookies bought.
  unorderedList.appendChild(createElement('li', `Total cookies bought: ${totalSold}`));
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