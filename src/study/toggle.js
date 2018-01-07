/*
var sw = false;
function toggle() {
  return sw = !sw;
}
*/

var toggle = (function() {
  var sw = false;
  return function() {
    return sw = !sw;
  }
})();

console.log(toggle()); //true
console.log(toggle()); //false
console.log(toggle()); //true
console.log(toggle()); //false