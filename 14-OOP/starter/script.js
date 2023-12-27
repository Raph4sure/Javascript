/* 'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const cars = new Car('BMW', 120);
console.log(cars);

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
}

cars.accelerate();
cars.brake(); */

//Es6 classes

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Accelerating at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Deccelerating at ${this.speed}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const Bmw = new Car('BMW', 120);
// console.log(Bmw);

// Bmw.accelerate();
// Bmw.accelerate();
// Bmw.brake();
// Bmw.brake();

// console.log(Bmw.speedUS);
// Bmw.speedUS = 50;
// console.log(Bmw);

/* // Inheritance

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.accelerate(); */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`Deccelerating at ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const Rivian = new EVCl('Rivian', 120, 23);
console.log(Rivian);

//Rivian.chargeBattery(90);
//Rivian.accelerate();
//Rivian.accelerate()

Rivian.accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

  