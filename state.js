const config = require('./config');
module.exports = {
  balances: {
    [config.leader]: 0,
    "alloyxuast-cc": 0, //additional distributions
    ra: 0,
    rb: 0,
    rc: 0,
    rd: 0,
    re: 0,
    ri: 0, //in ICO account for fixed price
    rm: 0,
    rn: 0,
    rr: 0,
  },
  delegations: {}, //these need to be preloaded if already on account before starting block
  dex: {
    hbd: {
      tick: "0.012500", //ICO price
      buyBook: "",
    },
    hive: {
      tick: "0.100000", //ICO Price
      buyBook: "",
    },
  },
  gov: {
    [config.leader]: 1,
    t: 1, //total in other accounts
  },
  lt: {
    "rct:claim": {
      b: 0,
      d: "null_10000",
      h: 0,
      p: 112000,
      i: "rct:claim",
      o: "null",
      q: 3300000,
      s: "",
    },
  },
  markets: {
    node: {
      [config.leader]: {
        attempts: 0,
        bidRate: 2000,
        contracts: 0,
        domain: config.mainAPI,
        escrow: true,
        escrows: 0,
        lastGood: 63654900, //genesisblock
        marketingRate: 0,
        self: config.leader,
        wins: 0,
        yays: 0,
      },
    },
  },
  pow: {
    [config.leader]: 0,
    t: 0, //total in other accounts
  },
  queue: {
    0: [config.leader],
  },
  runners: {
    [config.leader]: {
      //config.leader
      g: 1, //config.mainAPI
    },
  },
  sets: {
    rct: {
      a: "alloyxuast", //author
      b: 0, //bond
      d: 0, //dividend
      e: "png", //handling
      f: 0, //fee
      i: "0000", // min purchase
      j: "CbgW", // max purchase
      m: "CbgW", // max range
      n: "rct", //set name
      nl: "Babble Token Claim Token", //long set name
      o: "0000", // min definable range
      p: "ragnarok-claim-tokens-update", //permlink
      r: "0", //royalty
      ra: "", //royalty account
      s: "", //nft script
      t: 0, //type
      u: "", //uids
    },
  },
  stats: {
    IPFSRate: 2000,
    budgetRate: 2000,
    chaos: 1,
    currationRate: 2000,
    delegationRate: 2000,
    dex_fee: "0.01000",
    dex_max: "100.00",
    dex_slope: "0.00",
    dluxPerDel: "0.000000",
    gov_threshhold: 0,
    delegationRate: 2000,
    hashLastIBlock: "Genesis",
    icoPrice: 1000, //in millihive
    interestRate: 999999999999, //mints 1 millitoken per this many millitokens in your DAO period
    lastBlock: "",
    liq_reward: 100,
    marketingRate: 2500,
    maxBudget: 1000000000,
    max_transfer: 20,
    ms: {
      account: "alloyxuast-cc",
      active_account_auths: {
        chisdealhd: 1,
      },
      active_threshold: 3,
      memo_key: "STM7ENRy7UsJs328k8T2kAq7zzvLUysPnfbquSZxCfxmCYxLH9Fym",
      owner_key_auths: {
        STM4xzEwbNBTXSkSTfiFK9VqMPHxsNr9SxFPrFfmrbok3AkbsG2dd: 1,
      },
      owner_threshold: 3,
      posting_account_auths: {
        chisdealhd: 1,
      },
      posting_threshold: 1,
    },
    MSHeld: {
      HIVE: 0,
      HBD: 0,
    },
    multiSigCollateral: 677442491,
    nft_byte_cost: 20,
    nft_fee_1: 100000,
    nodeRate: 2000,
    outOnBlock: 0, //amm ICO pricing
    safetyLimit: 17872397,
    savingsRate: 1000,
    tokenSupply: 1, //your starting token supply
  },
};
