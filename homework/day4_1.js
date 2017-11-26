/**
 * 1. 배열을 인자로 받아 그 합을 반환하는 sum 함수를 만드세요
 * 참고: array.length 하면 배열의 길이가 반환됩니다.
 */
function sum(numbers) {
  /*var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;*/
  // 반복문을 쓰지 않고 연속된 숫자 배열의 합을 구하라.
  var targetNumber = numbers[0] + numbers[numbers.length - 1];
  return targetNumber * (numbers.length / 2);
}

module.exports = sum;