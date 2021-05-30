import { createContext } from "react";
import RootStore from "./state/RootStore";
import Transport from "./state/Transport";

const transport = new Transport();
const store = new RootStore(transport);
window.store = store; // For debuggin'

export const RootStoreContext = createContext();
export const RootStoreContextProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
