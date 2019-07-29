import React, { Fragment } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Blue from "../Themes/Blue";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: GTWalsheim;
    src: url(https://res.cloudinary.com/iunigo/raw/upload/v1556114541/fonts/GT-Walsheim-Regular.otf);
    font-display: swap;
  }

  @font-face {
    font-family: GTWalsheim Bold;
    src: url(https://res.cloudinary.com/iunigo/raw/upload/v1556114540/fonts/GT-Walsheim-Bold.otf);
    font-display: swap;
  }

  body{
    margin:0;
    font-family: 'GTWalsheim', 'sans-serif';
  }
  body,h1,h2,h3,h4,h5,h6{
    font-family: 'GTWalsheim', 'sans-serif';
  }
`;

export default props => {
  const Theme = props.theme !== undefined ? props.theme : Blue;
  return (
    <MuiThemeProvider theme={Theme}>
      <ThemeProvider theme={Theme}>
        <Fragment>
          <GlobalStyles />
          <CssBaseline />
          {props.children}
        </Fragment>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
