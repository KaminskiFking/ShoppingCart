const fetchItem = async (param) => {
  // seu código aqui
  if (!param) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${param}`;
  const result = await fetch(url);
  const data = await result.json();

  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
