import React from "react"
import styled from "styled-components"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {StylesProvider} from '@material-ui/core/styles';
import scrollTo from 'gatsby-plugin-smoothscroll';

const StyledBottomNavigation = styled(BottomNavigation)`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    height: 80px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(180%) blur(5px);
    padding: 0 16px;
    padding-bottom: env(safe-area-inset-bottom);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset;

    @media (min-width: 900px) {
        display: none;
    }
    & .MuiBottomNavigationAction-label {
        font-size: 16px;
        font-family: 'Suisse Intl', sans-serif;
        color: ${props => props.theme.palette.primary.main};
    }
    & .MuiBottomNavigationAction-root {
        padding: 12px;
    }
`


export default function MobileNavigation() {  
    return (
        <StylesProvider injectFirst>
            <StyledBottomNavigation>
                <BottomNavigationAction label="Why" showLabel onClick={() => scrollTo('#why')}/>
                <BottomNavigationAction label="How" showLabel onClick={() => scrollTo('#how')}/>
                <BottomNavigationAction label="What" showLabel onClick={() => scrollTo('#what')}/>
                <BottomNavigationAction label="Who" showLabel onClick={() => scrollTo('#who')}/>
            </StyledBottomNavigation>
      </StylesProvider>
    );
  }