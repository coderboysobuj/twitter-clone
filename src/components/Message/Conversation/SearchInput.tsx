import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import ConversationItem from "./ConversationItem";

const SearchInput: React.FunctionComponent = () => {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <Stack justify="center">
      {!showSearchInput ? (
        <Box padding={3}>
          <Flex
            padding={2}
            onClick={() => {
              setShowSearchInput(true);
              searchInputRef.current?.focus();
            }}
            width="full"
            rounded="full"
            border="1px"
            borderColor="whiteAlpha.400"
            align="center"
            justify="center"
          >
            <Flex align="center" gap={2}>
              <Icon as={RiSearchLine} color="GrayText" fontSize="xl" />
              <Text color="GrayText">Search Direct Message</Text>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Stack spacing={4} padding={3}>
          <Flex align="center">
            <IconButton
              variant="ghost"
              rounded="full"
              onClick={() => setShowSearchInput(false)}
              aria-label="back"
              icon={<Icon as={IoArrowBackOutline} />}
            />
            <InputGroup>
              <InputLeftElement height="100%">
                <Icon color="GrayText" fontSize="xl" as={RiSearchLine} />
              </InputLeftElement>
              <Input
                ref={searchInputRef}
                rounded="full"
                size="lg"
                placeholder="Search direct meessage"
              />
            </InputGroup>
          </Flex>
          <Flex padding={5}>
            <Text textAlign="center" color="GrayText">
              Try searching for people, groups, or messages
            </Text>
          </Flex>
        </Stack>
      )}
    </Stack>
  );
};

export default SearchInput;
