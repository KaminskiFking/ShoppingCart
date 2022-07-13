const getSavedCartItems = () => {
  // seu código aqui
  const index = JSON.parse(localStorage.getItem('cartItems'));
  index.forEach((element) => {
    const buttonAcess = document.querySelector('.cart__items'); 
    const addItemInCart = createCartItemElement(element);
    buttonAcess.appendChild(addItemInCart);
});
    // localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
