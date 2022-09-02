import { FC, useRef } from "react";
import { UserCard } from "../../users/components/UserCard";
import { users as usersList } from "../../users/services/users.service";
import { IUser } from "../../users/models/users.model";

export const Home: FC = () => {
  const users: IUser[] = usersList;
  const user = useRef(null);

  return (
    <div className="flex flex-col items-center space-y-6">
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
};
