const PAGE_SIZE = 25;

module.exports = function(_call) {
  const call = function(method, params) {
    return _call('account', method, params);
  };

  return {
    balance: function(address) {
      return call('balance', {
        address: address,
        tag: 'latest'
      }).then((balance) => {
        // same format as balancemulti below
        return {
          account: address,
          balance: balance
        };
      });
    },

    balances: function(addresses) {
      return call('balancemulti', {
        address: addresses.join(','),
        tag: 'latest'
      });
    },

    transactions: function(address, page) {
      // page offset from 0
      return call('txlist', {
        address: address,
        page: (page || 0) + 1,
        offset: PAGE_SIZE,
        sort: 'desc'
      });
    }
  };
};
