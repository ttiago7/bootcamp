import { FaHome, FaUsers, FaWpforms } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonPerfil from "../components/ButtonPerfil";
import BigLogo from "../components/BigLogo";
import { navbar } from "../components/_styles";
const NavbarAdmin = () => {
  const items = [
    { id: 1, link: "/post", name: "Crear Post", icon: <IoIosAddCircle /> },
    { id: 2, link: "/", name: "Home", icon: <FaHome /> },
    { id: 3, link: "/nosotros", name: "Nosotros", icon: <FaUsers /> },
  ];
  return (
    <Box bgGradient="linear(to-l, #1ca183,#4acf86)" color="black" p="1rem">
      <Container maxWidth="90%">
        <Flex justifyContent="space-between">
          <BigLogo />
          <Flex alignItems="center" gap={6}>
            {items.map((item) => (
              <Link to={item.link} key={item.id}>
                <Text style={navbar.navbarLink} gap="4px" _hover={navbar.hover}>
                  {item.icon}
                  {item.name}
                </Text>
              </Link>
            ))}
            <Box bgColor="green" p="7px" borderRadius="6px">
              <Link to="/cv">
                <Text style={navbar.navbarLink} _active={navbar.active} gap={1}>
                  <FaWpforms /> Subir CV
                </Text>
              </Link>
            </Box>
            <ButtonPerfil />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default NavbarAdmin;
