var slider = {
  currentIndex: 0,
  next: function(step) {
    var defaultStep = 1;
    this.currentIndex += step > 0 ? step : defaultStep;
  },
  prev: function(step) {
    this.currentIndex -= step ? step : 1;
  },
  go: function(index) {
    if(index <= 0) return;
    this.currentIndex = index;
  }
};

slider.next(5);
slider.next(3);
slider.next();
console.log(slider.currentIndex); // 9
slider.prev();
console.log(slider.currentIndex); // 8
slider.prev(2);
console.log(slider.currentIndex); // 6
slider.prev();
console.log(slider.currentIndex); // 5
slider.prev();
console.log(slider.currentIndex); // 4
slider.go(10);
console.log(slider.currentIndex); // 10
slider.go(2);
console.log(slider.currentIndex); // 2
slider.go(-5);
console.log(slider.currentIndex); // 2