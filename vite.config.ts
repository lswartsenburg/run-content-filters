import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylex from '@stylexjs/postcss-plugin';
import babel from 'vite-plugin-babel';
import autoprefixer from 'autoprefixer';

const babelConfig = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: process.env.NODE_ENV === 'development',
        test: process.env.NODE_ENV === 'test',
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: 'commonJS',
        },
      },
    ],
  ],
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),    babel({
      babelConfig,
      filter: /\.[jt]sx?$/u,
      loader: 'jsx',
    }),],
  css: {
    postcss: {
      plugins: [
        stylex({
          babelConfig,
          include: [
            'packages/content-review-components/**/*.{ts,tsx}',
            // TODO T230574677 We don't want to include this in the build, this is applying stylex to the examples. Can't figure out how
            // to exclude this from the build but still have it work in the examples.
            'src/**/*.{ts,tsx}',
          ],
          useCSSLayers: true,
        }),
        autoprefixer(),
      ],
    },
  },
})
