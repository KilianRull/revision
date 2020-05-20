import React from "react"
import {ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import theme from '../utils/theme';
import styled from 'styled-components';

const MyButton = styled(Button)`
    padding: 16px 48px;
    height: 64px;
    text-align: left;
    text-transform: none;
    font-size: inherit;
    font-weight: bold;
`

const StyledButton = ({ children, ...props }) => {
    return(
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <MyButton {...props}>
                    {children}
                </MyButton>
            </StylesProvider>
        </ThemeProvider>
    )
}

export default StyledButton