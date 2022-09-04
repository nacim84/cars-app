import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "../../../pages/contact/Contact";
import { CreateCar } from "../../../pages/create-car/CreateCar";
import { CreateUser } from "../../../pages/create-user/CreateUser";
import { NotFound404 } from "../../../pages/Error/NotFound404";
import { Home } from "../../../pages/home/Home";
import { RouterOutlet } from "./RouterOutlet";

export const MainArea: FC = () => {
  return (
    <div className="mt-32 mb-20">
      <RouterOutlet />
    </div>
  );
};
