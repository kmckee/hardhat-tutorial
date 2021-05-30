import React from "react";
import withStore from "../withStore";

const MobxSkeleton = ({ store }) => {
  return (
    <div>
      <div>Count: {store.count}</div>
      <button onClick={() => store.tick()}>Tick</button>
    </div>
  );
};

export default withStore(MobxSkeleton);
