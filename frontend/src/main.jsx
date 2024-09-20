import React from 'react'
import ReactDOM from 'react-dom/client'
import Service from './Service.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Service />
		</Provider>
	</BrowserRouter>
)
