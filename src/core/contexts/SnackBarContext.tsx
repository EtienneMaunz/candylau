import { AlertColor } from "@mui/material";
import { FC, PropsWithChildren, createContext, useState } from "react";

interface SnackBarContextProps {
  open: boolean;
  message: string;
  type: AlertColor;
  setOpen: ({
    open,
    message,
    type,
  }: {
    open: boolean;
    message?: string;
    type?: AlertColor;
  }) => void;
}

export const SnackBarContext = createContext<SnackBarContextProps>({
  open: false,
  message: "",
  type: "info",
  setOpen: () => {},
});

export const SnackBarContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<AlertColor>("info");

  const setOpen = ({
    message,
    open,
    type,
  }: {
    open: boolean;
    message?: string;
    type?: AlertColor;
  }) => {
    setMessage(message || "");
    setType(type || "info");
    setIsOpen(open);
  };

  return (
    <SnackBarContext.Provider value={{ open: isOpen, message, setOpen, type }}>
      {children}
    </SnackBarContext.Provider>
  );
};
