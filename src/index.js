import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Actions from './actions';

console.log(Actions.COUNTER_INCREMENT);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
