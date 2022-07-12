const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Ao executar saveCartItems com o argumento, o metodo é chamado', () =>{
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })
  it('Ao executar saveCartItems com argumento, o metodo é chamado com dois parametros', () =>{
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'saveCartItems')
  })
});
