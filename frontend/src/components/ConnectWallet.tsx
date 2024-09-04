import React from 'react'
import {ethers} from 'ethers'
import useWeb3State from "../store/Web3State";
import { useNavigate } from 'react-router-dom';
const ConnectWallet = () => {
    const navigate=useNavigate();
    const {setAddress,setProvider,setSigner}=useWeb3State((state)=>state);
    console.log(setAddress,setProvider,setSigner);
    const handleConnect=async()=>{
        try {
            const accounts=await window.ethereum.request({method:"eth_requestAccounts"});
            const selectedAccount=accounts[0];
            setAddress(selectedAccount);
            const provider=new ethers.BrowserProvider(window.ethereum);
            const signer=await provider.getSigner();
            setProvider(provider);
            setSigner(signer);
            console.log(selectedAccount,provider,signer);
            if(selectedAccount){
                navigate('/getpost');
            }

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <button onClick={handleConnect}>Connect</button>
    </div>
  )
}

export default ConnectWallet
