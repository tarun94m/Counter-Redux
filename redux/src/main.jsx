import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
// import store from "./components/Store.jsx"
import store from "../store.js"

ReactDOM.createRoot(document.getElementById('root')).render
(
    <React.StrictMode>
        <Provider store = {store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)