import { FC } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/contact/Contact";
import { CreateCar } from "./pages/create-car/CreateCar";
import { CreateUser } from "./pages/create-user/CreateUser";
import { NotFound404 } from "./pages/Error/NotFound404";
import { Home } from "./pages/home/Home";
import { Layout } from "./shared/layouts/Layout";

export const CarsApp: FC = () => {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
};
