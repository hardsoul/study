

function loop(callback, count) {
  var i = count;
  while(i--) {
    callback(i);
  }
}

// ----------------------------

loop(function(abcdefefef){
  console.log('반복된다', abcdefefef);
}, 5);
// 입력받은 횟수 만큼
// 입력받은 로직을 반복하는 함수 loop

