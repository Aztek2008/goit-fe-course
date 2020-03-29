'use strict';

class Car {
  static getSpecs(car) {
    console.log(`Current spcifications:
    maxSpeed: ${car.maxSpeed} mph,
    speed: ${car.speed} mph,
    isOn: ${car.isOn},
    distance: ${car.distance} km,
    price: ${car.price} credits`)
  }

  constructor({
    speed = 0,
    price,
    maxSpeed,
    isOn = false,
    distance = 0
  }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
    return this.isOn
  }

  /* Добавь код для того чтобы заглушить автомобиль  Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0 */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
    return this.isOn, this.speed;
  }

  /* Добавялет к свойству speed полученное значение, при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed */
  accelerate(value) {
    this.speed += value;
    if (value <= this.maxSpeed) {
      return this.speed;
    } else {
      return this.speed = this.maxSpeed;
    }
  }

  /* Отнимает от свойства speed полученное значение, if результирующая скорость не меньше нуля */
  decelerate(value) {
    this.speed -= value;
    if (value >= 0) {
      return this.speed;
    } else {
      return this.speed = 0;
    }
  }

  /* Добавляет в поле distance киллометраж (hours * speed), если машина заведена! */
  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
    console.log(`Driving hours: ${hours}`);
    console.log(`Speed: ${this.speed} mph`);
  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(`Current price is: ${mustang.price} credits`); // 2000
mustang.price = 4000;
console.log(`Current price is: ${mustang.price} credits`); // 4000