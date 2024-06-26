// https://docs.zksync.io/build/sdks/go/types/types.html#l2bridgecontracts
export const IL2BridgeABI = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_l1Sender',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_l2Receiver',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_l1Token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes',
			},
		],
		name: 'finalizeDeposit',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'l1Bridge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_l2Token',
				type: 'address',
			},
		],
		name: 'l1TokenAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_l1Token',
				type: 'address',
			},
		],
		name: 'l2TokenAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_l1Receiver',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_l2Token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const;
