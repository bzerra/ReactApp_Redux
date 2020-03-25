import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Router from './routes';
import Header from './components/Header'
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>   
        <Header />
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
