import { BrowserRouter } from "react-router";
import Navigate from "./routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
  );
};

export default Layout;
