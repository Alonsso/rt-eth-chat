import * as React from 'react';
import { useState } from 'react';
import Web3 from 'web3';

declare let window: any;

export const Web3Login = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState('');

    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            window.alert("No Ethereum browser detected! Check out MetaMask");
        }
        return provider;
    };

    const onConnect = async() => {
        try {
          const currentProvider = detectProvider();
          if(currentProvider) {
            await currentProvider.request({method: 'eth_requestAccounts'});
            const web3 = new Web3(currentProvider);
            const userAccount  =await web3.eth.getAccounts();
            const account = userAccount[0];
            setCurrentAccount(account);
            setIsConnected(true);
          }
        } catch(err) {
          console.log(err);
        }
      }

    const onLogout = () => {
        setIsConnected(false);
        setCurrentAccount('');
    };

    return (
        <div>
            <header className="main-header">
                <h1>React &amp; Web3</h1>
                <h3>{currentAccount}</h3>
            </header>
            <main>
                {!isConnected && <button onClick={onConnect}>Connect to Metamask</button>}
                {isConnected && (
                    <button onClick={onLogout}>Disconnect</button>
                )}
            </main>
        </div>
    );
}