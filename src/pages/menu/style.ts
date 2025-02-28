import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Section = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.div`
  display: flex;
  border: solid 1px;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  border-radius: 4px;
  text-align: left;
`;

export const MenuItem = styled(Box)`
  width: 100%;
  padding: 1rem;
`;
