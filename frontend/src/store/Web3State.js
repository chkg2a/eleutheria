import { create } from "zustand";

const StateData = (set) => {
  return ({
    address: "",
    provider: null,
    signer: null,
    contract: null,
    creatorAddress: "",
    user: null,
    setAddress: (account) => set({ address: account }),
    setProvider: (provider) => set({ provider: provider }),
    setSigner: (signer) => set({ signer: signer }),
    setContract: (contract) => set({ contract: contract }),
    setCreatorAddress: (creatorAddress) =>
      set({ creatorAddress: creatorAddress }),
    setUser: (user) => set({ user: user }),
  });
};

const useWeb3State = create(StateData);
export default useWeb3State;
