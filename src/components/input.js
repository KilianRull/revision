import React from "react"
import {ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import {Input} from '@material-ui/core';
import theme from '../utils/theme';
import styled from 'styled-components';

const MyInput = styled(Input)`
    color: white;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 32px;

    &.MuiInput-underline:before {
        border-bottom: 1px solid rgba(255, 255, 255, 0.8); 
    }
    &.MuiInput-underline:hover:not(.Mui-disabled):before{
        border-bottom: 1px solid white;
    }
    &.MuiInput-underline:after {
        border-bottom: 2px solid white;
    }
`

const StyledInput = ({ children, ...props }) => {
    return(
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <MyInput {...props}>
                    {children}
                </MyInput>
            </StylesProvider>
        </ThemeProvider>
    )
}

export default StyledInput