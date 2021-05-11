import React, { createElement, Component, createContext } from 'react';
import createStoreFactory from 'redoor';

import * as actionsWS from './actionsWS'
import * as actionsTimer from './Timer/actionsTimer'
import * as actionsStats from './Stats/actionsStats'

const createStore = createStoreFactory({Component, createContext, createElement});

const { Provider, Connect } = createStore(
  [
    actionsWS,
    actionsTimer,
    actionsStats
  ]
);

export { Provider, Connect };