import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { FiMoreHorizontal } from "react-icons/fi";
import Footer from "./Footer";
import RecomendedPeople from "./RecomendedPeople";
import SearchInput from "./SearchInput";
import TrendingTags from "./TrendingTags";

const Right: React.FunctionComponent = () => {
  return (
    <Stack width="100%" px={4} height="100vh" position="sticky" top={2}>
      <SearchInput />
      <Stack>
        <TrendingTags hasBg />
        <RecomendedPeople />
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Right;
