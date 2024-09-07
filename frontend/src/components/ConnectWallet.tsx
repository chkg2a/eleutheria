import React from 'react'
import {ethers} from 'ethers'
import useWeb3State from "../store/Web3State";
import { useNavigate } from 'react-router-dom';
import Abi from "./ABI.json";
import axios from 'axios';
const ConnectWallet = () => {
    const navigate=useNavigate();
    const {setAddress,setProvider,setSigner,setContract}=useWeb3State((state)=>state);
    console.log(setAddress,setProvider,setSigner);
    const handleConnect=async()=>{
        try {
            const accounts=await window.ethereum.request({method:"eth_requestAccounts"});
            const selectedAccount=accounts[0];
            const url="http://localhost:3000/update/address";
            const token=localStorage.getItem('token');
            const res = await axios.post(url, {address:selectedAccount}, { 
              headers: {
                  Authorization: `Bearer ${token}`, 
              }
          });
            console.log(res.data.address);
            setAddress(selectedAccount);
            const provider=new ethers.BrowserProvider(window.ethereum);
            const signer=await provider.getSigner();
            setProvider(provider);
            setSigner(signer);
            const contractAddress="0x8F88Ad8D58D4519d0b1915C72AC9c7De46c936Fe";
            const contract= new ethers.Contract(contractAddress,Abi,signer);
            setContract(contract);
            console.log(selectedAccount,provider,signer,contract);
            

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
