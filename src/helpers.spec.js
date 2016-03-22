'use strict';

const chai = require('chai');

require('es6-promise').polyfill();
require('isomorphic-fetch');

const TESTADDR = '0xbf885e2b55c6bcc84556a3c5f07d3040833c8d00';

global.expect = chai.expect; // eslint-disable-line no-undef

module.exports = {
  address: TESTADDR,
  etherscan: require('./index.js')
};
