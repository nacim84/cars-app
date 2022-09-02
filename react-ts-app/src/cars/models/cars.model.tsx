export interface ICar {
  id: number;
  model: string;
  constructor: ConstructorEnum;
  year: number;
  color: Color;
  imgPath: string;
}

export enum ConstructorEnum {
  Ford = "Ford",
  Reneault = "Reneault",
  Peugeot = "Peugeot",
  Toyota = "Toyota",
  Seat = "Seat",
}

type Color = "Red" | "Green" | "White" | "Blue" | "Black";
