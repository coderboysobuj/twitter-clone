import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IConversationItemProps {
  active?: boolean;
}

const ConversationItem: React.FunctionComponent<IConversationItemProps> = ({
  active,
}) => {
  return (
    <Flex
      gap={3}
      paddingX={3}
      paddingY={4}
      cursor="pointer"
      bg={active ? "whiteAlpha.200" : "unset"}
      _hover={{ bg: "whiteAlpha.100" }}
      borderRight={active ? "2px" : "unset"}
      borderColor="blue.500"
    >
      <Avatar
        name="SK"
        src="https://pbs.twimg.com/profile_images/1506934924456042502/i4T8o65G_400x400.jpg"
      />
      <Flex direction="column">
        <Flex>
          <Text fontWeight="semibold">Jisan</Text>
          <Text color="GrayText">@web_dev</Text>
          <Text color="GrayText">. 24m</Text>
        </Flex>
        <Text color="GrayText">hi😍</Text>
      </Flex>
    </Flex>
  );
};

export default ConversationItem;
