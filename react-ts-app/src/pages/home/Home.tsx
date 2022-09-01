import React from "react";
import { UserCard } from "../../components/users/components/UserCard";
import { users } from "../../components/users/data/users.data";
import { IUser } from "../../components/users/models/users.models";

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
