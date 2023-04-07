module.exports = {
  inputDir: './icons', // (required)
  outputDir: './style', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  fontsUrl: '/style',
  formatOptions: {
    // Pass options directly to `svgicons2svgfont`
    woff: {
      // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
      metadata: '...'
    },
    json: {
      // render the JSON human readable with two spaces indentation (default is none, so minified)
      indent: 2
    },
    ts: {
      // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
      types: ['constant', 'literalId'],
      // render the types with `'` instead of `"` (default is `"`)
      singleQuotes: true,
      // customise names used for the generated types and constants
      enumName: 'MyIconType',
      constantName: 'MY_CODEPOINTS'
      // literalIdName: 'IconId',
      // literalKeyName: 'IconKey'
    }
  },
  // Use a custom Handlebars template
  /*
  templates: {
    css: './my-custom-tp.css.hbs'
  },
  pathOptions: {
    ts: './src/types/icon-types.ts',
    json: './misc/icon-codepoints.json'
  },
  */
  codepoints: {
    // 'xinjs': 57344, // decimal representation of 0xe000
    // 'tall': 57345,
    // 'wide': 57358,
    // 'diamond': 57359
  },
  // Customize generated icon IDs (unavailable with `.json` config file)
  getIconId: ({
    basename, // `string` - Example: 'foo';
    relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
    absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
    relativeFilePath, // `string` - Example: 'foo.svg'
    index // `number` - Example: `0`
  }) => basename // [index, basename].join('_') // '0_foo'
};
