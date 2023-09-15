import Character from './character';
// eslint-disable-next-line
export default class MagicAttack extends Character {
  constructor(name, type, config) {
    super(name, type);
    this.range = config.range;
    this.stoned = config.stoned;
  }
  
  set attack(value) {
    if (!this.range || this.range <= 0) {
      this._attack = value;
    } else {
      let percent = 1 - (this.range - 1) / 10;
  
      this._attack = value * percent;
      this._attack = Math.trunc(this._attack);

      if (this.stoned) {
        let log2 = Math.log2(this.range);
        
        this._attack = this._attack - log2 * (percent) * 5;
        this._attack = Math.trunc(this._attack);
      }
    } 
  }

  get attack() {
    return this._attack;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}
