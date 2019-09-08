require('ts-node').register({
  files: true,
  pretty: true,
  'no-cache': true,
  ignore: [
    /node_modules\/(?!get-set-fetch-extension-test-utils)/,
  ],
});
