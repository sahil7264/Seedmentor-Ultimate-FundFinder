import React from "react";
import { Divider, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";

import { useFetch } from "../../../../Hooks/useFetch";
import DraftItem from "./DraftItem";

function Drafts() {
  let url = "https://seedmentor.onrender.com/api/proposal/draft";
  const { data, isLoading, error } = useFetch(url, "GET");
  if (error) {
    alert(error);
  }
  return (
    <>
      <Text fontSize="2xl">Drafts</Text>
      <Divider mb={4} />
      <Flex direction="column" gap={4} w="100%">
        {/* fetched drafts paper */}
        <Flex wrap="wrap">
          {isLoading && (
            <Stack w="100%">
              <Skeleton h="60px" />
              <Skeleton h="60px" />
              <Skeleton h="60px" />
            </Stack>
          )}
          {!isLoading &&
            data && data.data.length!==0 &&
            data.data.map((paper) => {
              return <DraftItem key={paper._id} paper={paper} />;})}
          {!isLoading &&
            data && !data.data.length && <Flex color="grey" w="100vw" h="10vh"align="center" justify="center">Nothing to show here. Create a new draft or Upload an existing one</Flex>}
        </Flex>
      </Flex>
    </>
  );
}

export default Drafts;
