# Simple Contract Frontend

This project demonstrates how to deploy a simple Solidity smart contract and interact with it using a web frontend. The smart contract allows setting and getting a value and a name. The frontend is built with HTML and JavaScript and is hosted using Visual Studio Code's Live Server.

## Prerequisites

- **MetaMask**: Make sure you have MetaMask installed and configured.
- **Visual Studio Code**: Download and install [VS Code](https://code.visualstudio.com/).

## Step-by-Step Guide

### Step 1: Deploy the Smart Contract Using Remix

1. **Open Remix IDE**:
   - Go to [Remix IDE](https://remix.ethereum.org/).

2. **Create a new Solidity file**:
   - In the Remix IDE, create a new file named `SimpleContract.sol`.

3. **Write the Smart Contract**
   
Compile the Smart Contract:

1. Click on the "Solidity Compiler" tab on the left sidebar.
2. Click on the "Compile SimpleContract.sol" button.

Deploy the Smart Contract:

1. Click on the "Deploy & Run Transactions" tab on the left sidebar.
2. Select "Injected Web3" as the environment (make sure your MetaMask is connected).
3. Click on the "Deploy" button.
4. Confirm the transaction in MetaMask.

Get the Contract Address and ABI:

- After deployment, you'll see your contract under "Deployed Contracts".
- Copy the contract address.
- Click on the "ABI" button to copy the contract ABI.

### Step 2: Set Up the Frontend

Create an HTML File:

- Open VS Code.
- Create a new folder for your project.
- Inside this folder, create a file named `index.html`.

Create a JavaScript File:

- In the same folder, create a JavaScript file to interact with your contract.

Interact with Your Contract:

- Use the buttons on the webpage to interact with your deployed smart contract.

## License:

This project is licensed under the MIT License.
