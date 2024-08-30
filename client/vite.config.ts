/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    define: { global: 'globalThis' },
    server: {
        port: 3005,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    test: {
        globals: true,
    },
    plugins: [react()],
});
