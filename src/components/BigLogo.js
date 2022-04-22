import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const BigLogo = () => {
  return (
    <Link to="/">
      <Flex gap={2}>
        <Logo />
        <Heading fontWeight="bold" as="cite" fontSize={"40px"}>
          Fares
        </Heading>
      </Flex>
    </Link>
  );
};

export default BigLogo;
