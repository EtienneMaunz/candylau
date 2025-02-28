import { createTheme, ThemeOptions } from "@mui/material/styles";
import "@fontsource/dancing-script";

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
      fontFamily: "Dancing Script",
    },
    h2: {
      fontFamily: "Dancing Script",
    },
    h3: {
      fontFamily: "Dancing Script",
    },
    h4: {
      fontFamily: "Dancing Script",
    },
    h5: {
      fontFamily: "Dancing Script",
    },
    h6: {
      fontFamily: "Dancing Script",
    },
    body1: {
      fontFamily: "Roboto",
    },
    body2: {
      fontFamily: "Roboto",
    },
    subtitle1: {
      fontFamily: "Dancing Script",
    },
    subtitle2: {
      fontFamily: "Dancing Script",
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
