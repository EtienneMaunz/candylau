import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledModal = styled(Box)`
  position: absolute;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  border-radius: 8px;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContent = styled(Box)`
  width: 100%;
  overflow: auto;
  margin-top: 0.5rem;
`;

export const ModalFooter = styled(Box)`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;
