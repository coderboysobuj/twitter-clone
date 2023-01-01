import { Box, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import MessageLayout from "../components/layouts/MessageLayout";
import ConversationWrapper from "../components/Message/Conversation/ConversationWrapper";
import { InitialMessageBox } from "../components/Message/MessageBox/InitialMessageBox";
import MessageBox from "../components/Message/MessageBox/MessageBox";
import Topbar from "../components/Message/Topbar";

const Message = () => {
  return (
    <>
      <Head>
        <title>Social - Message</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <MessageLayout
          left={
            <Stack height="90vh">
              <Topbar />

              <ConversationWrapper />
            </Stack>
          }
          right={<MessageBox />}
        />
      </MainLayout>
    </>
  );
};

export default Message;
