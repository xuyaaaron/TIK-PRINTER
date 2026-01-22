import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 关键：这里的名字必须和你的仓库名 TIK-PRINTER 完全一致
  base: '/TIK-PRINTER/', 
  plugins: [react()],
})