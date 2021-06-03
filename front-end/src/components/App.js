import WelcomeSection from "./WelcomeSection";
import NotConnected from "./NotConnected";
import withStore from "../withStore";

function App({ store }) {
  if (store.wallet.isConnected === false) {
    return <NotConnected />;
  }
  return (
    <div>
      <WelcomeSection />
    </div>
  );
}

export default withStore(App);
