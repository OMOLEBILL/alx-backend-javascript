export default class Airport {
  constructor(name, code) {
    if (typeof (name) !== 'string' || typeof (code) !== 'string') {
      throw new TypeError('Name or Code should be strings');
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Name should be strings');
    }
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Code should be strings');
    }
    this._code = val;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
