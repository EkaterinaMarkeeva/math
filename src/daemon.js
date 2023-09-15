import MagicAttack from './magic_attack';
// eslint-disable-next-line
export default class Daemon extends MagicAttack {
  constructor(name, type = 'Daemon', config = false) {
    super(name, type, config);
    this.attack = 10;
    this.defence = 40;
  }
}
