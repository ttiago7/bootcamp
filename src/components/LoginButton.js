import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";

const LoginButton = () => {
  return (
    <Link to="/register">
      <Flex
        w="fit-content"
        gap={1}
        // transition="all 0.3s ease 0s"
        // _active={{ transform: "transform: translateY(-1px)" }}
        _hover={{
          boxShadow: "0px 4px 20px rgb(18 162 247 / 79%)",
          // transform: "translateY(-3px)",
        }}
        cursor="pointer"
        color="white"
        p="8px 10px 7px"
        bgColor="#1446c7"
        fontWeight="500"
        border="none"
        borderRadius="45px"
        boxShadow="0px 8px 15px rgba(0,0,0,0.1)"
      >
        <IoPersonCircleOutline fontSize="25px" />
        <Text d={["none", "none", "unset", "unset"]}>Ingresá</Text>
      </Flex>
    </Link>
  );
};
export default LoginButton;
