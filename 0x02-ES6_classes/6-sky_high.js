import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof (sqft) !== 'number' || typeof (floors) !== 'number') {
      throw new TypeError('Params must be numbers');
    }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('floors must be numbers');
    }
    this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
