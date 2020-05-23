/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import {createGlobalStyle, ThemeProvider} from "styled-components"
import theme from "./src/utils/theme"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
    body {
        color: ${props => props.theme.palette.primary.main};
    }
    a {
        color: ${props => props.theme.palette.primary.main};
    }

    @media (min-width: 900px) {
    html {
    font-size: 125%; /* --> 20px base size */
  }
}
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {element}
    </ThemeProvider>
)