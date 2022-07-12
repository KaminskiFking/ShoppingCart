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
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const fetchItemData = async (idItem) => {
  const buttonAcess = document.querySelector('.cart__items');
  const itens = getSkuFromProductItem(idItem);
  const { id: sku, title: name, price: salePrice } = await fetchItem(itens);
  const addItemInCart = createCartItemElement({ sku, name, salePrice });
  buttonAcess.appendChild(addItemInCart);
};

fetchItemData();

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

fetchProductsData();

window.onload = () => { };
