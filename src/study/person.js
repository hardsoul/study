// person 객체
// name, age 프로퍼티
var person = {
  name: '김수호',
  age: 33,
  배: [],
  먹다: function(food) {
    if (food.type === 'food') {
      this.배.push(food);
    }
  },
  싸다: function() {
    // 배열을 비울 때
    var 똥 = {
      묽기: '물',
      건더기: this.배.map(function(food){
        //console.log('map: ', food);
        return food.name;
      })
    };

    this.배.length = 0;
    // this.배 = [];
    return 똥;
  }
};
var person1 = (function() {
  var 배 = [];
  return {
    name: 'suho',
    age: 33,
    먹다: function() {

    },
    싸다: function() {

    }
  }
})();
person.먹다({
  type: 'food',
  name: '사과'
});
person.먹다({
  type: 'food',
  name: '음료수'
});
person.먹다({
  type: '가구',
  name: '책상'
});
person.먹다({
  type: '원재료',
  name: '철'
});
var 똥 = person.싸다();
//console.log(똥);
//console.log('뱃속: ', person.배);


var module = (function() {
  var engine = {};
  return {
    action: function() {
      engine.abc = 1;
    },
    action2: function() {

    }
  };
})();
console.log(module);

// 즉시 실행함수 IIFE
// 모듈 패턴
