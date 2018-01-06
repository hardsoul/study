function addAll() {
  var sum = 0;
  for (var i = 0; i <arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var nums =[];
for (var i = 0; i < 1000000; i++) {
  nums.push(i);
}

console.log(addAll(2,4,6));
console.log(addAll.apply(null, nums));