import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";

interface IMessageLayoutProps {
  left: JSX.Element;
  right: JSX.Element;
}

const MessageLayout: React.FunctionComponent<IMessageLayoutProps> = ({
  left,
  right,
}) => {
  return (
    <Grid templateColumns="repeat(15, 1fr)" height="100vh">
      <GridItem
        colSpan={6}
        height="100%"
        borderRight="1px"
        borderLeft="1px"
        borderColor="whiteAlpha.300"
      >
        <Stack width="100%" height="100%">
          {left}
        </Stack>
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "grid" }}
        colSpan={9}
        height="100vh"
        padding={3}
      >
        {right}
      </GridItem>
    </Grid>
  );
};

export default MessageLayout;
