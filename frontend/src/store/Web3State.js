import {create} from "zustand";

const StateData=(set)=>{
    return ({
        address:"",
        provider:null,
        signer:null,
        contract:null,
        setAddress:(account)=>set({address:account}),
        setProvider:(provider)=>set({provider:provider}),
        setSigner:(signer)=>set({signer:signer}),
        setContract:(contract)=>set({contract:contract}),
    });
}

const useWeb3State=create(StateData);
export default useWeb3State
