/*
  info from:
    https://github.com/yamacoinproject/yamacoin/
*/

var common = {
  name: 'Yamacoin',
  unit: 'XYC'
}

var main = Object.assign({}, {
  hashGenesisBlock: '00000010ed34e226ed31c5f84e8e2d6f72bb0f7e4d14fe1fb05b7da428715981',
  // nDefaultPort
  port: 8543,
  portRpc: 8712,
  protocol: {
    // pchMessageStart
    magic: 0xc085a5f1 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'dnsseed.yama-co.in'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    private: 0x80,
    public: 0x1c,
    scripthash: 0x4e
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '0000003d6e61a4054d58905c85f390b0e4e3eb0e1aa4b86a098c1b5d24754abf',
  port: 18543,
  portRpc: 18712,
  protocol: {
    magic: 0xc187a5f1
  },
  seedsDns: [
    'dnsseed.testnet.yama-co.in'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    private: 0xef,
    public: 0x57,
    scripthash: 0x8c
  }
}, common)

var regtest = Object.assign({}, {
  hashGenesisBlock: '008b38958bda5b821c8b6fcdb15b51c4994a0c37333e72a47ccf95752009ec2d',
  port: 28543,
  portRpc: 28712,
  protocol: {
    magic: 0xc289a5f1
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    private: 0xef,
    public: 0x57,
    scripthash: 0x8c
  }
}, common)

module.exports = {
  main: main,
  test: test,
  regtest: regtest
}
