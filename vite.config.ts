import { fileURLToPath, URL } from 'node:url'
import EslintPlugin from 'vite-plugin-eslint'
import StyleLintPlugin from 'vite-plugin-stylelint'
import VitePluginFonts from 'vite-plugin-fonts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { splitVendorChunkPlugin } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path, { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
})

const eslintConfig = EslintPlugin({
  fix: true,
  cache: false,
})

const fontsConfig = VitePluginFonts({
  custom: {
    families: [
      {
        name: 'SourceSansPro',
        local: 'SourceSansPro',
        src: './src/styles/fonts/*.ttf',
      },
    ],
  },
})

const autoImportConfig = AutoImport({
  resolvers: [ElementPlusResolver()],
  imports: ['vitest'],
  dts: true,
})

const componentsConfig = Components({
  resolvers: [ElementPlusResolver()],
})

const svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
})

const pwaPluginConfig = VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    sourcemap: true,
  },
  devOptions: {
    enabled: true,
  },
  includeAssets: ['favicon-16x16.ico', 'apple-icon-180x180.png'],
  manifest: {
    name: 'Админ панель',
    short_name: 'Админка',
    description: 'Админ панель для контроля посещаемости',
    theme_color: '#fff',
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'android-chrome-256x256.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv

  return {
    test: {
      globals: true,
      environment: 'jsdom',
      deps: {
        inline: ['element-plus'],
      },
    },
    plugins: [
      vue(),
      styleLintConfig,
      eslintConfig,
      fontsConfig,
      autoImportConfig,
      componentsConfig,
      svgIconsConfig,
      pwaPluginConfig,
      splitVendorChunkPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/resources" as *; @use "@/styles/vendor" as *;',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      manifest: true,
      dashboard: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'dashboard/main.js'),
        name: 'dashboard',
        // the proper extensions will be added
        fileName: 'dashboard',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
