import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Layout } from "./shared/layouts/Layout";

export const CarsApp: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/sign-in" element={<Home />} />
          <Route path="/sign-up" element={<Home />} />
          <Route path="/users/create" element={<Home />} />
          <Route path="/cars/create" element={<Home />} />
          <Route path="/users/:id" element={<Home />} />
        </Routes>
      </Router>
      <Layout />
    </>
  );
};
