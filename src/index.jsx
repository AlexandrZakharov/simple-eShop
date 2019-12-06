import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import data from '../public/data/data'


ReactDOM.render(<App state={data}/>, document.getElementById('root'));
