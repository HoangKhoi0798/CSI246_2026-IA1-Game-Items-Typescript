import { Item } from "./itemTypes";
import { Sword, Armor, Salve, Staff, Robe, Concoction } from "./items";

function itemDetails(item: Item): void {
  console.log(`Item: ${item.name}`);
  console.log(` Type: ${item.type}`);
  console.log(` Value: ${item.value}`);
}

function compareItems(item1: Item, item2: Item): string {
  if (item1.value > item2.value) {
    return `${item1.name} is more valuable than ${item2.name}.`;
  } else if (item1.value < item2.value) {
    return `${item2.name} is more valuable than ${item1.name}.`;
  } else {
    return `${item1.name} and ${item2.name} have the same value.`;
  }
}

console.log("Details");
itemDetails(Sword);
itemDetails(Staff);

console.log("Comparison");
console.log(compareItems(Armor, Robe));
console.log(compareItems(Sword, Staff));
console.log(compareItems(Salve, Concoction));

const inventory: Item[] = [Sword, Armor, Salve, Staff, Robe, Concoction];

function sortAscending(items: Item[]): Item[] {
  return [...items].sort((a, b) => a.value - b.value);
}

function sortDescending(items: Item[]): Item[] {
  return [...items].sort((a, b) => b.value - a.value);
}

// Testing
console.log("\nAscending Sort");
const ascInventory = sortAscending(inventory);
ascInventory.forEach((item) => console.log(`${item.name}: ${item.value} gold`));

console.log("\nDescending Sort");
const descInventory = sortDescending(inventory);
descInventory.forEach((item) =>
  console.log(`${item.name}: ${item.value} gold`),
);
