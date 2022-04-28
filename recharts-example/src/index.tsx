import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import AppConnect from './redux/container';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/github';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store={store}>
    <AppConnect />
    </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

