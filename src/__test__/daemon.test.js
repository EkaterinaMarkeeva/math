import Daemon from '../daemon';

test.each([
  [
    'Alise',
    'Daemon', 
    {range: null},
    {
      name: 'Alise', 
      type: 'Daemon', 
      health: 100,
      level: 1,
      _attack: 10,
      defence: 40,
      range: null,
      _stoned: undefined
    }
  ],
  [
    'Dima',
    undefined,
    {range: null},
    {
      name: 'Dima', 
      type: 'Daemon', 
      health: 100,
      level: 1,
      _attack: 10,
      defence: 40,
      range: null,
      _stoned: undefined
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, config, expected) => {
  const result = new Daemon(name, type, config);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Daemon', {range: null}, new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Daemon', {range: null}, new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', {range: null}, new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, config, expected) => {
  function result() {
    new Daemon(name, type,config);
  }
  expect(result).toThrow(expected);
});

test.each([
  ['Alise', 'Daemon', {range: null}, 1, 2],
  ['Dima', 'Daemon', {range: null}, 9, 10],
  ['Zombie', 'Daemon', {range: null}, 100, 101]
])// eslint-disable-next-line
('testin levelUp method with %s name, %s type and %i levelUp', (name, type, config, index, expected) => {
  const result = new Daemon(name, type, config);
  for (let i = 0; i < index; i += 1) {
    result.levelUp();
  }
  expect(result.level).toEqual(expected);
});

test.each([
  ['Zombie', 'Daemon', {range: null}, new Error("Нельзя повысить левел умершего")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, config, expected) => {
  function result() {
    const result = new Daemon(name, type, config);
    result.damage(1000);
    result.levelUp();
  }
  expect(result).toThrow(expected);
});

test.each([
  ['Alise', 'Daemon', {range: null}, 1000, 0],
  ['Dima', 'Daemon', {range: null}, 100, 40]
])// eslint-disable-next-line
('testin damage method with %s name, %s type and %i points', (name, type, config, points, expected) => {
  const result = new Daemon(name, type, config);
  result.damage(points);
  expect(result.health).toEqual(expected);
});

test.each([
  [
    'Alise', 
    'Daemon',
    {
      range: 0
    },
    10
  ],
  [
    'Dima', 
    undefined,
    {
      range: 3
    },
    8
  ]
])// eslint-disable-next-line
('testin Daemon class with %s name and %s type', (name, type, config, expected) => {
  const result = new Daemon(name, type, config);
  expect(result.attack).toEqual(expected);
});

test.each([
  [
    'Alise', 
    'Daemon', 
    {
      range: 0,
      stoned: true
    },
    10
  ],
  [
    'Dima', 
    'Daemon',
    {
      range: 3,
      stoned: true
    },
    1
  ]
])// eslint-disable-next-line
('testin Daemon class with %s name and %s type', (name, type, config, expected) => {
  const result = new Daemon(name, type, config);
  expect(result.attack).toEqual(expected);
});
