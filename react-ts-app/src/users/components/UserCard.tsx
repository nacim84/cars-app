import { FC } from "react";
import { IUser } from "../models/users.model";

export const UserCard: FC<IUser> = ({ username, email, age }) => {
  // Controller

  // Template/Vue
  return (
    <div className="flex flex-col items-start w-3/4 bg-amber-200 rounded-lg px-4 py-2 shadow-lg shadow-amber-200 hover:bg-amber-300 border border-amber-300">
      <p className="text-base font-sans font-semibold">Username : {username}</p>
      <p className="text-base font-sans font-semibold">Email : {email}</p>
      <p className="text-base font-sans font-semibold">Age : {age}</p>
    </div>
  );
};
