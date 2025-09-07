// Coding Challenge 2b
const itemName = ("USB-C Cable");
const unitCost = 2;
const currentStock = 250;
const reorderLevel = 125;
const targetStock = 300;
const weeklyDemand = 50;
const supplierLeadTimeWeeks = .5;

let weeksOfCover= weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit= Math.max(0, targetStock - currentStock)
let reorderQuantity= (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost= reorderQuantity * unitCost
let reorderNow= currentStock<= reorderLevel || weeksOfCover <supplierLeadTimeWeeks

console.log(itemName)
console.log(Math.max (weeksOfCover))
console.log(reorderNow)
console.log(reorderLevel)
console.log(reorderQuantity.toFixed(2))
console.log("Estimated Cost: $" + estimatedReorderCost.toFixed(2))
