'use strict';

// object constructor for the Store object
function Store(location, minCus, maxCus, avg){
  // sets the object's properties to what the user input
  this.location = location,
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avg = avg;
  this.soldArr = [];
}

// creates the sell cookies method
Store.prototype.sellCookies = makeCookieSales;

// creating each store for the different locations
var pikeLoc = new Store('1st and Pike', 23, 65, 6.3);
var seaAirLoc = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenLoc = new Store('Seattle Center', 11, 38, 3.7);
var capLoc = new Store('Capitol Hill', 20, 38, 2.3);
var alkiLoc = new Store('Alki', 2, 16, 46);

// an array that store the locations
var storeArr = [pikeLoc, seaAirLoc, seaCenLoc, capLoc, alkiLoc];

// function that calculates the cookies sold per hour as well as tracks the total
function makeCookieSales(){
  // declares the necessary variables
  var tableBody = document.getElementById('tableBody');
  var tableRow = document.createElement('tr');

  // // sets the text and appends it
  var loc = createElement('th', this.location);
  loc.classList.add('location');
  tableRow.appendChild(loc);
  tableBody.appendChild(tableRow);

  // declare varible for totalSold
  var totalSold = 0;
  var soldArr = [];

  // loops this through 15 hours and adds to the array of sold
  for (var i = 0; i < 15; i++){
    var amtSold = Math.floor((Math.random()*(this.maxCus - this.minCus) + this.minCus) * this.avg);
    soldArr[i] = amtSold;
    totalSold += amtSold;

    // appends the amount of cookies bought at a specific time into an li
    tableRow.appendChild(createDisplay(amtSold, i));
  }

  //  // creates and appends the total amount of cookies bought.
  tableRow.appendChild(createElement('td', `${totalSold}`));

  // adds the total as the last item and returns it
  soldArr[15] = totalSold;
  this.soldArr = soldArr;
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
    newHeader.classList.add('head');
    headRow.appendChild(newHeader);
  }

  // creates the total bought header
  var totalHead = createElement('th', 'Total bought:');
  totalHead.classList.add('head');
  headRow.appendChild(totalHead);
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
  return `${time}${amPM}`;
}

// footer function that creates the totals
function createFooter(){
  var tableFoot = document.getElementById('tableFoot');
  var tableRow = document.createElement('tr');

  // // sets the text and appends it
  var footer = createElement('th', 'Totals');
  footer.classList.add('location');
  tableRow.appendChild(footer);
  tableFoot.appendChild(tableRow);

  // looping through all the objects to add the totals
  for(var i = 0; i < 16; i++){
    var sum = 0;
    for(var j = 0; j < storeArr.length; j++){
      sum += storeArr[j].soldArr[i];
    }
    tableRow.appendChild(createElement('td', sum));
  }

}

// creates the actual header
createHeader();

// loops through each store location and creates the display
for(var j = 0; j < storeArr.length; j++){
  // sells cookies for each store
  storeArr[j].sellCookies();
}

// creates the footer
createFooter();
