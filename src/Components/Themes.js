import blue from '@material-ui/core/colors/blue';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import RubikWoff from '../assets/fonts/rubik.woff';
import RubikWoff2 from '../assets/fonts/rubik.woff2';
import RubikWoffI from '../assets/fonts/rubik-italic.woff';
import RubikWoff2I from '../assets/fonts/rubik-italic.woff2';

const rubik = {
  fontFamily:  'Rubik',
  fontStyle:   'normal',
  fontDisplay: 'swap',
  fontWeight:  400,
  src:         `
    local('Rubik'),
    local('rubik'),
    url(${RubikWoff}) format('woff'),
    url(${RubikWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const rubikItalic = {
  fontFamily:  'Rubik',
  fontStyle:   'italic',
  fontDisplay: 'swap',
  fontWeight:  400,
  src:         `
    local('Rubik'),
    local('rubik-italic'),
    url(${RubikWoffI}) format('woff'),
    url(${RubikWoff2I}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};


const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [rubik, rubikItalic]
      }
    }
  },
  palette: {
    primary: {
      main: blue[600]
    },
    secondary: {
      main: blue['A700']
    },
    dark: {
      main: '#1D1E22'
    }
  },
  typography: {
    fontWeightLight:   300,
    fontWeightRegular: 400,
    fontWeightMedium:  500,
    fontWeightBold:    700,
    fontFamily:        ['Rubik', 'Helvetica'].join(',')
  }
});

const Themes = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Themes;
