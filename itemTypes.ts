export enum ItemType {
  Weapon = "WEAPON",
  Armor = "ARMOR",
  Potion = "POTION",
}

export interface Item {
  name: string;
  type: ItemType;
  value: number;
}
