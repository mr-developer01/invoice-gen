import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/router/Layout";
import { theme } from "./theme";
import { useAppSelector } from "./store/hooks";
import { selectTheme } from "./store/slices/toggleSlice";
import ClientModal from "./ui/ClientModal";
import { BrowserRouter } from "react-router";
import CreateClientForm from "./components/forms/CreateClientForm";

const App = () => {
  const appTheme = useAppSelector(selectTheme);
  return (
    <ThemeProvider theme={theme(appTheme)}>
      <BrowserRouter>
        <CssBaseline />
        <ClientModal>
          <CreateClientForm />
        </ClientModal>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
