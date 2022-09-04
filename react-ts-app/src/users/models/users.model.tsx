export interface IUser {
  id: number;
  username: string;
  email: string;
  age: number;
  imgPath: string;
  idCars: number[];
}

export type UserCardProps = {
  user: IUser;
};
