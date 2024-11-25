import { FC } from "react";
import { StyledApp } from "./styles";
import AppBar from "./core/components/layout/app_bar/AppBar";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/appThemes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackBarContextProvider } from "./core/contexts/SnackBarContext";
import { AuthContextProvider } from "./core/contexts/AuthContext";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeProvider theme={appTheme}>
          <SnackBarContextProvider>
            <StyledApp>
              <AppBar />
            </StyledApp>
          </SnackBarContextProvider>
        </ThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
