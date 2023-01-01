import { Box, Divider, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/common/Footer";
import RecomendedPeople from "../components/common/RecomendedPeople";
import SearchInput from "../components/common/SearchInput";
import TrendingTags from "../components/common/TrendingTags";
import Feed from "../components/Feed";
import ContentLayout from "../components/layouts/ContentLayout";
import MainLayout from "../components/layouts/MainLayout";

const Explore = () => {
  return (
    <>
      <Head>
        <title>Twitter - explore</title>
      </Head>
      <MainLayout>
        <ContentLayout
          left={
            <Stack>
              <Box py={1} px={2}>
                <SearchInput />
              </Box>
              <TrendingTags />
              <Divider />
              <Feed />
              <Feed />
              <Feed />
              <Feed />
              <Feed />
            </Stack>
          }
          right={
            <Stack position="sticky" top={0} height="100vh">
              <RecomendedPeople />
              <Footer />
            </Stack>
          }
        />
      </MainLayout>
    </>
  );
};

export default Explore;
