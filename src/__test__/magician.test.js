import Magician from '../magician';

test.each([
  [
    'Alise', 
    'Magician',
    {
      name: 'Alise', 
      type: 'Magician', 
      health: 100,
      level: 1,
      _attack: 10,
      defence: 40,
      range: undefined,
      _stoned: undefined
    }
  ],
  [
    'Dima', 
    undefined,
    {
      name: 'Dima', 
      type: 'Magician', 
      health: 100,
      level: 1,
      _attack: 10,
      defence: 40,
      range: undefined,
      _stoned: undefined
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Magician(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Magician', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Magician', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Magician(name, type,);
  }
  expect(result).toThrow(expected);
});

test.each([
  ['Alise', 'Magician', 1, 2],
  ['Dima', 'Magician', 9, 10],
  ['Zombie', 'Magician', 100, 101]
])// eslint-disable-next-line
('testin levelUp method with %s name, %s type and %i levelUp', (name, type, index, expected) => {
  const result = new Magician(name, type);
  for (let i = 0; i < index; i += 1) {
    result.levelUp();
  }
  expect(result.level).toEqual(expected);
});

test.each([
  ['Zombie', 'Magician', new Error("Нельзя повысить левел умершего")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    const result = new Magician(name, type);
    result.damage(1000);
    result.levelUp();
  }
  expect(result).toThrow(expected);
});

test.each([
  ['Alise', 'Magician', 1000, 0],
  ['Dima', 'Magician', 100, 40]
])// eslint-disable-next-line
('testin damage method with %s name, %s type and %i points', (name, type, points, expected) => {
  const result = new Magician(name, type);
  result.damage(points);
  expect(result.health).toEqual(expected);
});

test.each([
  [
    'Alise', 
    'Magician',
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
('testin Magician class with %s name and %s type', (name, type, config, expected) => {
  const result = new Magician(name, type, config);
  expect(result.attack).toEqual(expected);
});

test.each([
  [
    'Alise', 
    'Magician', 
    {
      range: 0,
      stoned: true
    },
    10
  ],
  [
    'Dima', 
    'Magician',
    {
      range: 3,
      stoned: true
    },
    1
  ]
])// eslint-disable-next-line
('testin Magician class with %s name and %s type', (name, type, config, expected) => {
  const result = new Magician(name, type, config);
  expect(result.attack).toEqual(expected);
});
