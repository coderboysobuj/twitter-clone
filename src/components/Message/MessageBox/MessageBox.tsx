import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";

import { BiInfoCircle } from "react-icons/bi";

import { CgImage } from "react-icons/cg";
import { AiOutlineFileGif, AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import Message from "./Message";
import ProfileIntro from "./ProfileIntro";

const MessageBox: React.FunctionComponent = () => {
  return (
    <Flex direction="column" minH="100%">
      <Flex justify="flex-end">
        <IconButton
          aria-label="info"
          variant="ghost"
          icon={<Icon as={BiInfoCircle} fontSize="xl" />}
        />
      </Flex>

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
        <Stack padding={2} width="100%">
          <ProfileIntro />
          <Divider />
          <Stack py={2}>
            <Message />
          </Stack>
        </Stack>
      </Box>
      <Stack>
        <Divider />
        <Flex gap={2} bg="whiteAlpha.100" rounded="3xl" px={2} py={1}>
          <HStack spacing={0}>
            <IconButton
              variant="ghost"
              colorScheme="blue"
              aria-label="img"
              rounded="full"
              icon={<Icon as={CgImage} fontSize="lg" />}
            />
            <IconButton
              variant="ghost"
              colorScheme="blue"
              aria-label="img"
              rounded="full"
              icon={<Icon as={AiOutlineFileGif} fontSize="lg" />}
            />
            <IconButton
              variant="ghost"
              colorScheme="blue"
              aria-label="img"
              rounded="full"
              icon={<Icon as={BsEmojiSmile} fontSize="lg" />}
            />
          </HStack>
          <Input
            flexGrow={1}
            variant="unstyled"
            placeholder="Start a new message"
          />

          <IconButton
            variant="ghost"
            colorScheme="blue"
            aria-label="img"
            rounded="full"
            icon={<Icon as={AiOutlineSend} fontSize="lg" />}
          />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default MessageBox;
