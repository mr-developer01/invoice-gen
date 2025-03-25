import { BrowserRouter } from "react-router";
import Navigate from "./Navigate";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
  );
};

export default Layout;
