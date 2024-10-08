import { create } from "zustand";

const StateData = (set) => {
  return ({
    address: "",
    provider: null,
    signer: null,
    contract: null,
    creatorAddress: "",
    user: null,
    member:false,
    setAddress: (account) => set({ address: account }),
    setProvider: (provider) => set({ provider: provider }),
    setSigner: (signer) => set({ signer: signer }),
    setContract: (contract) => set({ contract: contract }),
    setCreatorAddress: (creatorAddress) =>
      set({ creatorAddress: creatorAddress }),
    setUser: (user) => set({ user: user }),
    setMember: (member) => set({ member: member }),
  });
};

const useWeb3State = create(StateData);
export default useWeb3State;
