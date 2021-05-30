import { createContext } from "react";
import RootStore from "./state/RootStore";

const store = new RootStore();
window.store = store; // For debuggin'

export const RootStoreContext = createContext();
export const RootStoreContextProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
