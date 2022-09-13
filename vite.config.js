// Customisation: vite.config.js

import { defineConfig } from 'vite'

export default defineConfig({
    base: "",
    build: {
    
        //outDir: './dist',
        rollupOptions: {
            input: {
                // index: './index.html',
                app: './index.html',
                dev: './src/js/dev.js',
            },
            output: {
                entryFileNames: "js/[name].js",
                chunkFileNames: "[name].js",
                // assetFileNames: "[ext]/[name].[ext]",
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'images';
                    }
                    if (assetInfo.name === 'index.css') {
                        return assetInfo.name = `${extType}/app.css`;
                    }

                    return `${extType}/[name][extname]`;
                },
            }
        }
    }
})




// Customisation: vite.config.js
// const path = require('path')
// import { defineConfig } from 'vite'

// export default defineConfig({
//     base: "",
//     build: {
//         // target: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
//         lib: {
//             entry: path.resolve(__dirname, 'src/js/app.js'),
//             name: 'app',
//             fileName: (format) => `app.min.js`,
//         },
//         rollupOptions: {
//             output: {
//                 assetFileNames: (assetInfo) => {
//                     if (assetInfo.name === 'style.css') return 'app.min.css';
//                     return assetInfo.name;
//                 },                
//             }
//         }

    

//     }
// })