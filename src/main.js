import React, { createElement, Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import {Connect, Provider} from './store'
import Timer from './Timer/Timer'
import Stats from './Stats/Stats'

const Main = () => (
  <Provider>
    <h1>ws stats</h1>
    <Timer/>
    <br/>
    <Stats/>
  </Provider>
);
const root = document.body.appendChild(document.createElement("DIV"));
ReactDOM.render(<Main />, root);

