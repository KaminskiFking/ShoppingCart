require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('testar se fetchitem é uma function', () => {
    expect(typeof fetchItem).toBe('function')
  })
});
