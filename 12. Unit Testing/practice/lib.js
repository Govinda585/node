// Testing number

exports.absolute = (number) => {
  return number >= 0 ? number : -number;
};

exports.greet = (name) => {
  return "Welcome " + name + "!";
};

exports.currencies = () => {
  return ["USD", "EUR", "ASD"];
};

exports.getProduct = (productId) => {
  return { id: productId, price: 10 };
};
