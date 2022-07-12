require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('testar se fetchitem é uma function', () => {
    expect(typeof fetchItem).toBe('function')
  });
  test('testar se quando string for chamada, fetch seja chamado', async () => {
    fetchItem('MLB1615760527')
  await expect(fetch).toHaveBeenCalledTimes(1)
  });
  test('testar se quando string for chamada, tenha um endpoint especifico', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });
  test('retorno da função fetchitem com argumento MLB(NUMBERS) é uma estrutura de dados', async () => {
    const result = await fetchItem('MLB1615760527')
    expect(result).toEqual(item)
  });
  test('sem argumentos fetchitem, retorna string de erro', async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url')
  });
});
