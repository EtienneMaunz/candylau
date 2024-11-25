import { Button, Divider, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { ModalContent, StyledModal, ModalFooter } from "./style";
import { LoadingButton } from "@mui/lab";

interface ModalProps {
  title: string;
  onClose: () => void;
  onValidate: () => void;
  isValidationDisabled: boolean;
  isValidating: boolean;
}

export const AppModal: FC<ModalProps & PropsWithChildren> = ({
  title,
  children,
  onClose,
  onValidate,
  isValidating,
  isValidationDisabled,
}) => (
  <StyledModal>
    <Typography variant="h3">{title}</Typography>
    <Divider sx={{ width: "100%" }} />
    <ModalContent>{children}</ModalContent>
    <Divider sx={{ width: "100%" }} />
    <ModalFooter>
      <Button color="inherit" variant="contained" onClick={onClose}>
        Annuler
      </Button>
      <LoadingButton
        variant="contained"
        loading={isValidating}
        disabled={isValidationDisabled}
        onClick={onValidate}
      >
        Valider
      </LoadingButton>
    </ModalFooter>
  </StyledModal>
);
