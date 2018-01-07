var hh = 111;
var hoistTest = {
  b: function() {
    console.log('1번: ', h1); // undefined
    function bbb() {
      console.log('2번: ', h1); // 0
      h1 = 1;
    }
    var h1 = 0;
    bbb();
  },
  c: function() {
    console.log('3번: ', hh); // 111
    var hh = 555;
  }
};
// hoistTest.b();
// hoistTest.c();
