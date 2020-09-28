import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//change unregister() to register() below for offline function. 
serviceWorker.unregister();

