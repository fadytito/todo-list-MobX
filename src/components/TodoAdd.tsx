import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

function TodoAdd() {
  const [inputVal, setInputVal] = React.useState('')
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
      <Button disabled={!!!inputVal}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
