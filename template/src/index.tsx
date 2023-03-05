import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ErrorBoundary } from './components';
import { DsProvider } from './designSystem';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <DsProvider>
        <App />
      </DsProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
