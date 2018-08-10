'use strict';

// object constructor for the Store object
function Store(location, minCust, maxCust, avg){
  // sets the object's properties to what the user input
  this.location = location,
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.soldArr = [];
}

// creates the sell cookies method
Store.prototype.sellCookies = makeCookieSales;

// an array that store the locations
var storeArr = [];

// creating each store for the different locations
createStore('1st and Pike', 23, 65, 6.3);
createStore('SeaTac Airport', 3, 24, 1.2);
createStore('Seattle Center', 11, 38, 3.7);
createStore('Capitol Hill', 20, 38, 2.3);
createStore('Alki', 2, 16, 4.6);

function createStore(loc, minCust, maxCust, avg){
  storeArr.push(new Store(loc, minCust, maxCust, avg));
}

// function that calculates the cookies sold per hour as well as tracks the total
function makeCookieSales(){
  // declares the necessary variables
  var tableBody = getEl('tableBody');
  var tableRow = document.createElement('tr');

  // sets the text and appends it
  var loc = createElement('th', this.location);
  loc.classList.add('location');
  tableRow.appendChild(loc);
  tableBody.appendChild(tableRow);

  // declare varible for totalSold
  var totalSold = 0;
  var soldArr = [];

  // loops this through 15 hours and adds to the array of sold
  for (var i = 0; i < 15; i++){
    var amtSold = Math.floor((Math.random()*(this.maxCust - this.minCust + 1) + this.minCust) * this.avg);
    soldArr[i] = amtSold;
    totalSold += amtSold;

    // appends the amount of cookies bought at a specific time into an li
    tableRow.appendChild(createDisplay(amtSold, i));
  }

  // creates and appends the total amount of cookies bought.
  tableRow.appendChild(createElement('td', `${totalSold}`));

  // adds the total as the last item and returns it
  soldArr[15] = totalSold;
  this.soldArr = soldArr;

  // creates the footer at the end
  createFooter();
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
  var header = getEl('tableHead');
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

// function that determines the time
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

// function that gets the element ID, tired of typing the whole thing in haha
function getEl(id){
  return document.getElementById(id);
}

// footer function that creates the totals
function createFooter(){
  clearFooter();
  var tableFoot = getEl('tableFoot');
  var tableRow = document.createElement('tr');

  // sets the text and appends it
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

// clears the footer so we can update
function clearFooter(){
  var tableFoot = getEl('tableFoot');

  // while there is a child, removes the child
  while(tableFoot.firstChild){
    tableFoot.removeChild(tableFoot.firstChild);
  }
}

// function to clear all the fields
function clearFields(e){
  e.target.loc.value = '';
  e.target.minCust.value = 0;
  e.target.maxCust.value = 0;
  e.target.avg.value = 0;
}

// adds a new store from the user's input
function addStore(e){
  e.preventDefault();
  createStore(e.target.loc.value, Number(e.target.minCust.value), Number(e.target.maxCust.value), Number(e.target.avg.value));

  // runs the sell cookies to generate and display data
  storeArr[storeArr.length-1].sellCookies();

  // clear the fields
  clearFields(e);
}

// creates the actual header
createHeader();

// loops through each store location and creates the display
for(var j = 0; j < storeArr.length; j++){
  // sells cookies for each store
  storeArr[j].sellCookies();
}

// adds an event listener to the form
var formEl = getEl('addForm');
formEl.addEventListener('submit', addStore);