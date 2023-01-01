import { Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
const Header = () => {
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
      <Flex align="center" gap={6}>
        <IconButton
          variant="ghost"
          aria-label="top tweet"
          title="Top tweet"
          rounded="full"
          icon={<Icon as={IoArrowBackOutline} fontSize="2xl" />}
        />
        <Flex direction="column" textAlign="start">
          <Heading size="md" cursor="pointer">
            Jiasn Khan
          </Heading>
          <Text color="GrayText">23 Tweet</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
