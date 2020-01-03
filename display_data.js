const DOT_DECIMAL_PLACES = 1000000000000;

const{ ApiPromise, WsProvider } = require('@polkadot/api');

(async () => {

    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    // Retrieve the chain name - this should not change
    const chain = await api.rpc.system.chain();

    //
    let lastHeader = await api.rpc.chain.getHeader();

    // Subscribe to the new headers
    const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
	console.log(`${chain}: block #${lastHeader.number} =  hash ${lastHeader.hash}`);

    });

    // process.exit()
})()
