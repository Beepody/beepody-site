import { defineConfig } from 'wmr'

// Full list of options: https://wmr.dev/docs/configuration

export default defineConfig({
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat',
  },
})
