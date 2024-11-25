import { Alert, Box } from "@mui/material";
import { FC } from "react";

export const NotFound: FC = () => (
  <Box sx={{ display: "flex", padding: "0.5rem" }}>
    <Alert severity="warning">
      Oups, on dirait que cette page n'existe pas !
    </Alert>
  </Box>
);
