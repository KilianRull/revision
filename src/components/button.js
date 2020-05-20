import React from "react"
import {ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import theme from '../utils/theme';
import styled from 'styled-components';
import Icon from "./icon";

const MyButton = styled(Button)`
    padding: 16px 32px;
    text-align: left;
    text-transform: none;
    font-size: inherit;
    font-weight: bold;
`

const MyIcon = styled(Icon)`
    margin-left: 32px;
`

const StyledButton = ({ children, ...props }) => {
    return(
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <MyButton {...props} endIcon={<MyIcon name="arrow-medium" stroke="white" width="48px" height="16px"/>}>
                    {children}
                </MyButton>
            </StylesProvider>
        </ThemeProvider>
    )
}

export default StyledButton