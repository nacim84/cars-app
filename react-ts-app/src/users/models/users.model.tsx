import { PropsWithChildren } from "react";
import { ICar } from "../../cars/models/cars.model";

export interface IUser {
  id: number;
  username: string;
  email: string;
  age: number;
  imgPath: string;
  cars: ICar[];
}

export type UserCardProps = {
  user: IUser;
};
