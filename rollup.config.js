import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife'
    },
    plugins: [
      resolve({
        // pass custom options to the resolve plugin
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
    ]
  },
  {
    input: 'src/headless.js',
    output: {
      file: 'dist/headless.js',
      format: 'cjs'
    }
  }
]
