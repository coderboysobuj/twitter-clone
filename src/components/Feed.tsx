import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { FaRetweet } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { AiOutlineRetweet } from "react-icons/ai";
const Feed: React.FunctionComponent = () => {
  return (
    <Flex gap={5} padding={3}>
      <Avatar src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" />

      <Flex justifyContent="space-between">
        <Stack spacing={0}>
          <Flex gap={2}>
            <Text fontWeight="bold">SK Sabbir</Text>
            <Text>@web_dev</Text>
            <Text>2h</Text>
          </Flex>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
            delectus.
          </Text>
          <Stack py={3}>
            <Image rounded="lg" src="/img/demo.jpg" />
            <HStack alignItems="flex-start" gap={8}>
              <Flex
                align="center"
                _hover={{ color: "blue.400" }}
                cursor="pointer"
                gap={1}
              >
                <IconButton
                  aria-label="like"
                  fontSize="xl"
                  rounded="full"
                  colorScheme="blue"
                  variant="ghost"
                  icon={<Icon as={FaRegComment} />}
                />
                <Text color="GrayText">2</Text>
              </Flex>
              <Flex
                align="center"
                _hover={{ color: "blue.400" }}
                cursor="pointer"
                gap={1}
              >
                <IconButton
                  aria-label="like"
                  fontSize="xl"
                  rounded="full"
                  colorScheme="blue"
                  variant="ghost"
                  icon={<Icon as={AiOutlineRetweet} />}
                />
                <Text color="GrayText">2</Text>
              </Flex>
              <Flex
                align="center"
                _hover={{ color: "blue.400" }}
                cursor="pointer"
                gap={1}
              >
                <IconButton
                  aria-label="like"
                  fontSize="xl"
                  rounded="full"
                  colorScheme="red"
                  variant="ghost"
                  icon={<Icon as={BiHeart} />}
                />
                <Text color="GrayText">2</Text>
              </Flex>
              <Flex
                align="center"
                _hover={{ color: "blue.400" }}
                cursor="pointer"
                gap={1}
              >
                <IconButton
                  aria-label="like"
                  fontSize="xl"
                  rounded="full"
                  colorScheme="blue"
                  variant="ghost"
                  icon={<Icon as={HiOutlineArrowUpTray} />}
                />
                <Text color="GrayText">2</Text>
              </Flex>
            </HStack>
          </Stack>
        </Stack>
        <IconButton
          rounded="full"
          variant="ghost"
          colorScheme="blue"
          aria-label="menu"
          icon={<Icon as={IoIosMore} />}
        />
      </Flex>
    </Flex>
  );
};

export default Feed;
