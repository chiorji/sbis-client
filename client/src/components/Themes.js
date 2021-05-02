import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#22B1A4'
    },
    secondary: {
      main: '#F88664'
    },
    dark: {
      main: '#1D1E22'
    }
  },
  typography: {
    fontFamily:        'Poppins',
    fontWeightLight:   300,
    fontWeightRegular: 400,
    fontWeightMedium:  500,
    fontWeightBold:    700
  }
});

const Themes = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Themes;
