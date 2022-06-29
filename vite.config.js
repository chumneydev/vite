// Customisation: vite.config.js

import { defineConfig } from 'vite'

export default defineConfig({
    base: "",
    build: {
    
        //outDir: './dist',
        rollupOptions: {
            output: {
                entryFileNames: "assets/js/[name].js",
                chunkFileNames: "assets/[ext]/[name].js",
                assetFileNames: "assets/[ext]/[name].[ext]",
            }
        }
    }
})