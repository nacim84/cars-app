import { FC } from "react";
import { Layout } from "./shared/layouts/Layout";

export const CarsApp: FC = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/sign-in" element={<Home />} />
        <Route path="/sign-up" element={<Home />} />
        <Route path="/users/create" element={<Home />} />
        <Route path="/cars/create" element={<Home />} />
        <Route path="/users/:id" element={<Home />} />
      </Routes> */}
      <Layout />
    </div>
  );
};
