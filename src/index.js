import React  from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ShoppingCartContext from './ShoppingCartContext';
import { UserAuthContextProvider } from './UserAuthContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(

<BrowserRouter>
  <ShoppingCartContext>
  <UserAuthContextProvider>
       <App />
  </UserAuthContextProvider>
  </ShoppingCartContext>
  </BrowserRouter>

);

