import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server:{
        hmr:{
            host:"localhost"
        },
        watch:{
            usePolling:true
        },
        proxy: {
            '/api': 'http://localhost:9000',
          },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
          //  '~fa': path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/scss'),
        }
    },
});
