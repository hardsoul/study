/**
 * 2. 숫자로 이루어진 배열 하나를 인자로 받아 가장 큰 숫자를 반환하는 max함수를 만드세요
 */

function max(numbers) {
  var result = numbers[0];

  for(var i = 0; i < numbers.length; i++) {
    if(result < numbers[i]) {
      result = numbers[i];
    }
  }

  return result;
}
console.log(max([1, 5, 8, 3, 4])); //8
console.log(max([4, 2, 2, 4, 1])); //4
console.log(max([-5, -2]));