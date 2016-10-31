import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    const root = document.getElementById('root');

    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    window.store = store;
    window.requestBenches = requestBenches;
    ReactDOM.render(<Root store={store} />, root);
});
