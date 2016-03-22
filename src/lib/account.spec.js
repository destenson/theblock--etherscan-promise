const helper = require('../helpers.spec.js');
const { address, etherscan } = helper;

describe('lib/account', () => {
  const checkBalance = function(balance, addr) {
    expect(balance).to.be.ok;
    expect(balance.account).to.equal(addr);
    expect(balance.balance).to.be.ok;
  };

  it('retrieves an account balance', () => {
    return etherscan.account
      .balance(address)
      .then((balance) => {
        checkBalance(balance, address);
      });
  });

  it('retrieves multi account balances', () => {
    const addresses = ['0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae', address];

    return etherscan.account
      .balances(addresses)
      .then((balances) => {
        expect(balances).to.be.ok;
        expect(balances.length).to.equal(2);
        balances.forEach((balance, idx) => {
          checkBalance(balance, addresses[idx]);
        });
      });
  });

  describe('transactions', () => {
    it('retrievs a list of transactions (default)', () => {
      return etherscan.account
        .transactions(address)
        .then((transactions) => {
          expect(transactions).to.be.ok;
          expect(transactions.length).to.equal(25);
        });
    });

    it('retrievs a list of transactions (page 1)', () => {
      return etherscan.account
        .transactions(address, 1)
        .then((transactions) => {
          expect(transactions).to.be.ok;
          expect(transactions.length).to.equal(25);
        });
    });
  });
});
