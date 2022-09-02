import { FC } from "react";
import { UserCardProps } from "../models/users.model";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  // Controller

  // Template/Vue
  return (
    <a className="flex flex-row justify-between items-center w-3/4 bg-amber-200 rounded-lg px-4 py-2 shadow-lg shadow-amber-200 hover:bg-amber-300 border border-amber-300">
      <div>
        <p className="text-base font-sans font-semibold">Id : {user.id}</p>
        <p className="text-base font-sans font-semibold">
          Username : {user.username}
        </p>
        <p className="text-base font-sans font-semibold">
          Email : {user.email}
        </p>
        <p className="text-base font-sans font-semibold">Age : {user.age}</p>
        <p className="text-base font-sans font-semibold">
          Number of Cars : {user.cars.length}
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <img
          className="w-32 h-32 rounded-full my-2"
          src={user.imgPath}
          alt=""
        />
      </div>
    </a>
  );
};
