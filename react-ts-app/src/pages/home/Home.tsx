import React from "react";
import { UserCard } from "../../users/components/UserCard";
import { users as usersList } from "../../users/services/users.service";
import { IUser } from "../../users/models/users.model";

export const Home = () => {
  const users: IUser[] = usersList;

  return (
    <div className="flex flex-col items-center space-y-6">
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
};
