const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it(' Ao executar getSavedCartItems, o método getItem é chamado', () =>{
   getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  });
  it('Ao executar getSavedCartItems, o metodo é chamado com um parametro', () =>{
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  })
});
