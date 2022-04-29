import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/github';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
