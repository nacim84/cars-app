import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>UserDetails</h1>
      <p>Id User is : {id}</p>
    </div>
  );
};
