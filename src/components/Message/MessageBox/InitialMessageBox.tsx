import { Button, Center, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const InitialMessageBox: React.FunctionComponent = () => {
  return (
    <Center padding={9}>
      <VStack padding={9} alignItems="flex-start" spacing={7}>
        <Stack spacing={1}>
          <Heading size="lg">Select a message!</Heading>
          <Text color="GrayText" fontSize="sm">
            Drop a line, share Tweets and more with private conversations
            between you and others on Twitter.
          </Text>
        </Stack>
        <Button
          size="lg"
          rounded="full"
          colorScheme="blue"
          bg="blue.400"
          color="white"
        >
          New message
        </Button>
      </VStack>
    </Center>
  );
};
