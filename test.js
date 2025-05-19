const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test("3 euros deberían ser aproximadamente 3.21 dólares", () => {
  expect(fromEuroToDollar(3)).toBeCloseTo(3 * 1.07); 
});

test("10 dólares deberían ser aproximadamente 1465 yen", () => {
  expect(fromDollarToYen(10)).toBeCloseTo(10 * (156.5 / 1.07)); 
});

test("5 yen deberían ser aproximadamente 0.043 libras", () => {
  expect(fromYenToPound(5)).toBeCloseTo(5 * (1 / 156.5) * 0.87);
});
