const getSavedCartItems = () => localStorage.getItem('cartItems');
    // localStorage.getItem('cartItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
