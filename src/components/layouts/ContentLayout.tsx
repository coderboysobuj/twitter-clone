import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface IContentLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const ContentLayout: React.FunctionComponent<IContentLayoutProps> = ({
  left,
  right,
}) => {
  return (
    <Grid templateColumns="repeat(15, 1fr)" height="100vh">
      <GridItem
        colSpan={{ base: 15, lg: 9 }}
        height="100%"
        borderRight="1px"
        borderLeft="1px"
        borderColor="whiteAlpha.300"
      >
        <Stack width="100%">{left}</Stack>
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "grid" }}
        colSpan={6}
        height="100%"
        padding={3}
      >
        {right}
      </GridItem>
    </Grid>
  );
};

export default ContentLayout;
