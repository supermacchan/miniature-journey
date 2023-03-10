import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from './components/App';
// import { Loader } from 'components/Loader/Loader';
import { store } from 'redux/store';
// persistor
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
        <BrowserRouter basename='/miniature-journey'>
          <App />
        </BrowserRouter> 
      {/* </PersistGate> */}
    </Provider>  
  </React.StrictMode>
);

