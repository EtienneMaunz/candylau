import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { appTheme } from "../../../../themes/appThemes";

export const StyledFooter = styled(Box)`
  align-self: flex-end;
  width: 100%;
  padding: 1rem;
  background-color: ${appTheme.palette.background.default};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledFooterSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
