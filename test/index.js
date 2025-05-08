const soma = require('../index');

test('soma 1 + 2 deve retornar 3', () => {
  expect(soma(1, 2)).toBe(3);
});
