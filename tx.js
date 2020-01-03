const DOT_DECIMAL_PLACES = 1000000000000;

// Note addition of Keyring
const{ ApiPromise, WsProvider, Keyring } = require('@polkadot/api');

(async () => {


    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
    const api = await ApiPromise.create({ provider })

    const keyring = new Keyring({ type: 'sr25519' });

    // replace with your own mnemonic phrase
    // NOTE: very dangerous to leave this in plain sight!
    const PHRASE = '';

    const user = keyring.addFromUri(PHRASE);

    console.log(user.meta);

    console.log(`Sending from address ${user.address} with publicKey [${user.publicKey}]`);


    // Read in argument for the address
    let addr = process.argv[2];

    // Sign and send a transfer from Alice to Bob
    const txHash = await api.tx.balances
	  .transfer("Eowspt1aYdoEmqACLD6wJVNHbAn4FiP3efNRUF9ExhWGxky", 1000000)
	  .signAndSend(user);

    // Show the hash
    console.log(`Submitted with hash ${txHash}`);

    // process.exit()
})()
