module.exports = function(_call) {
  const call = function(action) {
    return _call('stats', action);
  };

  return {
    price: function() {
      return call('ethprice');
    },

    supply: function() {
      return call('ethsupply');
    }
  };
};
