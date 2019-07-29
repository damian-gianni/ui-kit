import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440
    }
  },
  spacing: 8,
  typography: {
    useNextVariants: true,
    gutterBottom: {
      marginBottom: "1em"
    },
    paragraph: {
      marginBottom: "32px"
    },
    fontFamily: "'GTWalsheim','Helvetica', 'Arial', 'sans-serif'",
    h1: {
      fontSize: "3rem",
      lineHeight: "1.17"
    },
    h2: {
      fontSize: "2.5rem",
      lineHeight: "1.2"
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "1.25"
    },
    h4: {
      fontSize: "1.75rem",
      lineHeight: "1.14"
    },
    h5: {
      fontSize: "1.5rem",
      lineHeight: "1.33"
    },
    h6: {
      fontSize: "1.25rem",
      lineHeight: "1.2"
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: "1.33"
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "1.5"
    },
    overline: {
      fontSize: "0.875rem",
      lineHeight: "1.14",
      textTransform: "initial"
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "1.33"
    },
    gutterBottom: {
      marginBottom: "24px"
    }
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      "50": "",
      "100": "",
      "200": "",
      "300": "",
      "400": "",
      "500": "",
      "600": "",
      "700": "#1b26bc",
      "800": "",
      "900": "#131b8a",
      A100: "",
      A200: "",
      A400: "",
      A700: "",
      contrastText: "#fff",
      dark: "#131b8a",
      light: "",
      main: "#1b26bc"
    },
    secondary: {
      "50": "",
      "100": "",
      "200": "",
      "300": "",
      "400": "",
      "500": "",
      "600": "",
      "700": "#ff7e82",
      "800": "",
      "900": "#c96467",
      A100: "",
      A200: "",
      A400: "",
      A700: "",
      contrastText: "#fff",
      dark: "#c96467",
      light: "#e040fb",
      main: "#ff7e82"
    },
    gray: {
      /* Gray Scale*/
      "100": "#fff",
      "200": "#F8F8F8",
      "300": "#F3F3F4",
      "400": "#E6E6E8",
      "500": "#CDCDD2",
      "600": "#9B9BA5",
      "700": "#686977",
      "800": "#363749",
      "900": "#03051B",
      contrastText: "#fff",
      dark: "#131b8a",
      light: "",
      main: "#1b26bc"
    },
    background: {
      paper: "#fff",
      default: "#fff"
    }
  },
  shadows: [
    /* base gray shadows */
    "none",
    "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
    "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  customShadows: [
    "0 4px 4px 0 rgba(27, 38, 188, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08)",
    "0 2px 4px 0 rgba(71, 71, 71, 0.1)"
  ]
});

export default theme;
