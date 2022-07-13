const saveQuery = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
  saveCartItems(saveQuery.innerHTML);
};

/* const clickRemove = () => {
  const testCart = document.querySelector('.cart__item')
  testCart.forEach((element) => element.addEventListener('click', cartItemClickListener))
}*/

const totalProductItems = () => {
  const data = [];
  const carts = document.querySelectorAll('.cart__item');
  carts.forEach((cart) => {
    const text = cart.textContent;
    const array = text.split('$');
    data.push(Number(array[1]));
    
  });
  const result = data.reduce((acc, atual) => acc + atual, 0);
  const acessPrice = document.querySelector('.total-price');
  acessPrice.innerHTML = `${result}`;
  saveCartItems(saveQuery.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  saveCartItems(saveQuery.innerHTML);
  return li;
};

/* const cartSaveStorage = (param) => {
   const saveLocal = localStorage.getItem('cartItems');
  if (saveLocal) {
    const jsonParse = JSON.parse(saveLocal);
    jsonParse.push(param);
    localStorage.setItem('cartItems', JSON.stringify(jsonParse));
  } else {
    const arrStorage = [param];
    localStorage.setItem('cartItems', JSON.stringify(arrStorage));
  }
}; */

const fetchItemData = async (idItem) => {
  const buttonAcess = document.querySelector('.cart__items');  
  const itens = getSkuFromProductItem(idItem);
  const { id: sku, title: name, price: salePrice } = await fetchItem(itens);
  const objectLocalStorage = { sku, name, salePrice };
  const addItemInCart = createCartItemElement(objectLocalStorage);
  buttonAcess.appendChild(addItemInCart);
  totalProductItems();
  saveCartItems(saveQuery.innerHTML);
};



const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const createButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  createButton.addEventListener('click', () => fetchItemData(section));
  section.appendChild(createButton);

  return section;
};

const fetchProductsData = async () => {
  const data = await fetchProducts('computador');
  const { results } = data;
  results.forEach((element) => {
    const acessItems = document.querySelector('.items');
    const obj = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    const itemsChild = createProductItemElement(obj);
    acessItems.appendChild(itemsChild);
  });
};

const recovery = () => {
 document.querySelector('.cart__items').innerHTML = getSavedCartItems()
 const variavelCart = document.querySelectorAll('.cart__item')
 variavelCart.forEach((element) => element.addEventListener('click', cartItemClickListener))
}



window.onload = () => { 
fetchProductsData();
fetchItemData();
recovery();
}
