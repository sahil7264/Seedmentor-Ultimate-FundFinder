import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import SvgComponent from '../../Assets/svg/LogoWhite'
function Web() {
  return (
    <Flex gap={4} alignItems="center">
      <SvgComponent id="logo"/>
      <Text fontFamily="Roboto Mono" fontSize="2xl">
        seedmentor
      </Text>
    </Flex>
  );
}

export default Web;
