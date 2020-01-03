// NOTE: If this does not work, be sure you have websockets
// open and rpc-cors set to all when running your local
// polkadot instance
// ./target/release/polkadot --ws-port 9944 --ws-external  --rpc-cors="all"
// For details, see https://github.com/paritytech/polkadot/issues/588

const{ ApiPromise, WsProvider } = require('@polkadot/api');

(async () => {
    // Note the change to local provider here
    const provider = new WsProvider('ws://127.0.0.1:9944')
    const api = await ApiPromise.create({ provider })

    const chain = await api.rpc.system.chain();

    console.log(`You are connected to ${chain} !`);
    process.exit()
})()
