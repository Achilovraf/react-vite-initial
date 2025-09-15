import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), svgr()],
	esbuild: {
		loader: 'jsx',
		include: /src\/.*\.js$/,
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
});
