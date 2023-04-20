export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const carClone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return carClone;
  }
}
