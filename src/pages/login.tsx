import { Button, Center, Icon, Stack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import CreateUser from "../components/Auth/CreateUser";

const LoginPage = () => {
  const session = {
    username: undefined,
  };

  return (
    <>
      <Head>
        <title>Twitter - Login</title>
      </Head>
      <Center height="100vh">
        {!session.username ? (
          <CreateUser />
        ) : (
          <Stack>
            <Button
              variant="outline"
              colorScheme="gray"
              size="lg"
              leftIcon={<Icon as={FaGoogle} fontSize="3xl" />}
            >
              Continue with google
            </Button>
          </Stack>
        )}
      </Center>
    </>
  );
};

export default LoginPage;
