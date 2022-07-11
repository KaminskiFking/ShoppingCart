const fetchProducts = async (param) => {
  // seu código aqui

  if (param === undefined) {
    throw new Error('You must provide an url');
  }

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
