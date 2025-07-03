import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//import Redux stuff
import { Provider } from 'react-redux';
import store from './app/store';

//User Context
import { UserContext } from './UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContext.Provider>
        <App />
      </UserContext.Provider>
    </Provider>
  </React.StrictMode>
);