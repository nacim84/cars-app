import React from "react";
import { UserCard } from "../../components/users/components/UserCard";

export const Home = () => {
  return (
    <div>
      <UserCard username="Nacim" email="nacim@gmail.com" age={38} />
    </div>
  );
};
