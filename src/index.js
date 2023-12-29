import React  from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ShoppingCartContext from './ShoppingCartContext';
import { UserAuthContextProvider } from './UserAuthContext';
import ReactGA from "react-ga4";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

ReactGA.initialize("G-JG1C6CQ7L6");

root.render(

<BrowserRouter>
  <ShoppingCartContext>
  <UserAuthContextProvider>
       <App />
  </UserAuthContextProvider>
  </ShoppingCartContext>
  </BrowserRouter>

);

const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}
reportWebVitals(SendAnalytics);

