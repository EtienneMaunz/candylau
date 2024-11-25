import styled from "@emotion/styled";

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFilesForm = styled.div`
  padding: 1rem;
  display: flex;
  max-width: 1200px;
  margin: auto;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GallerySkeleton = styled.div`
  display: flex;
  padding: 4px;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
