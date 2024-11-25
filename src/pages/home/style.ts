import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const WallContainer = styled(Box)<{ $backgroundImage: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);

  ${(props) => `background-image: url("${props.$backgroundImage}")`};
`;

export const TypographiesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const InformationContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Information = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FixedHeightImageContainer = styled(Box)<{
  $backgroundImage: string;
}>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${(props) => `background-image: url("${props.$backgroundImage}")`};
`;

export const StyledInformationDisplay = styled(Box)`
  display: flex;
  wrap: wrap;
`;

export const StyledBoxInformation = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  * {
    border-radius: 8px;
  }
`;
