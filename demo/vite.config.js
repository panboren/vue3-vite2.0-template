import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const publicPath ='/space/'
export default defineConfig({
  publicPath: publicPath,
  plugins: [vue()]
})
