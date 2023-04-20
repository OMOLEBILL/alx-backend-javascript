import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = amount;
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an Istance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (val instanceof Currency) {
      this._currency = val;
    } else {
      throw new TypeError('currency must be an Istance of Currency');
    }
  }

  displayFullPrice() {
    const curr = this._currency.displayFullCurrency();
    return (`${this._amount} ${curr}`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number' || typeof (conversionRate) !== 'number') {
      throw new TypeError('params must be a number');
    }
    return amount * conversionRate;
  }
}
