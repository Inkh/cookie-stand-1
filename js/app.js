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
  this.cookiesSold = cookiesPerHour;
  this.cookiesTotal = sum;
}

// the pike location object
var pikeLoc = {
  location: '1st and Pike',
  minCus: 23,
  maxCus: 65,
  avg: 6.3,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

// the seattle airport location object
var seaAirLoc = {
  location: 'SeaTac Airport',
  minCus: 3,
  maxCus: 24,
  avg: 1.2,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

// the seattle center location object
var seaCenLoc = {
  location: 'Seattle Center',
  minCus: 11,
  maxCus: 38,
  avg: 3.7,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

// the capital hill location object
var capLoc = {
  location: 'Capitol Hill',
  minCus: 20,
  maxCus: 38,
  avg: 2.3,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

// the alki location object
var alkiLoc = {
  location: 'Alki',
  minCus: 2,
  maxCus: 16,
  avg: 4.6,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

// an array that stores the locations
var storeArr = [pikeLoc, seaAirLoc, seaCenLoc, capLoc, alkiLoc];

// gets the element by id stores
var stores = document.getElementById('stores');

// loops through each store location
for(var j = 0; j < storeArr.length; j++){
  // runs each calculate method of the stores to calculate the visitors and cookies
  storeArr[j].calculatedNums();

  // creates the ul element
  var ulEle = document.createElement('ul');

  // creates a header for the store locations
  var heading = document.createElement('h2');
  heading.textContent = 'Location: ' + storeArr[j].location

  // appends the heading
  stores.appendChild(heading);

  // loops through each store and finds how many cookies sold at each time
  for(var k = 0; k < storeArr[j].cookiesSold.length; k++){
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
    cookTime.textContent = `${time} ${amPM}: ${storeArr[j].cookiesSold[k]}`;

    // appends the cookies at the time
    ulEle.appendChild(cookTime);
  }

  // creates and appends the total amount of cookies bought.
  var total = document.createElement('li');
  total.textContent = `Total cookies bought: ${storeArr[j].cookiesTotal}`;
  ulEle.appendChild(total);

  // appends the unordered list of every item
  stores.appendChild(ulEle);
}

