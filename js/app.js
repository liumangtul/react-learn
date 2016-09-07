import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Par} from './components/parent.jsx';
const root = <Provider store = {store}>
                <Par/>
            </Provider>;
let rootElement = document.getElementById('app');

ReactDOM.render(
    root,
    rootElement
);