import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/router/Layout";
import { theme } from "./theme";
import { useAppSelector } from "./store/hooks";
import { selectTheme } from "./store/slices/toggleSlice";
import ClientModal from "./ui/ClientModal";

const App = () => {
  const appTheme = useAppSelector(selectTheme)
  return (
    <ThemeProvider theme={theme(appTheme)}>
      <CssBaseline />
      <ClientModal />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
