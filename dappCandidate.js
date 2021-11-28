// contract address on Ropsten:

const ssAddress = '0x61a29d5eeD275057f50260BCc8cce3C460Bcb500'
// add contract ABI from Remix:

const ssABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "student",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "scholarshipId",
				"type": "uint256"
			}
		],
		"name": "LogAddStudent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "grantsAvailable",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "scholarshipId",
				"type": "uint256"
			}
		],
		"name": "LogScholarshipAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "grantsAvailable",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "scholarshipId",
				"type": "uint256"
			}
		],
		"name": "LogScholarshipClosed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_scholarshipId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_winner",
				"type": "address"
			}
		],
		"name": "LogScholarshipWinner",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_scholarshipId",
				"type": "uint256"
			}
		],
		"name": "LogSearchScholarship",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "student",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "LogSendPrize",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "acceptedStudents",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_numSeats",
				"type": "uint256"
			}
		],
		"name": "addScholarship",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scholarshipId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_studentAddress",
				"type": "address"
			}
		],
		"name": "addToWhiteList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "collateral",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scholarshipId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_studentId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "enroll",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_mark1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_mark2",
				"type": "uint256"
			}
		],
		"name": "marksManagmt",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scholarshipId",
				"type": "uint256"
			}
		],
		"name": "scholarshipDeadline",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scholarshipId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "scholarships",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalSeats",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "takenSeats",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isOpen",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "pool",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scholarshipId",
				"type": "uint256"
			}
		],
		"name": "searchForScholarship",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalSeats",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "takenSeats",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isOpen",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_pool",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scholarshipId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_studentId",
				"type": "uint256"
			}
		],
		"name": "studentWithdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "students",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "addressStudent",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "mark1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mark2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "percentage",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isPassed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
window.addEventListener('load', function () {
	if (typeof window.ethereum !== 'undefined') {
		console.log('window.ethereum is enabled')
		if (window.ethereum.isMetaMask === true) {
			console.log('MetaMask is active')
			let mmDetected = document.getElementById('mm-detected')
			let text = 'Available'
			let av = text.fontcolor("green")
			let av1 = av.bold()
			mmDetected.innerHTML += 'MetaMask is ' + av1 + '!'
			// add in web3 here
			var web3 = new Web3(window.ethereum)
		} else {
			console.log('MetaMask is not available')
			let mmDetected = document.getElementById('mm-detected')
			mmDetected.innerHTML += 'MetaMask Not Available!'
		}
	} else {
		console.log('window.ethereum is not found')
		let mmDetected = document.getElementById('mm-detected')
		mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
	}
})

var web3 = new Web3(window.ethereum)
// Grabbing the button object,
const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async () => {
	await ethereum.request({ method: 'eth_requestAccounts' })
	var mmCurrentAccount = document.getElementById('mm-current-account');
	let text = ethereum.selectedAddress
	let av1 = text.bold()
	mmCurrentAccount.innerHTML = 'Current Account: ' + av1
}

// grab the button for input to a contract:
const ssSubmitInscription = document.getElementById('inscription-btn');
ssSubmitInscription.onclick = async () => {
	console.log('Done!0');
	const ssValue1 = document.getElementById('scholarshipId-inputText-student').value;
	console.log(ssValue1)
	const ssValue2 = document.getElementById('studentId-inputText-student').value;
	console.log(ssValue2)
	const ssValue3 = document.getElementById('fullName-inputText').value;
	console.log(ssValue3)
	console.log('Done!1')
	var web3 = new Web3(window.ethereum);
	const collateral = web3.utils.toBN(web3.utils.toWei('1', 'ether'));
	console.log('Done!2');
	const schContract = new web3.eth.Contract(ssABI, ssAddress);
	console.log('Done!3');
	schContract.setProvider(window.ethereum);
	console.log('Done!4');
	const res = await schContract.methods.enroll(ssValue1, ssValue2, ssValue3).send({from: ethereum.selectedAddress, value: collateral});
	console.log(res);
	console.log('Done!5');
	alert('You have successfully registered')
}

const ssSubmitWithdraw = document.getElementById('withdraw-btn');
ssSubmitWithdraw.onclick = async () => {
	const ssValue1 = document.getElementById('scholarshipId-inputText-withdraw').value;
	console.log(ssValue1)
	const ssValue2 = document.getElementById('studentId-inputText-withdraw').value;
	console.log(ssValue2)
	console.log('Done!1')

	var web3 = new Web3(window.ethereum);
	console.log('Done!2');
	const schContract = new web3.eth.Contract(ssABI, ssAddress);
	console.log('Done!3');
	schContract.setProvider(window.ethereum);
	console.log('Done!4');
	await schContract.methods.studentWithdraw(ssValue1,ssValue2).send({from: ethereum.selectedAddress });
	console.log('Done!5');
	alert('Congratulation! You have successfully withdraw your money')
}
