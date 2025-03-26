import { CssBaseline } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./appTheme";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderContext: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProviderContext"
    );
  }
  return context;
};
