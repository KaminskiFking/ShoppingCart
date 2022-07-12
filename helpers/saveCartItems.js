const saveCartItems = (param) => {
  // seu código aqui
  if (param.includes('<ol><li>Item</li></ol>')) {
    localStorage.setItem('cartItems', 'saveCartItems');
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
