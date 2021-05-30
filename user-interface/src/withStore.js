import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "./RootStoreContext";

const withStore = (BaseComponent) => {
  const ObservedComponent = observer(BaseComponent);
  return ({ children, ...props }) => {
    const store = useContext(RootStoreContext);
    return (
      <ObservedComponent store={store} {...props}>
        {children}
      </ObservedComponent>
    );
  };
};

export default withStore;
