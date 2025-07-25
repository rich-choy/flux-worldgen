import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      '@flux': resolve(__dirname, './src/types/domain.ts'),
    }
  }
})
