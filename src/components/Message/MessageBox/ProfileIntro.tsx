import { Avatar, Center, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProfileIntro: React.FunctionComponent = () => {
  return (
    <Center
      rounded="md"
      padding={8}
      _hover={{ bg: "whiteAlpha.100" }}
      cursor="pointer"
    >
      <VStack>
        <VStack spacing={0}>
          <Avatar src="https://pbs.twimg.com/profile_images/1506934924456042502/i4T8o65G_400x400.jpg" />
          <Text>Jisan</Text>
          <Text color="GrayText">@jisan_49</Text>
        </VStack>
        <Text>Web & software developer</Text>
        <Text color="GrayText">Joined September 2021 · 13 Followers</Text>
      </VStack>
    </Center>
  );
};

export default ProfileIntro;
