const DOT_DECIMAL_PLACES = 1000000000000;

const{ ApiPromise, WsProvider } = require('@polkadot/api');

(async () => {

    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    // Note the .toNumber() here!
    const existentialDeposit = await api.consts.balances.existentialDeposit.toNumber();

    console.log(`Existential deposit for chain is ${existentialDeposit / DOT_DECIMAL_PLACES} KSM.`);

    process.exit()
})()
