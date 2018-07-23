import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

console.log(store);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            {/* <App value={store.getState()}/> */}
           <div>
               <App/>
            </div>
        </Provider>,
        document.getElementById('root')
    )
}
store.subscribe(render);
render();
// import { COUNTER_INCREMENT } from './actions';
// store.dispatch({type: COUNTER_INCREMENT, value: 1});

registerServiceWorker();
