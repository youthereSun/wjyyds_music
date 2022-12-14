import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    envPrefix:'APP_',
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                //定义less全局变量
                globalVars: {
                    mainColor: "#009688",
                    mainGray:'#c7c9c9'
                }
            },
        },
        devSourcemap: true,//开启css sourcemap
    },
    server: {
        host:'0.0.0.0',
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'https://wjyyds-music-api.vercel.app',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
