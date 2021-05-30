import React from "react";
import withStore from "../withStore";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  padding: 1em;
  > * {
    margin-bottom: 1em;
  }
`;

const MobxSkeleton = ({ store }) => {
  return (
    <Container>
      <div>Count: {store.count}</div>
      <Button variant="contained" color="primary" onClick={() => store.tick()}>
        Tick
      </Button>
    </Container>
  );
};

export default withStore(MobxSkeleton);
