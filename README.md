# polkadot_apps
Interacting with Polkadot

## Setup

1. Ensure that you have recent versions of Node and Yarn
2. Install dependencies with `yarn` - you may also have to do `yarn add @polkadot/api@beta`
3. To run, `node foo.js`

## Kinds of Calls

1. Constants - A constant feature of the chain.  These are things that the API does not need to do any work to get, they can just see the value.
2. Queries - These are basically function calls to get some data.
3. Tx - Issue an actual on-chain extrinsic.  Note that even though this looks like it would only contain transactions, it is for any extrinsic.
4. Events - Listening for events occurring on-chain.

## Basic Connection

Connect to Kusama

See [`basic_connect.js`](basic_connect.js)

Connect to local node (could be connected to Kusama, running local chain, etc.)

See [`basic_connect_local.js`](basic_connect_local.js)

## Reading Constants

See [`read_constants.js`](read_constants.js)

## Calling Functions

See [`read_account.js`](call_functions.js)

## Script to Check Balances

See [`read_any_account.js`](read_any_account.js)

## Subscribing to Events

See [`display_data.js`](display_data.js)

See [`account_watcher.js`](account_watcher.js)

## Transactions

See [`tx.js`](tx.js)

See [`better_tx.js`](better_tx.js)

## A More Complex Script

See [`Anson Lau's Validator Stats script`](https://github.com/ansonla3/kusama-validator-stats)

## Moving Beyond

1. Dig into the API [https://polkadot.js.org/api/](https://polkadot.js.org/api/)
1. Start programming the UI [https://polkadot.js.org/ui/start/](https://polkadot.js.org/ui/start/)
1. polkadot.js source and links to other tutorials: [https://github.com/polkadot-js/apps](https://github.com/polkadot-js/apps)
1. Various CLI tools to help your development [https://github.com/polkadot-js/tools](https://github.com/polkadot-js/tools)
