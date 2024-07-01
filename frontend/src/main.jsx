import React from 'react'
import ReactDOM from 'react-dom/client'
import Service from './Service.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Service />
		</BrowserRouter>
	</React.StrictMode>
)
