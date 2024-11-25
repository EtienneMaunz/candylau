import { FC } from "react";
import { StyledBrunchs } from "./style";
import { Alert } from "@mui/material";

export const Brunchs: FC = () => (
  <StyledBrunchs>
    <Alert severity="info">
      Le click and collect pour les brunchs arrive bientôt !
    </Alert>
  </StyledBrunchs>
);
