import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from './Store/Store';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
  // </StrictMode >
);
