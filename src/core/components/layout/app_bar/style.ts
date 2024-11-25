import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Logo = styled.img<{ $width?: string; $height?: string }>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

export const PageContent = styled.div`
  min-height: calc(100vh - 80px);
`;
