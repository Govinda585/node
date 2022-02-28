const { absolute, greet, currencies, getProduct } = require("./lib");

describe("absolute", () => {
  it("should return positive number if input is positive", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it("should return positive number if input is negative", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });

  it("should return zero if input is zero", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
});
describe("greet", () => {
  it("it should return greeting message", () => {
    const result = greet("Govinda");
    expect(result).toMatch(/Govinda/);
  });
});

describe("currencies", () => {
  it("should return supported currencies", () => {
    const result = currencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "EUR", "ASD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id");
  const result = getProduct(1);
  expect(result).toMatchObject({ id: 1, price: 10 });
});
