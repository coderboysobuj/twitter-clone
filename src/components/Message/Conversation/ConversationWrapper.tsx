import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import ConversationItem from "./ConversationItem";
import SearchInput from "./SearchInput";
import WelcomeMessage from "./WelcomeMessage";

const ConversationWrapper: React.FunctionComponent = () => {
  return (
    <>
      {/* <WelcomeMessage /> */}
      <Stack height="100%">
        <SearchInput />

        <Box
          flexGrow={1}
          overflowY="scroll"
          height="100%"
          sx={{
            "&::-webkit-scrollbar": {
              width: "10px",
              borderRadius: "5px",
              backgroundColor: `whiteAlpha.200`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `whiteAlpha.200`,
            },
          }}
        >
          <ConversationItem />

          <ConversationItem active />
          <ConversationItem />
        </Box>
      </Stack>
    </>
  );
};

export default ConversationWrapper;
