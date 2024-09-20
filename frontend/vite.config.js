import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import history from 'connect-history-api-fallback'

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
			},
			'/logout': {
				target: 'http://localhost:3001',
				changeOrigin: true
			},
			'/rooms': {
				target: 'http://localhost:3001',
				changeOrigin: true
			},
			'/room': {
				target: 'http://localhost:3001',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/room/, '/room')
			},
			'/user': {
				target: 'http://localhost:3001',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/user/, '/user')
			},
			'/get-users-list': {
				target: 'http://localhost:3001',
				changeOrigin: true
			},
			'/delete-user': {
				target: 'http://localhost:3001',
				changeOrigin: true
			}
		},
		historyApiFallback: true
	}
})




