const DOT_DECIMAL_PLACES = 1000000000000;

const{ ApiPromise, WsProvider } = require('@polkadot/api');

(async () => {

    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    // Retrieve the chain name - this should not change
    const chain = await api.rpc.system.chain();

    let lastHeader = await api.rpc.chain.getHeader();

    // Read in argument for the address
    let addr = process.argv[2];

    // Subscribe to balance changes for the account
    const unsub = await api.query.balances.freeBalance(addr, (balance) => {
	console.log(`Your account balance is ${balance / DOT_DECIMAL_PLACES}`);
    });

    // Subscribe to the new headers
    const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
	console.log(`${chain}: block #${lastHeader.number} =  hash ${lastHeader.hash}`);

    });

})()
