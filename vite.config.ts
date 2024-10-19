import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/

//@ts-ignore
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')

  return   {
    plugins: [react(), tsconfigPaths()],
    build: {
      outDir: 'build',
      target: 'esnext',
      chunkSizeWarningLimit: 100,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo: any) => {
            let extType = assetInfo.name.split('.').at(1)
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img'
            }
            return `assets/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
    },
    server: {
      hmr: {
        overlay: false,
      },
      port: env.PORT || 5173,
    },
    base: '/',
  }
})
