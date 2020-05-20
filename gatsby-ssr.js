/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
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
    }
    body {
        color: ${props => props.theme.palette.primary.main};
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {element}
    </ThemeProvider>
)