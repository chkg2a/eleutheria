import { ethers } from "ethers";
import useWeb3State from "../store/Web3State";
const connectWallet=async()=>{
    const {setAddress,setProvider,setSigner}=useWeb3State((state)=>state);
    try {
        if(window.ethereum){
            const accounts=await window.ethereum.request({method:"eth_requestAccounts"});
            const selectedAccount=accounts[0];
            const provider=new ethers.BrowserProvider(window.ethereum);
            const signer=await provider.getSigner();
            setAddress(selectedAccount);
            setProvider(provider);
            setSigner(signer);
            console.log(selectedAccount,provider,signer);
        }
    } catch (error) {
        console.log(error);
    }
}
export default connectWallet