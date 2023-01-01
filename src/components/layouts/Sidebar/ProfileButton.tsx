import React from "react";

import {
  Flex,
  Avatar,
  Text,
  Icon,
  Button,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

const ProfileButton: React.FunctionComponent = () => {
  return (
    <HStack
      as={Button}
      variant="ghost"
      size="lg"
      borderRadius="full"
      justify="space-between"
      align="center"
      alignSelf="start"
      gap={3}
      py={4}
      fontSize="md"
      height={{ base: "50px", xl: "70px" }}
    >
      <Flex align="center" textAlign="start" gap={2}>
        <Avatar
          src="https://pbs.twimg.com/profile_images/1361270870837252097/f5LZgTHj_400x400.jpg"
          size={{ base: "sm", xl: "md" }}
        />
        <VStack
          alignItems="flex-start"
          spacing={0}
          display={{ base: "none", xl: "unset" }}
        >
          <Text>Coder Boy Sobuj</Text>
          <Text color="GrayText">@coderboy</Text>
        </VStack>
      </Flex>

      <Icon as={FiMoreHorizontal} display={{ base: "none", xl: "unset" }} />
    </HStack>
  );
};

export default ProfileButton;
