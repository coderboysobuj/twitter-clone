import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput: React.FunctionComponent = () => {
  return (
    <Box>
      <InputGroup alignItems="center" color="GrayText">
        <InputLeftElement height="100%">
          <Icon as={CiSearch} fontSize="xl" />
        </InputLeftElement>
        <Input
          rounded="full"
          size="lg"
          placeholder="Search Twitter"
          variant="filled"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
