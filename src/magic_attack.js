import Character from './character';
// eslint-disable-next-line
export default class MagicAttack extends Character {
  constructor(name, type, config = false) {
    super(name, type);
    this.range = config.range;
    this.stoned = config.stoned;
  }
  
  set attack(value) {
    this._attack = value;
  }

  get attack() {
    if (!this.range || this.range <= 0) {
      return this._attack;
    } else {
      let percent = 1 - (this.range - 1) / 10;
  
      this._attack = this._attack * percent;
      this._attack = Math.trunc(this._attack);

      if (this.stoned) {
        let log2 = Math.log2(this.range);
        
        this._attack = this._attack - log2 * (percent) * 5;
        this._attack = Math.trunc(this._attack);
      }
    } 
    return this._attack;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}
