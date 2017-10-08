module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.woff',
    'dist/**.woff2',
    'dist/**.ttf',
    'dist/manifest.json',
    'dist/assets/img/*',
    'dist/assets/img/logo/*',
    'dist/assets/img/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/scafeinder.herokuapp.com\/.*/,
      handler: 'networkFirst'
    }, {
      urlPattern: /^http:\/\/localhost:3000\/cafes/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxEntries: 100,
          name: 'data-cache'
        }
      }
    }, {
      urlPattern: /\/cafe\/*/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 100,
          name: 'data-cache'
        }
      }
    }
  ]
};
