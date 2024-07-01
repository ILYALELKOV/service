import React from 'react'
import ReactDOM from 'react-dom/client'
import Service from './Service.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Service />
		</BrowserRouter>
	</React.StrictMode>
)
