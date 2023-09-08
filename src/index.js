import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "./anim.scss"
import Routed from './Components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Routed />
    </React.StrictMode>
);


