import { FC } from "react";
import Footer from "./footer/Footer";
import MainArea from "./main-area/MainArea";
import { Navbar } from "./navbar/Navbar";

export const Layout: FC = () => {
  return (
    <div>
      <Navbar />
      <MainArea />
      <Footer />
    </div>
  );
};
