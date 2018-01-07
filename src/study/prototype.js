
var person = {};
//console.log(person.hasOwnProperty('age'));
var arr = [];
var arr2 = [];
/*
arr.push('ab');
console.log(arr);
arr.push('cd');
console.log(arr);
arr.push('ef');
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);*/

function Slider() {
  this.currentIndex = 0;
}
Slider.prototype.next = function() {};
Slider.prototype.prev = function() {};

var slider = new Slider();
var slider2 = new Slider();

slider2.currentIndex = 5;
slider.next();
console.log(slider);
console.log(slider2);

// Array 함수를 만들어라. push 구현.


function Array() {
  this.length = 0;
}
Array.prototype.push = function() {
  this.length++;
};

var arr = new Array();
console.log(arr.length);
arr.push();
console.log(arr.length);
arr.push();
console.log(arr.length);










