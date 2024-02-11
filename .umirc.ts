import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'yarn',
  presets: [require.resolve('@umijs/preset-vue')],
  polyfill: false,
  deadCode: {},
  crossorigin: {},
  headScripts: [`console.log('head script')`],
});
