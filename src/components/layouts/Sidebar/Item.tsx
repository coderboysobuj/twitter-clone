import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

import { type IconType } from "react-icons";
import { useRouter } from "next/router";

interface IItemProps {
  text?: string;
  icon: IconType;
  link: string;
  size?: "lg" | "xl" | "2xl" | "3xl";
}

const Item: React.FunctionComponent<IItemProps> = ({
  text,
  icon,
  link,
  size,
}) => {
  const router = useRouter();

  return (
    <Link href={link}>
      <Flex
        direction="row"
        borderRadius="full"
        fontSize="xl"
        as={Button}
        variant="ghost"
        gap={3}
        size={{ base: "md", lg: "lg" }}
        fontWeight={router.pathname === link ? "bold" : "normal"}
      >
        <Icon as={icon} fontSize={size ? size : "2xl"} />

        <Text display={{ base: "none", xl: "unset" }}>{text}</Text>
      </Flex>
    </Link>
  );
};

export default Item;
