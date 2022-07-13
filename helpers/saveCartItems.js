const saveCartItems = (param) => {
  // seu código aqui
  const saveLocal = localStorage.getItem('cartItems');
  if (saveLocal) {
    const jsonParse = JSON.parse(saveLocal);
    jsonParse.push(param);
    localStorage.setItem('cartItems', JSON.stringify(jsonParse));
  } else {
    const arrStorage = [param];
    localStorage.setItem('cartItems', JSON.stringify(arrStorage));
  }
  /* if (param.includes('<ol><li>Item</li></ol>')) {
    localStorage.setItem('cartItems', 'saveCartItems');
  } */
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
