import { Stack, Divider } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Right from "../components/common/Right";
import Feed from "../components/Feed";
import CreateFeedBox from "../components/Home/CreateFeedBox";
import ContentLayout from "../components/layouts/ContentLayout";
import MainLayout from "../components/layouts/MainLayout";
import Header from "../components/Profile/Header";
import ProfileDetails from "../components/Profile/ProfileDetails";

const profile = () => {
  return (
    <>
      <Head>
        <title>Social network</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ContentLayout
          left={
            <Stack>
              <Header />
              <ProfileDetails />
              <Divider py={3} />
              <Stack spacing={0}>
                <>
                  <Feed />
                  <Divider />
                </>
                <>
                  <Feed />
                  <Divider />
                </>
                <>
                  <Feed />
                  <Divider />
                </>
              </Stack>
            </Stack>
          }
          right={<Right />}
        />
      </MainLayout>
    </>
  );
};

export default profile;
