import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'
// tost for alert msg
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './features/UserProvider';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <UserProvider>
      <App />
    </UserProvider>
    <ToastContainer />
  </Provider>,
)
