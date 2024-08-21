import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/register': {
				target: 'http://localhost:3001',
				changeOrigin: true
			},
			'/login': {
				target: 'http://localhost:3001',
				changeOrigin: true
			}
		}
	}
})
