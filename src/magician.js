import MagicAttack from './magic_attack';
// eslint-disable-next-line
export default class Magician extends MagicAttack {
  constructor(name, type = 'Magician', config = false) {
    super(name, type, config);
    this.attack = 10;
    this.defence = 40;
  }
}
