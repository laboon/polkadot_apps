const DOT_DECIMAL_PLACES = 1000000000000;

const{ ApiPromise, WsProvider } = require('@polkadot/api');

(async () => {

    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    // Read in argument for the address
    let addr = process.argv[2];

    // Subscribe to balance changes for the account
    const unsub = await api.query.balances.freeBalance(addr, (balance) => {
	console.log(`Your account balance is ${balance / DOT_DECIMAL_PLACES}`);
    });

    // process.exit()
})()
