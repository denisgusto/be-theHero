import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
