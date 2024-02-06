#!/usr/bin/env -S deno run --allow-env --allow-read --allow-net --unstable-sloppy-imports --quiet

import { Web3 } from 'web3';
import { BatchDetails, ZkSyncPlugin } from './src';

const zkSyncRpcUrl: string = 'https://sepolia.era.zksync.dev';

console.log(`📞 Connecting to zkSync Era [${zkSyncRpcUrl}]`);
const web3: Web3 = new Web3(zkSyncRpcUrl);
web3.registerPlugin(new ZkSyncPlugin());

// https://chainlist.org/chain/11155111
console.log(`🎉 Connected to ${zkSyncRpcUrl} [Chain ID: ${await web3.zkSync.rpc.l1ChainId()}]`);

console.log("\n 📝📝📝 NETWORK DETAILS 📝📝📝 \n");

// https://docs.zksync.io/build/quick-start/useful-address.html#sepolia-contract-addresses
console.log(`💎 Main Contract (DiamondProxy): ${await web3.zkSync.rpc.getMainContract()}`);
console.log(`💸 L2TestnetPaymaster: ${await web3.zkSync.rpc.getTestnetPaymaster()}`);

// https://docs.zksync.io/build/quick-start/useful-address.html#sepolia-token-bridge-contract-addresses
const bridges = await web3.zkSync.getDefaultBridgeAddresses();
console.log(`🌉 L1ERC20BridgeProxy: ${bridges.erc20L1}`);
console.log(`🌉 L2ERC20Bridge: ${bridges.erc20L2}`);

// https://sepolia.explorer.zksync.io/batches/
const latestBatchIndex: bigint = await web3.zkSync.rpc.getL1BatchNumber();
const latestBatchDetails: BatchDetails = await web3.zkSync.rpc.getL1BatchDetails(latestBatchIndex);
console.log("\n 🚢🚢🚢 LATEST BATCH 🚢🚢🚢\n");

console.log(`#️⃣  Index: ${latestBatchIndex}`);
console.log(`🕰️  Timestamp: ${new Date(latestBatchDetails.timestamp * 1000)}`);
console.log(`🫚  Batch Root: ${latestBatchDetails.rootHash}`);
if (latestBatchDetails.commitTxHash !== undefined) {
    console.log(`✅ Commit Hash: ${latestBatchDetails.commitTxHash}`);
    console.log(`🔍 Committed: ${new Date(latestBatchDetails.committedAt ?? new Date())}`);
} else {
    console.log("❌ Not Committed");
}
