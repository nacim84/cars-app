import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "../../../pages/contact/Contact";
import { CreateCar } from "../../../pages/create-car/CreateCar";
import { CreateUser } from "../../../pages/create-user/CreateUser";
import { NotFound404 } from "../../../pages/Error/NotFound404";
import { Home } from "../../../pages/home/Home";
import { UpdateCar } from "../../../pages/update-cars/UpdateCar";

export const RouterOutlet: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    {/* <Route path="/log-in" element={<SingIn />} /> */}
    {/* <Route path="/log-out" element={<Home />} /> */}
    {/* <Route path="/sign-up" element={<Home />} /> */}
    <Route path="/users/create" element={<CreateUser />} />
    <Route path="/cars/create" element={<CreateCar />} />
    <Route path="/cars/update" element={<UpdateCar />} />
    {/* <Route path="/users/:id" element={<Home />} /> */}
    <Route path="*" element={<NotFound404 />} />
  </Routes>
);
