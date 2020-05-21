import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1a1a1a',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      //light: '#0066ff',
      main: '#ffffff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#1a1a1a',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      main: '#F6F4FB',
    }
  },
  typography: {
    fontFamily: [
      'Suisse Intl',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
    fontSize: 20,
});

export default theme