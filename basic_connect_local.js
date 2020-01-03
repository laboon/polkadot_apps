const{ ApiPromise, WsProvider } = require('@polkadot/api');


(async () => {
    // Note the change to local provider here
    const provider = new WsProvider('ws://127.0.0.1:9944')
    const api = await ApiPromise.create({ provider })

    const chain = await api.rpc.system.chain();

    console.log(`You are connected to ${chain} !`);
    process.exit()
})()
