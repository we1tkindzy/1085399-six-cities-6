import React from 'react';
import REactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import offers from "./mocks/offers";
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

REactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
