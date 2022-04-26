import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";

const BigLogo = () => {
  return (
    <Link to="/">
      <Flex gap={2} alignItems="center">
        <Logo />
        <Heading
          display={["none", "unset", "unset", "unset"]}
          fontWeight="bold"
          as="cite"
          fontSize={["24px", "24px", "34px", "34px"]}
        >
          Fares
        </Heading>
      </Flex>
    </Link>
  );
};

export default BigLogo;
