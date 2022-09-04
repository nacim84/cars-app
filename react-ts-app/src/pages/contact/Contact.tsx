import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Contact = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Contact</p>

      <button onClick={() => navigate("/home")}>Navigate to Home</button>
    </div>
  );
};
