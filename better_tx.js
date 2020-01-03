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

    const unsub = await api.tx.balances
	  .transfer("Eowspt1aYdoEmqACLD6wJVNHbAn4FiP3efNRUF9ExhWGxky", 111111111)
	  .signAndSend(user, ({ events = [], status }) => {
	      console.log(`Current status is ${status.type}`);

	      if (status.isFinalized) {
		  console.log(`Transaction included at blockHash ${status.asFinalized}`);

		  events.forEach(({ phase, event: { data, method, section } }) => {
		      console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
		  });

		  unsub();
	      }
	  });

})()
