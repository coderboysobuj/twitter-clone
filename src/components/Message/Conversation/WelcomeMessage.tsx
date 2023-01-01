import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const WelcomeMessage: React.FunctionComponent = () => {
  return (
    <VStack padding={8} alignItems="flex-start" spacing={7}>
      <Stack spacing={1}>
        <Heading size="lg">Welcome to your inbox!</Heading>
        <Text color="GrayText" fontSize="sm">
          Drop a line, share Tweets and more with private conversations between
          you and others on Twitter.
        </Text>
      </Stack>
      <Button
        size="lg"
        rounded="full"
        colorScheme="blue"
        bg="blue.400"
        color="white"
      >
        Write a message
      </Button>
    </VStack>
  );
};

export default WelcomeMessage;
