# etherscan-promise

A thin, lightweight promise wrapper for the api.etherscan.io/apis service, exposing a common endpoint for use elsewhere

## polyfill dependencies

The environment needs to support ES6 Promises and the fetch api. To polyfill support in all browsers/environments, these are recommended -

- [es6-promise](https://www.npmjs.com/package/es6-promise) (or any other Promise polyfill)
- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) (or any other fetch polyfill, selected due to Node & browser applicability)

## usage

installation -

```
npm install --save @theblock/etherscan-promise
```

For browsers, include the `node_modules/@theblock/etherscan-promise/build/browser.js` into your HTML. (This exposes the etherscan object on `window.etherscan`). Usage in Node -

```
const etherscan = require('@theblock/etherscan-promise');

// api calls goes here
```

## api

account (exposed on etherscan.account) -

- `balance(address)`
- `balances(addresses)` (array or addresses)
- `transactions(address, page)` (page offset starts at 0, returns 25)

stats (exposed on etherscan.stats) -

- `price()`
- `supply()`
