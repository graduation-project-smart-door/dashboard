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
import path from 'path'
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
  outDir: 'dist',
  devOptions: {
    enabled: true,
  },
  workbox: {
    globDirectory: 'build/',
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,ttf}'],
    sourcemap: true,
    swDest: 'build/sw.js',
  },
  includeAssets: ['favicon-16x16.ico', 'apple-icon-180x180.png'],
  manifest: {
    name: 'Админ панель',
    short_name: 'Админка',
    description: 'Админ панель для контроля посещаемости',
    theme_color: '#e2e2e2',
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
})

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv

  return {
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
      cssCodeSplit: true,
      manifest: true,
      sourcemap: true,
      target: 'es2017',
      outDir: 'build',
      rollupOptions: {
        external: ['@vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    server: {
      proxy: {
        '/api/v1': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
        '/cams': {
          target: env.VITE_CAMS_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
