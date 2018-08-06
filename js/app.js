function calculateAll(){
  var cookiesPerHour = [];
  var sum = 0;
  for (var i = 0; i < 15; i++){
    var cusNum = Math.round((Math.random()*(this.maxCus - this.minCus) + this.minCus) * this.avg);
    sum += cusNum;
    cookiesPerHour[i] = cusNum;
  }
  this.cookiesSold = cookiesPerHour;
  this.cookiesTotal = sum;
}

var pikeLoc = {
  location: '1st and Pike',
  minCus: 23,
  maxCus: 65,
  avg: 6.3,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

var seaAirLoc = {
  location: 'SeaTac Airport',
  minCus: 3,
  maxCus: 24,
  avg: 1.2,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

var seaCenLoc = {
  location: 'Seattle Center',
  minCus: 11,
  maxCus: 38,
  avg: 3.7,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

var capLoc = {
  location: 'Capitol Hill',
  minCus: 20,
  maxCus: 38,
  avg: 2.3,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

var alkiLoc = {
  location: 'Alki',
  minCus: 2,
  maxCus: 16,
  avg: 4.6,
  cookiesSold: [],
  cookiesTotal: 0,
  calculatedNums: calculateAll
}

var storeArr = [pikeLoc, seaAirLoc, seaCenLoc, capLoc, alkiLoc];

var stores = document.getElementById('stores');

console.log(stores);
for(var j = 0; j < storeArr.length; j++){
  storeArr[j].calculatedNums();

  var ulEle = document.createElement('ul');

  var heading = document.createElement('h2');
  heading.textContent = 'Location: ' + storeArr[j].location

  stores.appendChild(heading);

  var time = 6;
  for(var k = 0; k < storeArr[j].cookiesSold.length; k++){
    time = k + 6;
    var amPM = 'AM';

    if(time > 11){
      amPM = 'PM';
    }

    if(time > 12){
      time = time % 12;
    }

    var cookTime = document.createElement('li');
    cookTime.textContent = `${time} ${amPM}: ${storeArr[j].cookiesSold[k]}`;

    ulEle.appendChild(cookTime);
  }

  var total = document.createElement('li');
  total.textContent = `Total cookies bought: ${storeArr[j].cookiesTotal}`;

  ulEle.appendChild(total);
  stores.appendChild(ulEle);
}

