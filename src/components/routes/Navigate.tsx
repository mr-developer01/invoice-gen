import { Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import Invoices from "../pages/Invoices";

const Navigate = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  );
};

export default Navigate;
