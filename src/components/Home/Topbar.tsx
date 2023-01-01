import { Box, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { BsStars } from "react-icons/bs";

const TopBar: React.FunctionComponent = () => {
  return (
    <Flex
      position="sticky"
      top={2}
      align="center"
      justify="space-between"
      width="100%"
      px={3}
      py={2}
    >
      <Heading size="md" cursor="pointer">
        Home
      </Heading>
      <IconButton
        variant="ghost"
        aria-label="top tweet"
        title="Top tweet"
        rounded="full"
        icon={<Icon as={BsStars} fontSize="2xl" />}
      />
    </Flex>
  );
};

export default TopBar;
