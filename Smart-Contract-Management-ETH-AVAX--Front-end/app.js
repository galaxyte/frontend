const contractAddress = "0x0f87229a25623c4D7909B66ce35d9Ee6F7b62822"; 
const contractABI = 
    
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                }
            ],
            "name": "setName",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "setValue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
let web3;
let contract;

window.addEventListener('load', async () => {
   
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
        } catch (error) {
            console.error("User denied account access");
        }
    }
    
    else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    }
    
    else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }

    contract = new web3.eth.Contract(contractABI, contractAddress);
});

async function setValue() {
    const value = document.getElementById('valueInput').value;
    const accounts = await web3.eth.getAccounts();
    contract.methods.setValue(value).send({ from: accounts[0] });
}

async function getValue() {
    const value = await contract.methods.getValue().call();
    document.getElementById('valueDisplay').innerText = value;
}

async function setName() {
    const name = document.getElementById('nameInput').value;
    const accounts = await web3.eth.getAccounts();
    contract.methods.setName(name).send({ from: accounts[0] });
}

async function getName() {
    const name = await contract.methods.getName().call();
    document.getElementById('nameDisplay').innerText = name;
}
