import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Routes from "./Routes";
import theme from "./Styles/theme";
import "./Styles/common.scss";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Nanum Gothic", sans-serif;
  line-height: 1;
}
input {
  background: transparent;
  border: 0;
  outline: 0;
}
button {
  background: 0;
  padding: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
}
ul,
li {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
