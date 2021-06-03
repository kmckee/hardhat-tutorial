import React from "react";
import { Button } from "@material-ui/core";
import withStore from "../withStore";

const NotConnected = ({ store }) => {
  return (
    <div>
      <h1>Connect your wallet</h1>
      <p>Looks like you're not connected.</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => store.connect()}
      >
        Connect
      </Button>
    </div>
  );
};

export default withStore(NotConnected);
