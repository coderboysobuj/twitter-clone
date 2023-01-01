import { Stack, Heading, Flex, Avatar, Button, Text } from "@chakra-ui/react";
import React from "react";

const RecomendedPeople = () => {
  return (
    <Stack bg="whiteAlpha.50" rounded="2xl">
      <Heading size="md" px={4} py={4}>
        Who to follow
      </Heading>
      <Stack spacing={0}>
        {[0, 1, 2].map((i) => (
          <Flex
            key={i}
            px={4}
            py={3}
            _hover={{ bg: "whiteAlpha.50" }}
            transition="all .5s"
            cursor="pointer"
            justify="space-between"
            align="center"
          >
            <Flex gap={2}>
              <Avatar
                size="md"
                src="https://pbs.twimg.com/profile_images/1506934924456042502/i4T8o65G_400x400.jpg"
              />
              <Flex direction="column">
                <Text>Mohammad Sabbir</Text>
                <Text size="sm" color="GrayText">
                  @developer_sabbir
                </Text>
              </Flex>
            </Flex>
            <Button
              bg="whiteAlpha.900"
              color="black"
              height="32px"
              rounded="full"
              colorScheme="blue"
            >
              Follow
            </Button>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default RecomendedPeople;
