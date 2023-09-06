import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  build: {
    lib: {
      entry: './web/main.ts'
    }
  },
  plugins: [
    wasm(),
    topLevelAwait()
  ]
})
