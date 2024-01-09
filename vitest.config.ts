/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./test/*.spec.ts'],
    reporters: ['verbose'],
    testTimeout: 60 * 10000,
    hookTimeout: 60 * 10000
  },
})