import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


