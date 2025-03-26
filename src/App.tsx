import Layout from "./components/router/Layout";
import { ThemeProviderContext } from "./components/theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProviderContext>
      <Layout />
    </ThemeProviderContext>
  );
};

export default App;
