import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
};

export default defineConfig((comand, mode) => {
  const config = {
    server: {
      host: '0.0.0.0',
      port: 80
    },
    plugins: [vue(), vueJsx()],

    // 添加库模式配置
    build: {
      rollupOptions,
      minify: false,
      lib: {
        entry: './src/entry.ts',
        name: 'SundayUI',
        fileName: 'sunday-ui',
        // 导出模块格式
        formats: ['esm', 'umd', 'iife']
      }
    }
  };
  return config;
});
