import React from "react";
import { UserCard } from "../../users/components/UserCard";
import { users } from "../../users/data/users.data";
import { IUser } from "../../users/models/users.model";

export const Home = () => {
  const usersJson: IUser[] = users;
  return (
    <div className="flex flex-col items-center space-y-6">
      {usersJson.map((userJson) => {
        return <UserCard user={userJson} />;
      })}
    </div>
  );
};
