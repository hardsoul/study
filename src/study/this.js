// 함수를 실행 하면 일어나는일
// 1. 지역변수 세팅
// 2. arguments 세팅
// 3. this 세팅
// 4. 기타 등등
//1. 일반 함수 호출
function a() {
  var person = {};
  var name = 'suho';
  console.log(this);
}
// a();

//2. 객체의 메소드로써의 호출
var obj = {
  name: 'efe',
  a: a
};
// obj.a();
//3. new 호출
function Abc() {
  this.name = 'suho';
  this.age = 33;
  console.log(this);
}
// var abc = new Abc();
// var abc2 = new Abc();
// var abc3 = new Abc();

//4. call, apply 호출
function ddd(a, b) {
  console.log(this);
  console.log('a : ', a);
  console.log('b : ', b);
}
//ddd.call({name: 111}, 1,6);
//ddd.apply({name: 111}, [1,6]);
//this는 함수호출 방식에 따라서 달라진다.



var abc = {
  b: function() {
    console.log('1번: ', this);
    function bbb() {
      console.log('2번: ', this);
    }
    bbb();
  },
  c: function() {
    console.log('3번: ', this);
  }
};
// abc.b();
// abc.c.call(obj);
