import React from "react";
import withStore from "../withStore";

const TokenDashboard = ({ store }) => {
  return (
    <div>
      <h1>
        {store.token.name} ({store.token.symbol})
      </h1>
      <p>
        Welcome, {store.wallet.address}! You have{" "}
        {store.token.balance?.toString()} units of {store.token.symbol}. Wicked.
      </p>
    </div>
  );
};

export default withStore(TokenDashboard);
