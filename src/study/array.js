// 1. Side Effect
// push
// pop
// sort
var arr = [2,5,1,2,3,6,9,7];
//arr.sort();
//console.log(arr);

// 2. None Side Effect
// join
var abc = arr.join(':wefwefw');
//console.log(abc);
//console.log(arr);
// map
var m = arr.map(function(value){
  return value + 10000;
});
//console.log(m);
//console.log(arr);

// filter
var f = arr.filter(function(value) {
  return value % 2 === 0;
});
//console.log(f);
//console.log(arr);

// every
// some
// reduce
var r = arr.reduce(function(prev, current, index) {
  prev['key[' + index + ']'] = current;
  return prev;
}, {});
// console.log(r);
// console.log(arr);



var arr = [3,9,33,55,12];

var result = arr.filter(function(v, i, arr) {
  //console.log(v, i, arr);
  return v <= 10;
}).reduce(function(p, c){
  return p + c;
}, 0);

console.log(result);




