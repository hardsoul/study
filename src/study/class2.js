class Car {
  constructor(){
    this.speed = 0;
  }
  excell(){
    this.speed++;
  }
}

class Bus extends  Car{
  constructor(){
    super();//상속받았으면 써줘야해.
    this.passengerNumber = 40;
  }
}
const car = new Car();
const bus = new Bus();
bus.excell();
bus.excell();
bus.excell();
console.log(car);
console.log(bus);