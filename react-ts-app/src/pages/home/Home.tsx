import { FC } from "react";
import { UserCard } from "../../users/components/UserCard";
import { users as usersList } from "../../users/services/users.service";
import { IUser } from "../../users/models/users.model";
import { interval } from "rxjs/internal/observable/interval";

export const Home: FC = () => {
  const users: IUser[] = usersList;

  // const observable$ = interval(1000);

  // observable$.subscribe((x) => console.log(x));

  return (
    <div className="flex flex-col items-center space-y-6">
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
};
