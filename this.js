//함수를 실행 하면 일어나는일
//1.지역변수 세팅
//2.arguments를 세팅
//3.this 세팅
//4.기타 등등

//1. 일반 함수 호출 --명시적이지않아서.."use strict";을 작성

//https://github.com/wow9144/fd3
function a() {
  //"use strict";
  var person = {};
  var name = 'suho';
  console.log(this);
}
a();

var obj = {
  name : 'ejd',
  a:a
}
obj.a();
//2. 객체의 메소드로써의 호출

//3. new 호출

//4. call, apply 호출
