export default class Car {
  constructor(brand, motor, color) {
    if (typeof (brand) !== 'string' || typeof (motor) !== 'string' || typeof (color) !== 'string') {
      throw new TypeError('attributes should all be strings');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
