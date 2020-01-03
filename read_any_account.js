const DOT_DECIMAL_PLACES = 1000000000000;

const{ ApiPromise, WsProvider } = require('@polkadot/api');

(async () => {

    let addr = process.argv[2];

    // Connect to a node (this is a public one)
    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    const balance = await api.query.balances.freeBalance(addr);

    console.log(`${addr} has ${balance / DOT_DECIMAL_PLACES} KSM `);

    process.exit()
})()
