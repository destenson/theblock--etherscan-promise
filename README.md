# etherscan-promise

A thin, lightweight promise wrapper for the api.etherscan.io/apis service, exposing a common endpoint for use elsewhere

## polyfill dependencies

The environment needs to support ES6 Promises and the fetch api. To polyfill support in all browsers/environments, these are recommended -

- [es6-promise](https://www.npmjs.com/package/es6-promise) (or any other Promise polyfill)
- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) (or any other fetch polyfill, selected due to Node & browser applicability)
