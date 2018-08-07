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

// an array that store the locations
var storeArr = [pikeLoc, seaAirLoc, seaCenLoc, capLoc, alkiLoc];

// function that calculates the cookies sold per hour as well as tracks the total
function makeCookieSales(){
  // declares the necessary variables
  var tableBody = document.getElementById('tableBody');
  var tableRow = document.createElement('tr');

  // // sets the text and appends it
  tableRow.appendChild(createElement('th', this.location));
  tableBody.appendChild(tableRow);

  // declare varible for totalSold
  var totalSold = 0;

  // loops this through 15 hours
  for (var i = 0; i < 15; i++){
    var amtSold = Math.floor((Math.random()*(this.maxCus - this.minCus) + this.minCus) * this.avg);
    totalSold += amtSold;

    // appends the amount of cookies bought at a specific time into an li
    tableRow.appendChild(createDisplay(amtSold, i));
  }

  //  // creates and appends the total amount of cookies bought.
  tableRow.appendChild(createElement('td', `${totalSold}`));
}

// function that creates the li element to add
function createDisplay(amtSold){

  return createElement('td', `${amtSold}`);
}

// helper function that creates elements and content
function createElement(tag, content){
  var createdElement = document.createElement(tag);
  createdElement.textContent = content;

  // returns the created element
  return createdElement;
}

// creates the table header
function createHeader(){
  var header = document.getElementById('tableHead');
  var headRow = document.createElement('tr');
  header.appendChild(headRow);
  headRow.appendChild(createElement('th', 'Location'));

  // loops through each column and then adds the time
  for(var i = 0; i < 15; i++){
    var newHeader = document.createElement('th');
    newHeader.textContent = getTime(i);
    headRow.appendChild(newHeader);
  }

  headRow.appendChild(createElement('th', 'Total cookies bought:'));
}

function getTime(i){
  // initalize variables
  var time = i + 6;
  var amPM = 'AM';

  // changes AM to PM
  if(time > 11){
    amPM = 'PM';
  }

  // changes the time back to 1 after 12
  if(time > 12){
    time = time % 12;
  }
  return `${time} ${amPM}:`;
}

// creates the actual header
createHeader();

// loops through each store location and creates the display
for(var j = 0; j < storeArr.length; j++){
  // sells cookies for each store
  storeArr[j].sellCookies();
}