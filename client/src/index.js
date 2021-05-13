import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';
import Themes from './components/Themes';
import  ScrollToTop from './components/ScrollToTop';
import 'fontsource-roboto';
import './index.css';
import configureStore, {history} from './store';

const store = configureStore();
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <Themes>
        <ConnectedRouter history={history}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ScrollToTop />
            <App />
          </MuiPickersUtilsProvider>
        </ConnectedRouter>
      </Themes>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
