import React from 'react';
import ReactDOM from 'react-dom/client';

import { reportWebVitals } from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { GestionApp } from './GestionApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StyledEngineProvider injectFirst>
        <GestionApp />
    </StyledEngineProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
