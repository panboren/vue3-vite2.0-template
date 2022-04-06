import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/


const basePath ='/page/'
export default defineConfig(()=>{
    let env=import.meta.env
    console.log('111 vite.config',env);
    console.log(import.meta.env);
    return {
        base: basePath || '/',
        plugins: [vue()],
        resolve: {
            extensions: ['.js', '.vue'],
        },
        server:{
            port: 8080
        }
    }
})
