// import { ChevronDownIcon, SettingsIcon, InfoIcon } from "@chakra-ui/icons";
import { FaHome, FaUsers, FaWpforms } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { Box, Button, Container, Flex, Heading, Link } from "@chakra-ui/react";
// import logo from "../assets/images/logoFares.jpeg";
import Logo from "../components/Logo";

const Navbar = () => {
  return (
    <Box bgGradient="linear(to-l, #1ca183,#4acf86)" color="black" p="1rem">
      <Container maxWidth="90%">
        <Flex justifyContent="space-between">
          <Flex gap={2}>
            <Logo />
            <Heading fontWeight="bold" as="cite" fontSize={"40px"}>
              Fares
            </Heading>
          </Flex>
          <Flex alignItems="center" gap={6}>
            <Link
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
            </Link>
            <Link
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
            </Link>

            <Link
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
            </Link>
            <Button
              leftIcon={<FaWpforms />}
              colorScheme="blackAlpha"
              boxShadow="xl"
            >
              Login
            </Button>
            <Button
              leftIcon={<FaWpforms />}
              colorScheme="blackAlpha"
              boxShadow="xl"
            >
              Register
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
