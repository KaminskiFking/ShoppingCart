require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Testar se é uma function', () => {
    expect(typeof fetchProducts).toBe("function")
  });
  test('Testar se fetch foi chamado', async() => {
    fetchProducts('computador')
    await expect(fetch).toHaveBeenCalledTimes(1)
  });
  test('a função fetch utiliza o endpoint especificado', () => {
    fetchProducts('computador')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  test('retorno da função fetchProducts  com argumento computador é uma estrutura de dados', async () => {
    const result = await fetchProducts('computador')
    expect(result).toEqual(computadorSearch)
  });
  test('sem argumentos fetchProducts, retorna string de erro', async () => {
    await expect(fetchProducts()).rejects.toThrow('You must provide an url')
  })

});
