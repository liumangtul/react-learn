import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {P} from './components/parent.jsx';

const root = <Provider store = {store}>
                <P/>
            </Provider>;
let rootElement = document.getElementById('app');

ReactDOM.render(
    root,
    rootElement
);