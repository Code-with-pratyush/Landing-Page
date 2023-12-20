import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import Apple from './Apple';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-ghf3la5pnbvywyiy.us.auth0.com"
    clientId="vhihfDdCoMF7ykHOkDHou5Ain8vpI9RK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <Apple />
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
