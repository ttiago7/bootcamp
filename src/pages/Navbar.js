import { Link } from "react-router-dom";
import { navbar } from "../components/_styles";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome, FaUsers, FaWpforms } from "react-icons/fa";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import BigLogo from "../components/BigLogo";

const Navbar = () => {
  const items = [
    { id: 1, link: "/", name: "Home", icon: <FaHome /> },
    { id: 2, link: "/contacto", name: "Contactos", icon: <FaPhoneAlt /> },
    { id: 3, link: "/nosotros", name: "Nosotros", icon: <FaUsers /> },
  ];
  const itemButtons = [
    { id: 1, link: "/login", name: "Login" },
    { id: 2, link: "/register", name: "Register" },
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
            {itemButtons.map((button) => (
              <Link to={button.link} key={button.id}>
                <Box _active={navbar.active} style={navbar.buttons}>
                  <Text style={navbar.navbarLink} gap={1}>
                    <FaWpforms />
                    {button.name}
                  </Text>
                </Box>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default Navbar;
