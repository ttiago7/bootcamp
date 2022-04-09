import { ChevronDownIcon, SettingsIcon, InfoIcon } from "@chakra-ui/icons";
import { FaCamera, FaHome, FaUsers, FaWpforms } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
const NavbarAdmin = () => {
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
            <Link to="/post">
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
                Crear Post
              </Text>
            </Link>
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
            <Link to="/cv">
              <Box bgColor="green" p="7px" borderRadius="6px">
                <Text
                  fontWeight="semibold"
                  _active={active}
                  d="flex"
                  alignItems="center"
                  gap={1}
                >
                  <FaWpforms /> Subir CV
                </Text>
              </Box>
            </Link>
            <Menu closeOnBlur>
              <MenuButton
                p={"8px 16px"}
                transition="all 0.2s"
                borderRadius="md"
                bgColor="#000000"
                color="#2ec4b6"
                fontSize={"17px"}
                letterSpacing={0.5}
                fontWeight="bold"
                boxShadow="xl"
              >
                Perfil
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem gap={2}>
                    <InfoIcon />
                    Mis datos
                  </MenuItem>
                  <MenuItem gap={2}>
                    <FaCamera />
                    Foto
                  </MenuItem>
                  <MenuItem gap={2}>
                    <SettingsIcon />
                    Modificar
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default NavbarAdmin;
