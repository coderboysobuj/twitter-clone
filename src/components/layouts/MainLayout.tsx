import React, { PropsWithChildren } from "react";

import { Container, Flex, Grid, GridItem, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";

interface IMainLayoutProps extends PropsWithChildren {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}) => {
  return (
    <Container
      maxWidth={{
        base: "container.xl",
        md: "container.sm",
        lg: "container.xl",
      }}
    >
      <Grid templateColumns="repeat(12, 1fr)" width="100%" height="100vh">
        <GridItem colSpan={{ base: 3, xl: 3 }} h="100%" padding={2}>
          <Sidebar />
        </GridItem>
        <GridItem height="100%" colSpan={{ base: 9, xl: 9 }}>
          {children}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default MainLayout;
