import { create } from "zustand";

// Define the shape of the state
interface Web3State {
  address: string;
  provider: any;        // Adjust the type here if you know the specific type (e.g., ethers.js provider)
  signer: any;          // Same here, if you know the type
  contract: any;        // Replace `any` with the type of your contract
  creatorAddress: string;
  user:Object;
  
  // Actions to update the state
  setAddress: (account: string) => void;
  setProvider: (provider: any) => void;   // Adjust type based on provider type (if known)
  setSigner: (signer: any) => void;       // Adjust type based on signer type (if known)
  setContract: (contract: any) => void;   // Adjust type based on contract type (if known)
  setCreatorAddress: (creatorAddress: string) => void;
  setUser: (user:Object) => void;
}

// Now define the state and actions
const useWeb3State = create<Web3State>((set) => ({
  address: "",
  provider: null,
  signer: null,
  contract: null,
  creatorAddress: "",
  user:null,
  
  setAddress: (account) => set({ address: account }),
  setProvider: (provider) => set({ provider: provider }),
  setSigner: (signer) => set({ signer: signer }),
  setContract: (contract) => set({ contract: contract }),
  setCreatorAddress: (creatorAddress) => set({ creatorAddress: creatorAddress }),
  setUser: (account) => set({ address: account }),
}));

export default useWeb3State;
