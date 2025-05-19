let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

const dollarToYenRate = oneEuroIs.JPY / oneEuroIs.USD;
const yenToPoundRate = oneEuroIs.GBP / oneEuroIs.JPY;

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

const fromDollarToYen = function(valueInDollar) {
    return valueInDollar * dollarToYenRate;
};

const fromYenToPound = function(valueInYen) {
    return valueInYen * yenToPoundRate;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
