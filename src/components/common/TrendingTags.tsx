import { Stack, Heading, Flex, IconButton, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
interface ITrendingTagsPros {
  hasBg?: boolean;
}
const TrendingTags: React.FunctionComponent<ITrendingTagsPros> = ({
  hasBg,
}) => {
  return (
    <Stack bg={hasBg ? "whiteAlpha.50" : "unset"} rounded="2xl">
      <Heading size="md" px={4} py={3}>
        Trends for you
      </Heading>
      <Stack spacing={0}>
        {[0, 1, 2].map((i) => (
          <Flex
            key={i}
            px={4}
            py={2}
            _hover={{ bg: "whiteAlpha.50" }}
            transition="all .5s"
            cursor="pointer"
            justify="space-between"
          >
            <Flex direction="column">
              <Text size="sm" color="GrayText">
                Trending in bangladesh
              </Text>
              <Text>#FIFAWorldCup</Text>
              <Text size="sm" color="GrayText">
                34k Tweet
              </Text>
            </Flex>
            <IconButton
              aria-label="trending-menu"
              rounded="full"
              variant="ghost"
              icon={<Icon as={FiMoreHorizontal} />}
            />
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default TrendingTags;
