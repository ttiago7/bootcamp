import { FaHome, FaUsers, FaWpforms } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const active = {
    transform: "scale(0.96)",
  };
  return (
    <Box bgGradient="linear(to-l, #1ca183,#4acf86)" color="black" p="1rem">
      <Container maxWidth="90%">
        <Flex justifyContent="space-between">
          <Link to="/">
            <Flex gap={2}>
              <Logo />
              <Heading fontWeight="bold" as="cite" fontSize={"40px"}>
                Fares
              </Heading>
            </Flex>
          </Link>
          <Flex alignItems="center" gap={6}>
            <Link to="/">
              <Text
                _hover={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "#fdfffc",
                }}
                d="flex"
                alignItems="center"
                gap={1}
                as="abbr"
                fontWeight="semibold"
              >
                <FaHome />
                Home
              </Text>
            </Link>
            <Link to="/contacto">
              <Text
                _hover={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "#fdfffc",
                }}
                d="flex"
                alignItems="center"
                gap={1}
                as="abbr"
                fontWeight="semibold"
              >
                <IoIosAddCircle />
                Contactanos
              </Text>
            </Link>
            <Link to="/nosotros">
              <Text
                _hover={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "#fdfffc",
                }}
                d="flex"
                alignItems="center"
                gap={1}
                fontWeight="semibold"
                as="abbr"
              >
                <FaUsers />
                Nosotros
              </Text>
            </Link>
            <Link to="/login">
              <Box bgColor="#0069fa" p="7px" borderRadius="6px">
                <Text
                  fontWeight="semibold"
                  _active={active}
                  d="flex"
                  alignItems="center"
                  gap={1}
                >
                  <FaWpforms /> Login
                </Text>
              </Box>
            </Link>
            <Link to="/register">
              <Box bgColor="green" p="7px" borderRadius="6px">
                <Text
                  fontWeight="semibold"
                  _active={active}
                  d="flex"
                  alignItems="center"
                  gap={1}
                >
                  <FaWpforms />
                  Register
                </Text>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
