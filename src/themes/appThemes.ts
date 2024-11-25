import { createTheme, ThemeOptions } from "@mui/material/styles";
import "@fontsource/satisfy";

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#ef2c93",
    },
    secondary: {
      main: "#432e8e",
    },
  },
  typography: {
    h1: {
      fontFamily: "Satisfy",
    },
    h2: {
      fontFamily: "Satisfy",
    },
    h3: {
      fontFamily: "Satisfy",
    },
    h4: {
      fontFamily: "Satisfy",
    },
    h5: {
      fontFamily: "Satisfy",
    },
    h6: {
      fontFamily: "Satisfy",
    },
    body1: {
      fontFamily: "Roboto",
    },
    body2: {
      fontFamily: "Roboto",
    },
    subtitle1: {
      fontFamily: "Satisfy",
    },
    subtitle2: {
      fontFamily: "Satisfy",
    },
  },
};

// const darkTheme: ThemeOptions = {
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#ef2c93",
//     },
//     secondary: {
//       main: "#432e8e",
//     },
//   },
//   typography: {
//     h1: {
//       fontFamily: "Satisfy",
//     },
//     h2: {
//       fontFamily: "Satisfy",
//     },
//     h3: {
//       fontFamily: "Satisfy",
//     },
//     h4: {
//       fontFamily: "Satisfy",
//     },
//     h5: {
//       fontFamily: "Satisfy",
//     },
//     h6: {
//       fontFamily: "Satisfy",
//     },
//     body1: {
//       fontFamily: "Roboto",
//     },
//     body2: {
//       fontFamily: "Roboto",
//     },
//     subtitle1: {
//       fontFamily: "Satisfy",
//     },
//     subtitle2: {
//       fontFamily: "Satisfy",
//     },
//   },
// };

export const appTheme = createTheme(lightTheme);
