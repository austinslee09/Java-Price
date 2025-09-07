// Coding Challenge 2a
let productName= "potato";
const costPerUnit = 12.5;
const basePrice = 19.99;
const discountRate = .25;
const salesTaxRate = .07;
const rent = 1200;
const utilities = 250;
const platform = 100;
let fixMonthlyCosts=rent+utilities+platform;

let discountPrice= basePrice*(1-discountRate);
let finalPriceWithTax= discountPrice*(1+salesTaxRate);
let profitPerUnit=(finalPriceWithTax-costPerUnit);
let breakEvenUnits= Math.ceil(fixMonthlyCosts/profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log(productName);
console.log(discountRate)
console.log(finalPriceWithTax)
console.log(profitPerUnit)
console.log(breakEvenUnits)
console.log(isProfitablePerUnit)
