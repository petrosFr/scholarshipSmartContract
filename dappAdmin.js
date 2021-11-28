
// contract address on Ropsten:

const ssAddress = '0x3C042AaE348c2756abC4f77B8096a9B50E57e4cb'
// add contract ABI from Remix:

const ssABI =[
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

// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

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
			// let node = document.createTextNode('<p>MetaMask Not Available!<p>')
			// mmDetected.appendChild(node)
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

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account. 
// 
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example

mmEnable.onclick = async () => {
	await ethereum.request({ method: 'eth_requestAccounts' })
	// grab mm-current-account
	// and populate it with the current address
	var mmCurrentAccount = document.getElementById('mm-current-account');
	let text = ethereum.selectedAddress
	let av1 = text.bold()
	mmCurrentAccount.innerHTML = 'Current Account: ' + av1
}

// grab the button for input to a contract:


const ssSubmitScholarship = document.getElementById('addScholarship-btn');
//document.getElementsByTagName("form")[0].onsubmit = function() {return false;}
ssSubmitScholarship.onclick = async () => {
	const ssValue1 = document.getElementById('scholarshipName-inputText').value;
	console.log(ssValue1)
	const ssValue2 = document.getElementById('scholarshipnumgranttxt').value;
	console.log(ssValue2)
	var web3 = new Web3(window.ethereum);
	const schContract = new web3.eth.Contract(ssABI, ssAddress);
	schContract.setProvider(window.ethereum);
	await schContract.methods.addScholarship(ssValue1, ssValue2).send({ from: ethereum.selectedAddress });
	alert('Scholarship ' + ssValue1 + ' is added')
}

const ssSubmit2 = document.getElementById('scholarshipSearch-btn')
ssSubmit2.onclick = async () => {
	var ssValue1 = document.getElementById('search-inputText').value;
	console.log(ssValue1)

	var web3 = new Web3(window.ethereum)
	const schContract = new web3.eth.Contract(ssABI, ssAddress)
	schContract.setProvider(window.ethereum)

	const result = await schContract.methods.searchForScholarship(ssValue1).call({ from: ethereum.selectedAddress })
	console.log(result)
	document.getElementById('mm-scholarship-info').innerHTML = '<h4> Name of Scholarship: ' + result[0] + '</h4>'
	document.getElementById('mm-scholarship-info').innerHTML += '<h4> Total Seats: ' + result[1] + '</h4>'
	document.getElementById('mm-scholarship-info').innerHTML += '<h4>Taken Seats: ' + result[2] + '</h4>'
	document.getElementById('mm-scholarship-info').innerHTML += '<h4>This scholarship is open: ' + result[3] + '</h4>'
	document.getElementById('mm-scholarship-info').innerHTML += '<h4>Pool funds: ' + result[4] + ' Wei </h4>'
}

// whitelist part
const ssSubmitCandidateAddress = document.getElementById('addaddressToWhitelist-btn');
ssSubmitCandidateAddress.onclick = async () => {
	const ssValue1 = document.getElementById('scholarshipId-inputText-whitelist').value;
	console.log(ssValue1)

	const ssValue2 = document.getElementById('studentaddress-inputText-whitelist').value;
	console.log(ssValue2)
	console.log('Done!1')

	var web3 = new Web3(window.ethereum);
	console.log('Done!2');
	const schContract = new web3.eth.Contract(ssABI, ssAddress);
	console.log('Done!3');
	schContract.setProvider(window.ethereum);
	console.log('Done!4');
	await schContract.methods.addToWhiteList(ssValue1, ssValue2).send({ from: ethereum.selectedAddress });
	console.log('Done!5');
	alert('New student is added')
}

const ssSubmitDeadline = document.getElementById('deadline-btn');
ssSubmitDeadline.onclick = async () => {
	const ssValue1 = document.getElementById('scholarshipId-inputText-deadline').value;
	console.log(ssValue1)
	console.log('Done!1')

	var web3 = new Web3(window.ethereum);
	console.log('Done!2');
	const schContract = new web3.eth.Contract(ssABI, ssAddress);
	console.log('Done!3');
	schContract.setProvider(window.ethereum);
	console.log('Done!4');
	await schContract.methods.scholarshipDeadline(ssValue1).send({ from: ethereum.selectedAddress });
	console.log('Done!5');
	alert('Scholarship ' + ssValue1 + ' is closed')
}


const ssSubmitRecords = document.getElementById('studentRecord-btn');
ssSubmitRecords.onclick = async () => {
	const ssValue1 = document.getElementById('studentId-inputText-record').value;
	console.log(ssValue1)
	const ssValue2 = document.getElementById('mark1-inputText-record').value;
	console.log(ssValue2)
	const ssValue3 = document.getElementById('mark2-inputText-record').value;
	console.log(ssValue3)
	console.log('Done!1')

	var web3 = new Web3(window.ethereum);
	console.log('Done!2');
	const schContract = new web3.eth.Contract(ssABI, ssAddress);
	console.log('Done!3');
	schContract.setProvider(window.ethereum);
	console.log('Done!4');
	await schContract.methods.marksManagmt(ssValue1, ssValue2, ssValue3).send({ from: ethereum.selectedAddress });
	console.log('Done!5');
	alert('Student ' + ssValue1 + ' record is created')
}
