import React from "react";
import Layout from "./features/common/components/Layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */

`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
