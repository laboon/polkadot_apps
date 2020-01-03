const DOT_DECIMAL_PLACES = 1000000000000;

const{ ApiPromise, WsProvider } = require('@polkadot/api');

// We must wrap everything up in an async block
(async () => {

    // Connect to a node (this is a public one)
    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    const ADDR = 'GiBnzCGFofhmAvsUv9FUShUb8YJYYwWex3ThQNkbDDNprS6';

    const balance = await api.query.balances.freeBalance(ADDR);

    console.log(`${ADDR} has ${balance / DOT_DECIMAL_PLACES} KSM `);

    process.exit()
})()
