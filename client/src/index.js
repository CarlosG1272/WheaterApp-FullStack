import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"; 
import { store } from "./redux/store"
import { Provider } from 'react-redux';
import axios from "axios"; 

axios.defaults.baseURL = process.env.REACT_APP_BACK_URL || "http://localhost:3001/wheater"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
