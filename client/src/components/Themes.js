import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800]
    },
    secondary: {
      main: purple[700]
    },
    custom: {
      main: pink[400]
    }
  }
});

const Themes = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Themes;
