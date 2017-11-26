//1번문제입니다.
var slider = (function(){
  return{
    currentIndex : 0,//'', 빈문자열로해도 되지만..스크립트가 너무 유연해서야..조심하자..지금은 숫자가 맞아.
    next : function (step) {
      var defaultStep = 1;
      // if(step > 0){
      //   this.currentIndex += step;
      // } else {
      //   this.currentIndex += defaultStep;//1이 뭐지?? 이러면 매직넘버
      // }
      this.currentIndex += step > 0 ? step : defaultStep; //위엣것을 다시 줄였어..3항 연산자로.
      //this.currentIndex += index;
      //this.currentIndex = this.currentIndex + 1; 개선해가는 과장 = 중복을 줄여 리팩로링..
    },
    prev : function (step) {
      // if(this.currentIndex <=0) return
      // this.currentIndex -=1;
      // if (this.currentIndex > 0){
      //   this.currentIndex -= 1;
      //   this.currentIndex = this.currentIndex - 1;
      // }
      this.currentIndex -= step ? step : 1;
    },
    go : function (index) {
      // if (index >= 0){
      //   this.currentIndex = index;
      // }
      // gk단 실프??이프문??
      if(index <=0) return
      this.currentIndex = index;
    }
  };
})();

slider.next(5);
slider.next(3);
slider.next();
console.log(slider.currentIndex);//9
slider.prev();
console.log(slider.currentIndex);//8
slider.prev();
console.log(slider.currentIndex);//7
slider.prev(2);
console.log(slider.currentIndex);//5
slider.prev();
console.log(slider.currentIndex);//4
slider.go(10);
console.log(slider.currentIndex);//10
slider.go(2);
console.log(slider.currentIndex);//2
slider.go(-5);
console.log(slider.currentIndex);//2

//2번문제입니다.
function sum(x) {
  return function(y) {
    return x + y;
  };
}
console.log(sum('안녕')('하세요'));
console.log(sum(2)(3));