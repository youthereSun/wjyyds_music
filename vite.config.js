import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                //定义less全局变量
                globalVars: {
                    mainColor: "red",
                }
            },
        },
        devSourcemap: true,//开启css sourcemap
    },
    server: {
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
