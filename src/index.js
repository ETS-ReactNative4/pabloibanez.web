import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();


