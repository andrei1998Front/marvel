import React from 'react';
import ReactDOM  from 'react-dom/client';

import App from './components/app/app.js';

import MarvelService from './services/marvelService.js';

import './style/style.scss'

const marvelService = new MarvelService();

marvelService.getAllCharacters(1011052).then(res => res.data.results.forEach(el => console.log(el.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);