"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemTypes_1 = require("./itemTypes");
const items_1 = require("./items");
function itemDetails(item) {
    console.log(`Item: ${item.name}`);
    console.log(` Type: ${item.type}`);
    console.log(` Value: ${item.value}`);
}
function compareItems(item1, item2) {
    if (item1.value > item2.value) {
        return `${item1.name} is more valuable than ${item2.name}.`;
    }
    else if (item1.value < item2.value) {
        return `${item2.name} is more valuable than ${item1.name}.`;
    }
    else {
        return `${item1.name} and ${item2.name} have the same value.`;
    }
}
console.log("Details");
itemDetails(items_1.Sword);
itemDetails(items_1.Staff);
console.log("Comparison");
console.log(compareItems(items_1.Armor, items_1.Robe));
console.log(compareItems(items_1.Sword, items_1.Staff));
console.log(compareItems(items_1.Salve, items_1.Concoction));
const inventory = [items_1.Sword, items_1.Armor, items_1.Salve, items_1.Staff, items_1.Robe, items_1.Concoction];
function sortAscending(items) {
    return [...items].sort((a, b) => a.value - b.value);
}
function sortDescending(items) {
    return [...items].sort((a, b) => b.value - a.value);
}
// Testing
console.log("\nAscending Sort");
const ascInventory = sortAscending(inventory);
ascInventory.forEach((item) => console.log(`${item.name}: ${item.value} gold`));
console.log("\nDescending Sort");
const descInventory = sortDescending(inventory);
descInventory.forEach((item) => console.log(`${item.name}: ${item.value} gold`));
//# sourceMappingURL=main.js.map