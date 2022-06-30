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
                // assetFileNames: "assets/[ext]/[name].[ext]",
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'images';
                    }
                    return `assets/${extType}/[name][extname]`;
                },
            }
        }
    }
})