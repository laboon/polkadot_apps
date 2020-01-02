const{ ApiPromise, WsProvider } = require('@polkadot/api');


(async () => {

    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    const chain = await api.rpc.system.chain();

    console.log(`You are connected to ${chain} !`);
    process.exit()
})()
