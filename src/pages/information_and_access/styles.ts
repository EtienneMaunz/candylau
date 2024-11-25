import styled from "@emotion/styled";
import { Grid2 } from "@mui/material";

export const StyledInformationAndAccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const SectionTitle = styled.div`
  display: flex;
  gap: 1rem;
  border: solid 1px;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  border-radius: 4px;
`;

export const OpeningHours = styled(Grid2)`
  width: 100%;
  align-items: center;
`;
