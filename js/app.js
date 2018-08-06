console.log('javascript works')

function calculateAll(){
  var cusNumsPerHour = [];
  var sum = 0;
  for (var i = 0; i < 15; i++){
    var cusNum = (Math.round(Math.random()*(this.maxCus - this.minCus)) + this.minCus);
    sum += cusNum;
    cusNumsPerHour[i] = cusNum;
  }
  cusNumsPerHour[15] = (sum / 15).toFixed(2);
  return cusNumsPerHour;
}

var pikeLoc = {
  location: '1st and Pike',
  minCus: 23,
  maxCus: 65,
  calculatedNums: calculateAll
}

var seaAirLoc = {
  location: 'SeaTac Airport',
  minCus: 3,
  maxCus: 24,
  calculatedNums: calculateAll
}

var seaCenLoc = {
  location: 'Seattle Center',
  minCus: 11,
  maxCus: 38,
  calculatedNums: calculateAll
}

var capLoc = {
  location: 'Capitol Hill',
  minCus: 20,
  maxCus: 38,
  calculatedNums: calculateAll
}

var alkiLoc = {
  location: 'Alki',
  minCus: 2,
  maxCus: 16,
  calculatedNums: calculateAll
}

console.log(pikeLoc.calculatedNums());
console.log(alkiLoc.calculatedNums());

