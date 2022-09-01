import { FC } from "react";
import { IUser } from "../models/users.models";

export const UserCard: FC<IUser> = ({ username, email, age }) => {
  return (
    <div className="flex flex-col items-center">
      <p>{username}</p>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  );
};
