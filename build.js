// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/script.js'],
  bundle: true,
  outfile: './dist/bundle.js',
  minify: true,
  sourcemap: true,
}).catch(() => process.exit(1));
