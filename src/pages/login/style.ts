import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledLogin = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  gap: 1rem;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
`;
