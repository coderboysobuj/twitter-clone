import {
  Avatar,
  Button,
  Flex,
  Icon,
  IconButton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

import { FaTwitter, FaHome } from "react-icons/fa";
import { HiOutlineMail, HiOutlineClipboardList } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { CiUser, CiCircleMore } from "react-icons/ci";
import { MdExplore, MdNotifications, MdMessage } from "react-icons/md";
import ProfileButton from "./ProfileButton";
import { RiLeafLine } from "react-icons/ri";

const Sidebar: React.FunctionComponent = () => {
  return (
    <VStack
      alignItems="flex-start"
      position="fixed"
      top={0}
      spacing={4}
      py={4}
      justifyContent="space-between"
      height="100%"
    >
      <VStack alignItems="flex-start">
        <Button
          aria-label="twitter-logo"
          borderRadius="full"
          size={{ base: "sm", lg: "lg" }}
          variant="ghost"
        >
          <Icon as={FaTwitter} fontSize="3xl" borderRadius="full" />
        </Button>
        <Stack spacing={1}>
          <Item icon={FaHome} link="/" text="Home" />
          <Item icon={MdExplore} link="/explore" text="Explore" />
          <Item
            icon={RiNotification2Line}
            link="/notification"
            text="Notifications"
          />
          <Item icon={HiOutlineMail} link="/message" text="Message" />
          <Item icon={BsBookmark} link="/bookmarks" text="Bookmarks" />
          <Item icon={HiOutlineClipboardList} link="/lists" text="Lists" />
          <Item icon={CiUser} link="/profile" text="Profile" />
          <Item icon={CiCircleMore} link="/more" text="More" />

          <Button
            display={{ base: "none", xl: "unset" }}
            size="lg"
            bg="blue.400"
            color="white"
            colorScheme="blue"
            borderRadius="full"
          >
            Tweet
          </Button>
          <IconButton
            rounded="full"
            display={{ xl: "none" }}
            aria-label="tweet"
            variant="ghost"
            icon={<Icon as={RiLeafLine} fontSize="3xl" />}
          />
        </Stack>
      </VStack>

      <ProfileButton />
    </VStack>
  );
};

export default Sidebar;
