import { Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import React from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { RiMailAddLine } from "react-icons/ri";

const Topbar: React.FunctionComponent = () => {
  return (
    <Flex
      position="sticky"
      top={2}
      align="center"
      justify="space-between"
      width="100%"
      padding={3}
    >
      <Heading size="md" cursor="pointer">
        Messages
      </Heading>
      <Flex>
        <IconButton
          variant="ghost"
          aria-label="top tweet"
          title="Top tweet"
          rounded="full"
          icon={<Icon as={IoSettingsOutline} fontSize="xl" />}
        />
        <IconButton
          variant="ghost"
          aria-label="top tweet"
          title="Top tweet"
          rounded="full"
          icon={<Icon as={RiMailAddLine} fontSize="xl" />}
        />
      </Flex>
    </Flex>
  );
};

export default Topbar;
