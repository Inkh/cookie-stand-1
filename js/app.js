'use strict';

// function that calculates the cookies sold per hour as well as tracks the total
function calculateAll(){
  // declare variablesfor later use
  var cookiesPerHour = [];
  var sum = 0;

  // loops this through 15 hours
  for (var i = 0; i < 15; i++){
    var cusNum = Math.round((Math.random()*(this.maxCus - this.minCus) + this.minCus) * this.avg);
    sum += cusNum;
    cookiesPerHour[i] = cusNum;
  }
  
  // sets the cookies sold and total
  this.cookiesTotal = sum;
  return cookiesPerHour;
}

// the pike location object
var pikeLoc = {
  location: '1st and Pike',
  minCus: 23,
  maxCus: 65,
  avg: 6.3,
  cookiesTotal: 0,
  sellCookies: calculateAll
}

// the seattle airport location object
var seaAirLoc = {
  location: 'SeaTac Airport',
  minCus: 3,
  maxCus: 24,
  avg: 1.2,
  cookiesTotal: 0,
  sellCookies: calculateAll
}

// the seattle center location object
var seaCenLoc = {
  location: 'Seattle Center',
  minCus: 11,
  maxCus: 38,
  avg: 3.7,
  cookiesTotal: 0,
  sellCookies: calculateAll
}

// the capital hill location object
var capLoc = {
  location: 'Capitol Hill',
  minCus: 20,
  maxCus: 38,
  avg: 2.3,
  cookiesTotal: 0,
  sellCookies: calculateAll
}

// the alki location object
var alkiLoc = {
  location: 'Alki',
  minCus: 2,
  maxCus: 16,
  avg: 4.6,
  cookiesTotal: 0,
  sellCookies: calculateAll
}

// an array that stores the locations
var storeArr = [pikeLoc, seaAirLoc, seaCenLoc, capLoc, alkiLoc];

// gets the element by id stores
var stores = document.getElementById('stores');

// loops through each store location
for(var j = 0; j < storeArr.length; j++){
  // runs each calculate method of the stores to calculate the visitors and cookies
  var cookiesSold = storeArr[j].sellCookies();

  // creates the ul element
  var unorderedList = document.createElement('ul');

  // creates a header for the store locations
  var heading = document.createElement('h2');
  heading.textContent = 'Location: ' + storeArr[j].location

  // appends the heading
  stores.appendChild(heading);

  // loops through each store and finds how many cookies sold at each time
  for(var k = 0; k < cookiesSold.length; k++){
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
    var cookTime = document.createElement('li');
    cookTime.textContent = `${time} ${amPM}: ${cookiesSold[k]}`;

    // appends the cookies at the time
    unorderedList.appendChild(cookTime);
  }

  // creates and appends the total amount of cookies bought.
  var total = document.createElement('li');
  total.textContent = `Total cookies bought: ${storeArr[j].cookiesTotal}`;
  unorderedList.appendChild(total);

  // appends the unordered list of every item
  stores.appendChild(unorderedList);
}

