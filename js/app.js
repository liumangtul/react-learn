import React from 'react';
import ReactDOM from 'react-dom';
import {Parent} from './components/parent.jsx';
import {Provider} from 'react-redux';
import {store} from './store/store';
const root = <Provider store = {store}>
                <Parent/>
            </Provider>;
let rootElement = document.getElementById('app');
ReactDOM.render(
    root,
    rootElement
);