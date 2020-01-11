import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "bootswatch/dist/litera/bootstrap.min.css";
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root'));
