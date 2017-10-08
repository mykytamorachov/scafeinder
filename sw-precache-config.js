module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/manifest.json',
    'dist/assets/img/*'
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
      urlPattern: /^http:\/\/localhost:3000\/login/,
      handler: 'networkFirst'
    }, {
      urlPattern: /^http:\/\/localhost:3000\/register/,
      handler: 'networkFirst'
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
