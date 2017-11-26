function sum(a) {
  return function(b) {
    return a + b;
  }
}

var s = sum('안녕');
console.log(s('하세요'));
console.log(s('히 계세요'));

console.log( sum('안녕')('하세요') );
