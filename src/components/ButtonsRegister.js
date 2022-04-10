import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const ButtonsRegister = () => {
  return (
    <>
      <Flex flexDirection="column" gap={4}>
        <Flex
          gap={6}
          bgColor="white"
          p="7px"
          alignItems="center"
          borderRadius="5px"
        >
          <Box borderRadius="25px" boxShadow="2px 2px 5px 1px grey">
            <FcGoogle color="#fff" fontSize={"30px"} />
          </Box>
          <Text>Iniciar con Google</Text>
        </Flex>
        <Flex
          gap={6}
          bgColor="white"
          p="7px"
          alignItems="center"
          borderRadius="5px"
        >
          <Box borderRadius="25px" boxShadow="2px 2px 5px 1px grey">
            <BsFacebook color="#005aff" fontSize={"30px"} />
          </Box>
          <Text>Iniciar con Facebook</Text>
        </Flex>
      </Flex>
    </>
  );
};
export default ButtonsRegister;
