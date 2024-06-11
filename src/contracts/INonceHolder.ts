export const INonceHolderABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'accountAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'key',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'ValueSetUnderNonce',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		name: 'getDeploymentNonce',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		name: 'getMinNonce',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		name: 'getRawNonce',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_key',
				type: 'uint256',
			},
		],
		name: 'getValueUnderNonce',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'increaseMinNonce',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		name: 'incrementDeploymentNonce',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_expectedNonce',
				type: 'uint256',
			},
		],
		name: 'incrementMinNonceIfEquals',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
		],
		name: 'isNonceUsed',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_key',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'setValueUnderNonce',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_key',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_shouldBeUsed',
				type: 'bool',
			},
		],
		name: 'validateNonceUsage',
		outputs: [],
		stateMutability: 'view',
		type: 'function',
	},
] as const;
