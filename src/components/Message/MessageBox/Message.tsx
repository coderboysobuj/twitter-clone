import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Message = () => {
  const isOwnMessage = true;
  return (
    <Flex justify={isOwnMessage ? "end" : "start"}>
      <Flex width="50%" justify={isOwnMessage ? "end" : "start"}>
        <VStack
          alignItems={isOwnMessage ? "flex-end" : "flex-start"}
          spacing={0}
        >
          <Flex
            bg={isOwnMessage ? "blue.400" : "whiteAlpha.400"}
            rounded="lg"
            px={3}
            py={2}
          >
            <Text>What is up</Text>
          </Flex>
          <Text color="GrayText">3:23pm yesterday</Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Message;
